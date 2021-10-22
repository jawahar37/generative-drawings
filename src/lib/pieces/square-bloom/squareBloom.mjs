import { getScaled2dContext } from "$lib/canvasUtil.mjs"
import { rainbow5 as paletteImport, pickRandom} from "$lib/palettes.mjs";
import Vector2 from '$lib/Vector2';

let canvas;
let ctx, width, height;

const count = 25000,
maximumAttempts = 100;

let palette = paletteImport;

function Square(pos, size, parent) {
  this.pos = pos;
  this.size = size;
  this.parent = parent;
  this.children = [];
}

Square.prototype.distance = function(point) {
  return this.pos.chebyshev(point);
}

Square.prototype.isDistanceEnclosed = function(distance) {
  return distance <= this.size;
};

Square.prototype.stroke = function() {
  ctx.strokeStyle = pickRandom(palette);
  ctx.beginPath();
  let pos = this.pos.subtract(new Vector2(this.size, this.size));
  ctx.rect(pos.x, pos.y, this.size * 2, this.size * 2);
  ctx.stroke();
};

Square.prototype.fill = function() {
  ctx.fillStyle = pickRandom(palette);
  ctx.beginPath();
  let pos = this.pos.subtract(new Vector2(this.size, this.size));
  ctx.rect(pos.x, pos.y, this.size * 2, this.size * 2);
  ctx.fill();
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
        let square = new Square(offsetPoint, size, parent);
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

function drawSquaresBorders(root) {
  root.stroke();
  if(root.children.length > 0) {
    ctx.save();
    ctx.translate(root.pos.x, root.pos.y);
    root.children.forEach(drawSquaresBorders);
    ctx.restore();
  }
}

function drawSquaresFill(root) {
  root.fill();
  if(root.children.length > 0) {
    ctx.save();
    ctx.translate(root.pos.x, root.pos.y);
    root.children.forEach(drawSquaresFill);
    ctx.restore();
  }
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

function draw(padding, threshold, borderWidth, style) {
  ctx.clearRect(-width, -height, 2*width, 2*height);
  let superRoot = new Square(Vector2.zero(), 1000000, null); //acts as sentinel for dealing with root's parent; never drawn
  let root = new Square(Vector2.zero(), width - borderWidth, superRoot);

  generateSquares(root, padding, threshold);
  
  ctx.lineWidth  = borderWidth;
  
  if(style == "Border") {
    drawSquaresBorders(root);
  }
  else if (style == "Fill") {
    drawSquaresFill(root);
  }
  else {
    drawSquaresBorders(root);
  }
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
