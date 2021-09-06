import { getScaled2dContext } from "../canvasUtil.mjs"

let canvas;
let ctx, width, height;

export class CirclePoints {
  constructor(radius, theta, center = [width/2, height/2], phase=3*Math.PI/2) {
    this.radius = radius;
    this.center = center;
    this.theta = theta;
    this.phase = phase;
  }
  point(i, radiusOffset) {
    let radius = this.radius;
    if(radiusOffset !== undefined) {
      radius += radiusOffset;
    }

    let angle = this.phase + i*this.theta;
    return [
      this.center[0] + radius * Math.cos(angle),
      this.center[1] + radius * Math.sin(angle)
    ];
  }
  drawIndicator() {
    ctx.beginPath();
    drawLine(this.point(0, 15), this.point(0, 60));
    drawLine(this.point(1, 15), this.point(1, 60));
    ctx.stroke();
  }
}

function draw(n) {
  ctx.clearRect(0, 0, width, height);

  let circle = new CirclePoints(height*0.45, 2*Math.PI/n);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#0f0a36";

  for (let i = 0; i < n-1; i++) {
    for (let j = n-1; j > i; j--) {
      drawLine(circle.point(i), circle.point(j));
    }
  }
}


function drawLine(a, b) {
  ctx.beginPath();

  let [x, y] = a;
  ctx.moveTo(x, y);

  [x, y] = b;
  ctx.lineTo(x, y);

  ctx.stroke();
}

function init(canvasIn, canvasWidth, canvasHeight) {
  canvas = canvasIn;
  width = canvasWidth;
  height = canvasHeight;

  ctx = getScaled2dContext(canvas, width, height, 4);

  let n = 10;
  draw(n);
}


export {
  init,
  draw,
};