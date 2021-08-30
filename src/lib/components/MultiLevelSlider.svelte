<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { getScaled2dContext } from "$lib/canvasUtil.mjs"
  import { bladeRunner as palette, pickRepeat, shuffle } from "$lib/palettes.mjs"

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

    shuffle(palette);

    drawBackground( getScaled2dContext(backgroundCanvas, width, height) );
    redraw();
    canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
  });

  let mouseX,mouseY;
  let startValue;
  let active = false;
  let activeLevel;
  let activeScale;


  function handlePointerDown(event) {    
    let rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;

    //get index of level selected based on the position on the pointer; inverted to match the inverted levels
    activeLevel = levels - 1 - Math.floor(mouseY/levelHeight);
    activeScale = width/scale * Math.pow(base, activeLevel);
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
    value = startValue + dx/activeScale;
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
    ctx.strokeStyle = "#444";

    let remainder = value;
    for(let i = 0; i < levels; i++) {
      let posX = (remainder / scale * width) % width;
      remainder = (remainder * base) % scale;

      posX = posX >= 0 ? posX : posX + width; //normalize remainder to a positive only modulo
      
      let posY = levelHeight * (levels - i - 0.5);

      //draw a horizontal track for the active level
      if(active && activeLevel == i) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, posY);
        ctx.lineTo(width, posY);
        ctx.stroke();
      }
      
      let place = Math.floor(posX/width * base);
      ctx.fillStyle = pickRepeat(palette, place);
    
      //draw three circles per level for the perception of continuity across the modulo point
      ctx.beginPath();
      ctx.arc(posX, posY, levelHeight/2, 0, 2*Math.PI);
      ctx.arc((posX+width), posY, levelHeight/2, 0, 2*Math.PI);
      ctx.arc((posX-width), posY, levelHeight/2, 0, 2*Math.PI);
      ctx.fill();

      if(active && activeLevel == i) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(posX, posY, levelHeight/2 - 2.5, 0, 2*Math.PI);
        ctx.stroke();
      }

    }    
  }

  export function redraw() {
    window.requestAnimationFrame(draw);
  }

  function drawBackground(context) {
    context.strokeStyle = "#ddd";
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