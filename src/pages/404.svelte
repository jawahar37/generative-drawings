<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { randomInt } from '$lib/math.mjs'
  
  let img;
  let innerWidth, innerHeight;
  let width, height;

  let x, y;
  let speed;
  let xDir = true;
  let yDir = true;

  function init() {
    img.width = innerWidth/4;
    speed = innerWidth < 500 ? 1 : 2;
    resize();

    x = randomInt(0, width);
    y = randomInt(0, height);
    draw();
  }
  onMount(init);

  function resize() {
    width = innerWidth - img.width;
    height = innerHeight - img.height;
  }

  function draw() {
    let oldXDir = xDir, oldYDir = yDir;
    if(x <= 0) {
      xDir = true;
    }
    else if (x >= width) {
      xDir = false;
    }
    if(y <= 0) {
      yDir = true;
    }
    else if (y >= height) {
      yDir = false;
    }

    if(xDir != oldXDir || yDir != oldYDir) {
      changeImageColor();
    }

    x = xDir ? (x + speed) : (x - speed);
    y = yDir ? (y + speed) : (y - speed);
    // img.style.setProperty('left', `${x}px`);
    // img.style.setProperty('top', `${y}px`);
    img.style.setProperty('transform', `translate(${x}px, ${y}px)`)
    requestAnimationFrame(draw);
  }

  function changeImageColor() {
    img.style.setProperty('filter', `hue-rotate(${randomInt(0, 360)}deg) saturate(${randomInt(1, 30)})`);
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight on:resize={resize}/>
<main>
  <img src="{base}/404.png" alt="404: Page not found." bind:this={img}>
  <div class="info">
    <span>Page not found. Please check the url or go back to the <a href="{base}/">homepage</a>.</span>
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    justify-content: end;
    
    background: black;
  }
  img {
    height: auto;
  }
  .info {
    width: 100%;
    padding: 32px;

    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;

    color: white;
  }
  a, a:visited {
    color: inherit;
  }
</style>