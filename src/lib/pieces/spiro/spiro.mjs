import { getScaled2dContext } from "$lib/canvasUtil.mjs"

let canvas;
let ctx, width, height;

let phase;

function init(canvasIn, canvasWidth, canvasHeight) {
  canvas = canvasIn;
  width = canvasWidth;
  height = canvasHeight;

  ctx = getScaled2dContext(canvas, width, height);
  phase = 0;
  draw(0.667, 3);
}

function draw(radiusRatio, loops, spin) {
  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 7;

  let totalRadius = height * 0.45;
  let innerRadius = totalRadius * radiusRatio;
  let outerRadius = totalRadius * (1 - radiusRatio);
  let rotationRatio = loops + 1;
  drawSpiro(width/2, height/2, innerRadius, outerRadius, 1.0/rotationRatio, rotationRatio);
  if(spin) {
    phase += 0.01;
  }
}

function drawSpiro(centerX, centerY, innerRadius, outerRadius, ratio, loops) {

  let lastX = centerX + innerRadius + outerRadius * Math.cos(phase);
  let lastY = centerY + outerRadius * Math.sin(phase);

  for (let theta = 0; theta < (loops * 2 * Math.PI) + 0.01; theta += 0.005) {
    let x =
      centerX +
      innerRadius * Math.cos(theta) +
      outerRadius * Math.cos(theta * ratio + phase);
    let y =
      centerY +
      innerRadius * Math.sin(theta) +
      outerRadius * Math.sin(theta * ratio + phase);
    
    let color = "hsl(" + Math.floor((theta - phase) * 360 / (2 * Math.PI)) + ", 100%, 50%)";

    drawLine(lastX, lastY, x, y, color);
    lastX = x;
    lastY = y;
  }
}

function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.stroke();
}

export  {
  init,
  draw
};