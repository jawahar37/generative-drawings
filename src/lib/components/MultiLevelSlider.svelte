<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { getScaled2dContext } from "$lib/canvasUtil.mjs"
  import { bladeRunner as paletteImport, pickRepeat, shuffle } from "$lib/palettes.mjs"

  const dispatch = createEventDispatcher();

  export let value;
  export let levels = 3;
  export let scale = 1;
  export let base = 10;

  let palette;

  let canvas, ctx;
  let levelHeight = 35;
  let width = 350;
  let height = levels * levelHeight;

  let slider;

  let backgroundCanvas;
  onMount(() => {
    canvas.width = width;
    canvas.height = height;
    ctx = getScaled2dContext(canvas, width, height);

    backgroundCanvas.width = width;
    backgroundCanvas.height = height;

    palette = shuffle(paletteImport);

    drawBackground( getScaled2dContext(backgroundCanvas, width, height) );
    redraw();
    slider.addEventListener('pointerdown', handlePointerDown, {passive: true});
    slider.addEventListener('focus', focus);
    slider.addEventListener('blur', blur);
  });

  let mouseX,mouseY;
  let startValue;
  let active = false;
  let activeLevel;
  let activeScale;

  function focus(event) {
    if(activeLevel == undefined) {
      activeLevel = 0
    }
    active = true;
    redraw();
    slider.addEventListener('keydown', keyboardEvent);
  }

  function keyboardEvent(event) {
    if(event.key === "ArrowLeft" || event.keyCode === 37) {
      value -= scale / Math.pow(base, activeLevel) / 100;
      dispatch('input', {value});
      event.preventDefault();
    }
    else if(event.key === "ArrowRight" || event.keyCode == 39) {
      value += scale / Math.pow(base, activeLevel) / 100;
      dispatch('input', {value});
      event.preventDefault();
    }
    else if(event.key === "ArrowUp" || event.keyCode == 38) {
      if(activeLevel < levels-1) {
        activeLevel += 1;
      }
      event.preventDefault();
    }
    else if(event.key === "ArrowDown" || event.keyCode == 40) {
      if(activeLevel != 0) {
        activeLevel -= 1;
      }
      event.preventDefault();
    }
    redraw();
  }

  function blur(event) {
    active = false;
    redraw();
    slider.removeEventListener('keydown', keyboardEvent);
  }


  function handlePointerDown(event) {   
    let rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;

    //get index of level selected based on the position on the pointer; inverted to match the inverted levels
    activeLevel = levels - (Math.floor(mouseY/levelHeight) + 1);
    activeScale = width/scale * Math.pow(base, activeLevel);
    startValue = value;
    active = true;

    redraw();

    slider.setPointerCapture(event.pointerId);  //capture the pointer even if it goes outside the bounds of the canvas
    slider.addEventListener('pointermove', handlePointerMove, {passive: true});
    slider.addEventListener('pointerup', handlePointerUp);
    slider.addEventListener('pointercancel', handlePointerUp);
  }


  function handlePointerMove(event) {
    // event.preventDefault();
    let rect = slider.getBoundingClientRect();
    let dx = event.clientX - rect.left - mouseX;

    //update the value using the scale at the selected level
    value = startValue + dx/activeScale;
    dispatch('input', {value});
    redraw();
  }

  function handlePointerUp(event) {
    if(slider != document.activeElement) {
      active = false;
    }
    redraw();

    //reset value if pointer is cancelled. If, for example, the touch action is determined to be for scrolling the page rather than for the slider
    if(event.type == "pointercancel") {
      value = startValue;
      dispatch('input', {value});
    }
    //remove pointer listeners after pointer is released
    slider.removeEventListener('pointermove', handlePointerMove);
    slider.removeEventListener('pointerup', handlePointerUp);
    slider.removeEventListener('pointercancel', handlePointerUp);
  }

  export function redraw() {
    window.requestAnimationFrame(draw);
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

<div bind:this={slider} style = "width: {width}px; height: {height}px;" tabindex="0">
  <canvas bind:this={backgroundCanvas}/>
  <canvas bind:this={canvas}/>
</div>

<style>
  div {
    position: relative;
  }
  div:focus-visible {
    outline: dodgerblue solid 2px;
    outline-offset: 2px;
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