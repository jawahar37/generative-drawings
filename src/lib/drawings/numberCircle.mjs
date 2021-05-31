import getScaled2dContext from "../canvasUtil.mjs"

let canvas;
let ctx, width, height;


let pallete = function(i) {
  let colors = ["#150578", "#D64045",];
  return colors[i % colors.length];
};

function PolarCircle(radius, center = [width/2, height/2]) {
  let cartesian = function(theta) {
    return [
      center[0] + radius * Math.cos(theta),
      center[1] + radius * Math.sin(theta)
    ];
  };
  
  this.makePoints = function(n, phase = 3*Math.PI/2) {
    let theta = 2 * Math.PI/n;	//angle between points
    let pointer =  function(i) {
      return cartesian(phase + i*theta);
    };
    return pointer;
  };
}

function draw(n) {
  ctx.clearRect(0, 0, width, height);

  let circle = new PolarCircle(height*0.45);

  let pointer = circle.makePoints(n);	//pointer makes points
  drawAllLines(pointer, n);
}

function drawAllLines(pointer, n, color="#0f0a36") {
  ctx.lineWidth = 1;
  for (let i = 0; i < n-1; i++) {
    for (let j = n-1; j > i; j--) {
      drawLine(pointer(i), pointer(j), color);
    }
  }
}

function drawLine(a, b, color="#0f0a36") {
  ctx.strokeStyle = color;
  ctx.beginPath();

  let [x, y] = a;
  ctx.moveTo(x, y);

  [x, y] = b;
  ctx.lineTo(x, y);

  ctx.stroke();
}

function init(canvasID, canvasWidth, canvasHeight) {
  canvas = document.getElementById(canvasID);
  width = canvasWidth;
  height = canvasHeight;

  ctx = getScaled2dContext(canvas, width, height);

  // let pointCountControl = document.getElementById("circle-point-count");
  // pointCountControl.oninput = function(e) {
  //   draw(e.target.value);
  // };
  let n = 10;
  // pointCountControl.value = n;
  draw(n);
}


export {
  init,
  draw,
};