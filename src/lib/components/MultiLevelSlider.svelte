<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import getScaled2dContext from "../canvasUtil.mjs"
  
  const dispatch = createEventDispatcher();

  export let value;
  export let levels = 3;
  export let scale = 1;
  export let base = 10;

  let foreColor = "#2CA6A4";
  let activeForeColor = "#FF6347";

  let canvas, ctx;
  let levelHeight = 40;
  let width = 350, height = levels * levelHeight;

  let backgroundCanvas;
  onMount(() => {
    canvas.width = width;
    canvas.height = height;
    ctx = getScaled2dContext(canvas, width, height);

    backgroundCanvas.width = width;
    backgroundCanvas.height = height;

    drawBackground( getScaled2dContext(backgroundCanvas, width, height) );
    redraw();
    canvas.addEventListener('pointerdown', handlePointerDown);
  });

  let x,y;
  let startValue;
  let active = false;
  let activeLevel;

  let initialScale = width/scale;
  
  //precompute scales per level.
  let scales = [];
  for(let i = 0; i < levels; i++) {
    scales.push(initialScale * Math.pow(base, i));
  }
  
  function handlePointerDown(event) {    
    let rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    //get index of level selected based on the position on the pointer; inverted to match the inverted levels
    activeLevel = levels - 1 - Math.floor(y/levelHeight);
    startValue = value;
    active = true;

    redraw();

    canvas.setPointerCapture(event.pointerId);  //capture the pointer even if it goes outside the bounds of the canvas
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
  }


  function handlePointerMove(event) {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    let dx = event.clientX - rect.left - x;

    //update the value using the scale at the selected level
    value = startValue + dx/scales[activeLevel];
    dispatch('input', {value});
    redraw();
  }

  function handlePointerUp(event) {
    active = false;
    redraw();
    //remove pointer listeners after pointer is released
    canvas.removeEventListener('pointermove', handlePointerMove);
    canvas.removeEventListener('pointerup', handlePointerUp);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for(let i = 0; i < levels; i++) {

      let posX = (value * scales[i]) % width;
      posX = posX >= 0 ? posX : posX + width; //normalize remainder to a positive only modulo
      let posY = levelHeight * (levels - i - 0.5);

      if(active && activeLevel == i) {
        ctx.fillStyle = activeForeColor;
        ctx.strokeStyle = activeForeColor;
      }
      else {
        ctx.fillStyle = foreColor;
      }

      //draw three circles per level for the perception of continuity across the modulo point
      ctx.beginPath();
      ctx.arc(posX, posY, 20, 0, 2*Math.PI);
      ctx.arc((posX+width), posY, 20, 0, 2*Math.PI);
      ctx.arc((posX-width), posY, 20, 0, 2*Math.PI);
      ctx.fill();

      //draw a horizontal track for the active level
      if(active && activeLevel == i) {
        ctx.beginPath();
        ctx.moveTo(0, posY);
        ctx.lineTo(width, posY);
        ctx.stroke();
      }
    }    
  }

  export function redraw() {
    window.requestAnimationFrame(draw);
  }

  function drawBackground(context) {
    context.strokeStyle = "#aaa";
    context.lineWidth = 1;
    context.beginPath();
    for(let offset = width/base; offset < width; offset += width/base) {
      context.moveTo(offset, 0);
      context.lineTo(offset, height);
    }
    context.stroke();
  }
</script>

<div style = "width: {width}px; height: {height}px;">
  <canvas bind:this={backgroundCanvas}/>
  <canvas bind:this={canvas}/>
</div>

<style>
  div {
    position: relative;
  }
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
    touch-action: pan-y;
  }
</style>