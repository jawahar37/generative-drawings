import getScaled2dContext from "../canvasUtil.mjs"

let canvas;
let ctx, width, height;

let count = 10000,
maximumAttempts = 100;

let pallete = ["#ff595e","#ffca3a","#8ac926","#1982c4", "#6A4C93"];

function Square(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.children = [];
}

Square.prototype.getChebyshevCenterDistance = function(x, y) {
  return Math.max(Math.abs(this.x - x), Math.abs(this.y - y));
};

Square.prototype.isPointEnclosed = function(x, y) {
  return this.getChebyshevCenterDistance(x, y) <= this.size;
};

Square.prototype.stroke = function() {
  ctx.strokeStyle = pallete[rangeFloor(0, pallete.length)];
  ctx.beginPath();
  ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
  ctx.stroke();
};

Square.prototype.fill = function() {
  ctx.fillStyle = pallete[rangeFloor(0, pallete.length)];
  ctx.beginPath();
  ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
  ctx.fill();
};

function generateSquares(root, padding, threshold) {
  let squaresGenerated = 0;

  while(squaresGenerated < count) {	//generate new squares till either enough squares are drawn are till attempts expire
    let attemptsLeft = maximumAttempts;
  
    while(--attemptsLeft > 0) {
      let x = rangeFloor(0, width);
      let y = rangeFloor(0, height);
      let enclosingRoot = getEnclosingSquare(x, y, root);
      let size = getFeasibleSize(x, y, enclosingRoot) - padding;

      if(size > threshold) {	//filters squares that are too small
        let square = new Square(x, y, size);
        enclosingRoot.children.push(square);
        squaresGenerated++;
        break;
      }
    }
    if(attemptsLeft <= 0)	//halt generation of squares if attempts run out
      break;
  }
}

function getEnclosingSquare(x, y, root) {
  let enclosingRoot = root;

  if(root.children.length > 0) {
    root.children.forEach(function(square) {
      if(square.isPointEnclosed(x, y)) {
        enclosingRoot = getEnclosingSquare(x, y, square);
      }
    });
  }
  return enclosingRoot;	//return root if the point is outside all children
}

function getFeasibleSize(x, y, root) {
  let potentialSize = root.size; //intialize potential size to the largest value it can take.

    potentialSize = Math.min(root.size - root.getChebyshevCenterDistance(x, y), potentialSize);

    root.children.forEach(function(square) {	//find the closest square
      potentialSize = Math.min(square.getChebyshevCenterDistance(x, y) - square.size, potentialSize);
    });
  return potentialSize;
}

function drawSquaresBorders(root) {
  root.stroke();
  root.children.forEach(drawSquaresBorders);
}

function drawSquaresFill(root) {
  root.fill();
  root.children.forEach(drawSquaresFill);
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

  let {padding, threshold, borderWidth} = presets.medium;
  draw(padding, threshold, borderWidth);
}

function draw(padding, threshold, borderWidth, style) {
  ctx.clearRect(0, 0, width, height);

  let root = new Square(width/2, height/2, (width + padding)/2);
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
};

export  {
  init,
  draw,
  presets,
}
