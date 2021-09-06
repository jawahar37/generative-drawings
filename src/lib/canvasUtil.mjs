export function getScaled2dContext(canvas, width, height, pixelScale) {
  let ctx = canvas.getContext('2d');
  
  if(pixelScale == undefined)
   pixelScale = Math.floor(window.devicePixelRatio);

  canvas.width = width * pixelScale;
  canvas.height = height * pixelScale;
  ctx.scale(pixelScale, pixelScale);

  return ctx;
};