<script>
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
  import { getScaled2dContext } from "$lib/canvasUtil.mjs";
  import { paleYellowPink as paletteImport, shuffle } from "$lib/palettes.mjs";
  import CheckWithLabel from "$lib/components/CheckWithLabel.svelte";
  import Button3D from "$lib/components/Button3D.svelte";
  
  let canvas;
  let ctx, width, height;
  let palette;

  let drawCornerCircles = false;
  let drawRotatedCenters = true;
  
  function init(canvasIn, canvasWidth, canvasHeight) {
    canvas = canvasIn;
    width = canvasWidth;
    height = canvasHeight;

    ctx = getScaled2dContext(canvas, width, height, 3);
    
    palette = shuffle(paletteImport);
    draw();
  }

  function draw(regenerate = true) {
    if(regenerate) {
      palette = shuffle(paletteImport);
    }

    let elementFunction;
    elementFunction = function(...args) {
      drawFourSquares(...args);
      if(drawCornerCircles) drawCircleIndicator(...args);
      if(drawRotatedCenters) drawQuadCircle(...args);
    }

    drawSeries(elementFunction, 0, 0, width/2, height/2, 7);
  }

  function drawSeries(elem, x, y, width, height, iterations) {
    elem(x, y, width, height);
    
    recurseVertical(elem, x          , y + height, width/2, height/2, iterations);
    recurseVertical(elem, x + width/2, y + height, width/2, height/2, iterations);

    recurseHorizontal(elem, x + width, y           , width/2, height/2, iterations);
    recurseHorizontal(elem, x + width, y + height/2, width/2, height/2, iterations);
    
    if(iterations -- > 0) {
      drawSeries(elem, x + width, y + height, width/2, height/2, iterations);    
    }
    else {
      x += width;
      y += height;
      elem(x          , y           , width/2, height/2);
      elem(x          , y + height/2, width/2, height/2);
      elem(x + width/2, y           , width/2, height/2);
      elem(x + width/2, y + height/2, width/2, height/2);
    }

  }

  function recurseVertical(elem, x, y, width, height, iterations) {
    elem(x, y, width, height);
    
    if(iterations-- > 0) {
      recurseVertical(elem, x          , y + height, width/2, height/2, iterations);
      recurseVertical(elem, x + width/2, y + height, width/2, height/2, iterations);
    }
    else {
      elem(x, y + height, width, height);
    }
  }

  function recurseHorizontal(elem, x, y, width, height, iterations) {
    elem(x, y, width, height);
    
    if(iterations-- > 0) {
        recurseHorizontal(elem, x + width, y           , width/2, height/2, iterations);
        recurseHorizontal(elem, x + width, y + height/2, width/2, height/2, iterations);
    }
    else {
      elem(x + width, y, width, height);
    }    
  }

  function drawFourSquares(x, y, width, height) {
    width /= 2;
    height /= 2;

    ctx.fillStyle = palette[0];
    ctx.beginPath();
    ctx.rect(x        , y        , width, height);
    ctx.fill();

    ctx.fillStyle = palette[1];
    ctx.beginPath();
    ctx.rect(x + width, y         , width, height);
    ctx.fill();

    ctx.fillStyle = palette[2];
    ctx.beginPath();
    ctx.rect(x        , y + height, width, height);
    ctx.fill();
    
    ctx.fillStyle = palette[3];
    ctx.beginPath();
    ctx.rect(x + width, y + height, width, height);
    ctx.fill();
  }

  function drawQuadCircle(x, y, width, height) {
    x += width/2;
    y += height/2;
    let radius = width/3;
    
    ctx.fillStyle = palette[3];
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, Math.PI, 3*Math.PI/2);
    ctx.fill();

    ctx.fillStyle = palette[2];
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, 3*Math.PI/2, 0);
    ctx.fill();

    ctx.fillStyle = palette[1];
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, Math.PI/2, Math.PI);
    ctx.fill();

    ctx.fillStyle = palette[0];
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, 0, Math.PI/2);
    ctx.fill();
  }

  function drawCircleIndicator(x, y, width, height) {
    if(drawCornerCircles) {
      ctx.fillStyle = palette[4];
      ctx.beginPath();
      ctx.arc(x, y, width/20, 0, 2*Math.PI);
      ctx.fill();
    }
  }
</script>

<SmallCanvas id="half-all-the-way" init = {init}
  style={{
    background:"#001427",
    text:"#ffffff",
  }}>
  <svelte:fragment slot="title">Half all the way down</svelte:fragment>>
  <svelte:fragment slot="about">
    <p>1/2 + 1/4 + 1/8 + 1/16 + ...</p>
    <p>Based on the album art for <a class=link href="https://www.youtube.com/watch?v=_JmTatkAMwY">Blue - Eiffel 65 (Flume Remix)</a></p>
    
  </svelte:fragment>
  <svelte:fragment slot="control">
    <div class="control-group">
      <CheckWithLabel bind:checked={drawRotatedCenters} label="Draw rotated centers" on:change={() => draw(false)}/>
      <CheckWithLabel bind:checked={drawCornerCircles} label="Draw corner points" on:change={() => draw(false)}/>
    </div>
    <div class="control-item">
      <Button3D on:click={draw}>Redraw</Button3D>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>

</style>