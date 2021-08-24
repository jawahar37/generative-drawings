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
  let levelHeight = 35;
  let width = 350;
  let height = levels * levelHeight;

  let backgroundCanvas;
  onMount(() => {
    canvas.width = width;
    canvas.height = height;
    ctx = getScaled2dContext(canvas, width, height);

    backgroundCanvas.width = width;
    backgroundCanvas.height = height;

    precomputeScales();

    drawBackground( getScaled2dContext(backgroundCanvas, width, height) );
    redraw();
    canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
  });

  let mouseX,mouseY;
  let startValue;
  let active = false;
  let activeLevel;

  let scales = [];
  
  /**
   * Computes the scales with which the different levels of the slider
   * relate to the basimal/decimal places of the value and puts them in scale.
   */
  function precomputeScales() {
    let initialScale=width/scale;
    for(let i=0; i<levels; i++) {
      scales.push(initialScale * Math.pow(base, i));
    }
  }

  function handlePointerDown(event) {    
    let rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;

    //get index of level selected based on the position on the pointer; inverted to match the inverted levels
    activeLevel = levels - 1 - Math.floor(mouseY/levelHeight);
    startValue = value;
    active = true;

    redraw();

    canvas.setPointerCapture(event.pointerId);  //capture the pointer even if it goes outside the bounds of the canvas
    canvas.addEventListener('pointermove', handlePointerMove, {passive: true});
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);
  }


  function handlePointerMove(event) {
    // event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    let dx = event.clientX - rect.left - mouseX;

    //update the value using the scale at the selected level
    value = startValue + dx/scales[activeLevel];
    dispatch('input', {value});
    redraw();
  }

  function handlePointerUp(event) {
    active = false;
    redraw();

    //reset value if pointer is cancelled. If, for example, the touch action is determined to be for scrolling the page rather than for the slider
    if(event.type == "pointercancel") {
      value = startValue;
      dispatch('input', {value});
    }
    //remove pointer listeners after pointer is released
    canvas.removeEventListener('pointermove', handlePointerMove);
    canvas.removeEventListener('pointerup', handlePointerUp);
    canvas.removeEventListener('pointercancel', handlePointerUp);
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
      ctx.arc(posX, posY, levelHeight/2, 0, 2*Math.PI);
      ctx.arc((posX+width), posY, levelHeight/2, 0, 2*Math.PI);
      ctx.arc((posX-width), posY, levelHeight/2, 0, 2*Math.PI);
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
    context.strokeStyle = "#bdc";
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
    cursor: crosshair;
  }
</style>