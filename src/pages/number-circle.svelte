<script>
  import { onMount } from 'svelte';
  import MultiLevelSlider from '$lib/components/MultiLevelSlider.svelte'
  
  // let theta_in =   5.535187056324874;
  let theta_in =   0.3141592653589793;
  let customFactor = 31;

  let width, height;
  let canvas, ctx;

  onMount(() => {
    let scale = 2.5;
    width = 1000 * scale;
    height = 1000 * scale;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    draw(theta_in);
  });

  class CirclePoints {
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
      drawLine(this.point(0, 15), this.point(0, 60));
      drawLine(this.point(1, 15), this.point(1, 60));
    }
  }

  function drawLine(a, b) {
    let [x, y] = a;
    ctx.moveTo(x, y);
    [x, y] = b;
    ctx.lineTo(x, y);
  }

  function draw(theta) {
    console.log(theta/(2*Math.PI));
    ctx.fillStyle = "#fffdf2";
    ctx.fillRect(0, 0, width, height);
    let radius = Math.min(width, height) * 0.45;
    let circle = new CirclePoints(radius, theta);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#0f0a36";
    ctx.beginPath();
    for (let i = 0; i < 100; i++) {
      for (let j = 1; j < 100; j++) {
        drawLine(circle.point(i), circle.point(i+j));
      }
    }
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#E94F37";
    circle.drawIndicator();
  }

  function multiply(e) {
    theta_in = theta_in * e.target.value;
    redraw();
  }
  function divide(e) {
    theta_in = theta_in / e.target.value;
    redraw();
  }
  function setTheta(e) {
    theta_in = parseFloat(e.target.value);
    redraw();
  }
  let multiSlider;
  function redraw() {
    window.requestAnimationFrame(function() {
      draw(theta_in);
      multiSlider.redraw();
    });
  }
</script>


<section>
  <div class="big-canvas">
    <canvas id="nubmer-circle" bind:this={canvas}></canvas>
  </div>
  <div class="control">
    <div class="control-item">
      <label for="number-circle-points">Base angle: </label>
      <div class="control-group">
        <input id="number-circle-points" type="number" step="0.00001" bind:value="{theta_in}" on:input={redraw} style="width: 10em;">
        <input type="range" min="0" max="7" step="0.00001" bind:value={theta_in} on:input={redraw} style="width: 100%">
      </div>
    </div>
    <div class="control-item">
      <MultiLevelSlider bind:value = {theta_in} on:input={redraw} levels=5 base=13 scale={2*Math.PI} bind:this={multiSlider}/>
    </div>
    <div class="control-item">
      <div class="control-group">
        <button class="btn" value={Math.PI} on:click={setTheta}>&#120587;</button>
        <button class="btn" value={2*Math.PI} on:click={setTheta}>&#x1D70F;</button>
      </div>
    </div>
    <div class="control-item">
      <div class="control-group">
        {#each [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] as factor}
        <div class="factor-btn">
          <button class="top" value={factor} on:click={multiply} aria-label={`Multiply ${factor}`}>x</button>
          <div class="value">{factor}</div>
          <button class="bottom" value={factor} on:click={divide} aria-label={`divide ${factor}`}>÷</button>
        </div>
        {/each}
        <div class="factor-btn">
          <button class="top" value={customFactor} on:click={multiply} aria-label={`Multiply ${customFactor}`}>x</button>
          <div class="value" style="padding: 0.25em"><input type="number" bind:value={customFactor} style="width: 4em;"></div>
          <button class="bottom" value={customFactor} on:click={divide} aria-label={`divide ${customFactor}`}>÷</button>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
  section {
    background-color: #fffdf2;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
  }
  .big-canvas {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .big-canvas canvas {
    max-height: 100%;;
    max-width: 100%;
  }

  .control {
    background-color: white;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: #00000033 2px 2px 10px 2px;
  }

  @media (min-width: 768px) {
    .control {
      max-width: 400px;
      margin: 0 auto;
      order: 1;
    }
    .big-canvas {
      order: 2; 
    }
    section {
      height: 100vh;
      flex-flow: row nowrap;
    }
  }

  .factor-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
  }
  .factor-btn button {
    padding: 0.25em 0.8em;
    border: none;
    background-color: #ffb2a6;
    color: black;
    width: 100%;
  }
  .factor-btn .top {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
  .factor-btn .bottom {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  .factor-btn .value {
    padding: 0.25em 0.8em;
  }
</style>