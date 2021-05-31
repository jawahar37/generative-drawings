export default function getScaled2dContext(canvas, width, height) {
  var ctx = canvas.getContext('2d');
  
  var pixelScale = Math.floor(window.devicePixelRatio);
  canvas.width = width * pixelScale;
  canvas.height = height * pixelScale;
  ctx.scale(pixelScale, pixelScale);

  return ctx;
};