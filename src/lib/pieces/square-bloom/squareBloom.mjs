import { getScaled2dContext } from "$lib/canvasUtil.mjs"
import { rainbow5 as paletteImport, pickRandom} from "$lib/palettes.mjs";
import Vector2 from '$lib/Vector2';

let canvas;
let ctx, width, height;

const count = 25000,
maximumAttempts = 100;

let palette = paletteImport;
const backgroundColor = "#0D1821";

let superRoot = new Square(Vector2.zero(), 1000000, null); //acts as sentinel for dealing with root's parent; never drawn
let root;

function Square(pos, size, parent, color) {
  this.pos = pos;
  this.size = size;
  this.parent = parent;
  this.children = [];
  this.color = color;
}

Square.prototype.distance = function(point) {
  return this.pos.chebyshev(point);
}

Square.prototype.isDistanceEnclosed = function(distance) {
  return distance <= this.size;
};

function generateCandidateSquare(point, parent, offset) {
  let potentialSize = parent.size - Vector2.zero().chebyshev(point);
  //check if the point is in any of the parent's descendants
  for(let i = 0; i < parent.children.length; i++) {
    let square = parent.children[i];
    let distance = square.distance(point);
    if(square.isDistanceEnclosed(distance)) {
      return generateCandidateSquare(point.subtract(square.pos), square, offset.add(square.pos));
    }
    else {
      potentialSize = Math.min(distance - square.size, potentialSize);
    }
  }
  //return parent if the point is, instead, a direct descendant of parent
  return {offsetPoint: point, parent, potentialSize};
}

function generateSquares(root, padding, threshold) {
  let squaresGenerated = 0;

  while(squaresGenerated < count) {	//generate new squares till either enough squares are drawn are till attempts expire
    let attemptsLeft = maximumAttempts;
    while(--attemptsLeft > 0) {
      let newPoint = new Vector2(
        rangeFloor(-root.size, root.size),
        rangeFloor(-root.size, root.size)
      );
      let {offsetPoint, parent, potentialSize} = generateCandidateSquare(newPoint, root, root.pos);
      let size = potentialSize - padding;
      if(size > threshold) {	//filters squares that are too small
        let square = new Square(offsetPoint, size, parent, pickRandom(palette));
        square.globalPos = newPoint;
        // parent.children.push(square);
        sortedPush(parent.children, square, (a, b) => {return a.size - b.size})
        squaresGenerated++;
        break;
      }
    }
    if(attemptsLeft <= 0)	//halt generation of squares after maximumAttempts consecutive failures.
      break;
  }
}

function sortedPush(array, element, compare) {
  array.push(element);
  let i = array.length - 1;
  while(i > 0 && compare(element, array[i-1]) > 0) {
    array[i] = array[i-1];
    i--;
  }
  array[i] = element;
}


function strokeSquare(square) {
  ctx.strokeStyle = square.color;
  ctx.beginPath();
  let pos = square.pos.subtract(new Vector2(square.size, square.size));
  ctx.rect(pos.x, pos.y, square.size * 2, square.size * 2);
  ctx.stroke();
};

function fillSquare(square) {
  ctx.fillStyle = square.color;
  ctx.beginPath();
  let pos = square.pos.subtract(new Vector2(square.size, square.size));
  ctx.rect(pos.x, pos.y, square.size * 2, square.size * 2);
  ctx.fill();
};

function drawElementsWithParameters(style, borderWidth, leafsOnly=false) {
  let drawSquare = strokeSquare;
  if(style == "Fill") {
    drawSquare = fillSquare;
  }

  ctx.lineWidth  = borderWidth; 

  let drawRecursively = function(root) {
    if(!leafsOnly || root.children.length == 0) { //if leafsOnly only draw squares with no children
      drawSquare(root);
    }
    if(root.children.length > 0) {
      ctx.save();
      ctx.translate(root.pos.x, root.pos.y);
      root.children.forEach(drawRecursively);
      ctx.restore();
    }
  }
  return drawRecursively;
}

function rangeFloor(min, max) {
  // Return a random whole number between min and max
  return Math.floor(Math.random() * (max - min) + min);
}

function init(canvasIn, canvasWidth, canvasHeight) {
  canvas = canvasIn;
  width = canvasWidth;
  height = canvasHeight;

  ctx = getScaled2dContext(canvas, width, height);
  width /= 2;
  height /= 2;
  ctx.translate(width, height);
  
  let {padding, threshold, borderWidth} = presets.medium;
  draw(padding, threshold, borderWidth);
}

function draw(padding, threshold, borderWidth, style, leafsOnly=false, regenerate=true) {
  ctx.fillStyle = backgroundColor;
  ctx.rect(-width, -height, 2*width, 2*height);
  ctx.fill();

  if(regenerate || root === undefined) {
    root = new Square(Vector2.zero(), width - borderWidth, superRoot, pickRandom(palette));
    generateSquares(root, padding, threshold);  
  }
  
  let drawMethod = drawElementsWithParameters(style, borderWidth, leafsOnly);
  drawMethod(root);
}


let presets = {
  "verySmall": {
    "name": "Very Small",
    "padding": 1,
    "threshold": 1,
    "borderWidth": 0.75
  },
  "small": {
    "name": "Small",
    "padding": 2,
    "threshold": 1,
    "borderWidth": 1
  },
  "medium": {
    "name": "Medium",
    "padding": 4,
    "threshold": 2,
    "borderWidth": 2
  },
  "large": {
    "name": "Large",
    "padding": 9,
    "threshold": 6,
    "borderWidth": 5
  },
  "spaced-out": {
    "name": "Spaced out",
    "padding": 16,
    "threshold": -4,
    "borderWidth": 1.5
  },
};

export  {
  init,
  draw,
  presets,
}
