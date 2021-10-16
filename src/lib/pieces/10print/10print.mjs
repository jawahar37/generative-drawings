import { getScaled2dContext } from "$lib/canvasUtil.mjs"

let canvas;
let ctx, width, height;

function init(canvasIn, canvasWidth, canvasHeight) {
  canvas = canvasIn;
  width = canvasWidth;
  height = canvasHeight;

  ctx = getScaled2dContext(canvas, width, height);

  draw();
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawMaze(25, 5);
}

function drawMaze(step, slashWidth) {
  ctx.lineCap = "square";
  ctx.lineWidth = slashWidth;
  ctx.strokeStyle = "#847ad8";

  ctx.beginPath();
  for(let x = 0; x < width; x += step) {
    for(let y = 0; y < height; y+= step) {
      drawSlash(x, y, step, step);    
    }
  }
  ctx.stroke();
}

function drawSlash(x, y, width, height) {
  let leftToRight = probability(0.5);

  if(leftToRight) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);    
  } else {
    ctx.moveTo(x + width, y);
    ctx.lineTo(x, y + height);
  }
}

function probability(probability) {
  if(probability > 1 || probability <= 0)
    return 0;
  return Math.random() >= probability;
}

export {
  init,
  draw,
};