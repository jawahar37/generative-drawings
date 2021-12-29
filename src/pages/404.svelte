<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { randomInt } from '$lib/math.mjs'
  
  let img;
  let innerWidth, innerHeight;
  let width, height;

  let x, y;
  let speed;
  let xDir = 1;
  let yDir = 1;

  function init() {
    img.width = innerWidth/4;
    img.style.setProperty("width", `${innerWidth/4}px`);
    speed = innerWidth < 500 ? 1 : 2;
    resize();

    x = randomInt(0, width);
    y = randomInt(0, height);
    draw();
    setTimeout(resize, 2000);
  }
  onMount(init);

  function resize() {
    width = innerWidth - img.width;
    height = innerHeight - img.height;
  }

  function draw() {
    let oldXDir = xDir, oldYDir = yDir;
    if(x <= 0) {
      xDir = 1;
    }
    else if (x >= width) {
      xDir = -1;
    }
    if(y <= 0) {
      yDir = 1;
    }
    else if (y >= height) {
      yDir = -1;
    }

    if(xDir != oldXDir || yDir != oldYDir) {
      changeImageColor();
    }

    x = x + speed * xDir;
    y = y + speed * yDir;
    img.style.setProperty('transform', `translate(${x}px, ${y}px)`)
    requestAnimationFrame(draw);
  }

  function changeImageColor() {
    img.style.setProperty('filter', `hue-rotate(${randomInt(0, 360)}deg) saturate(${randomInt(10, 2000)})`);
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
    width: 200px;
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