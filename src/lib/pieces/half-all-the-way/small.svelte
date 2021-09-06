<script>
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
  import { getScaled2dContext } from "$lib/canvasUtil.mjs";
  import { paleYellowPink as paletteImport, shuffle } from "$lib/palettes.mjs";
  import CheckLabel from "$lib/components/CheckLabel.svelte";
  
  let canvas;
  let ctx, width, height;
  let palette;

  let drawCirclePoints = true;
  
  function init(canvasIn, canvasWidth, canvasHeight) {
    canvas = canvasIn;
    width = canvasWidth;
    height = canvasHeight;

    ctx = getScaled2dContext(canvas, width, height);

    draw();
  }

  function draw() {
    palette = shuffle(paletteImport);
    ctx.clearRect(0, 0, width, height);
    drawSeries(drawFourSquares, 0, 0, width/2, height/2, 8);
  }

  function drawSeries(elem, x, y, width, height, iterations) {
    elem(x, y, width, height);
    
    recurseVertical(elem, x          , y + height, width/2, height/2, iterations);
    recurseVertical(elem, x + width/2, y + height, width/2, height/2, iterations);

    recurseHorizontal(elem, x + width, y           , width/2, height/2, iterations);
    recurseHorizontal(elem, x + width, y + height/2, width/2, height/2, iterations);
    
    if(iterations -- > 0) {
      drawSeries(elem, x + width, y + width, width/2, height/2, iterations);    
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
    ctx.rect(x        , y + height, width, height);
    ctx.fill();

    ctx.fillStyle = palette[2];
    ctx.beginPath();
    ctx.rect(x + width, y         , width, height);
    ctx.fill();
    
    ctx.fillStyle = palette[3];
    ctx.beginPath();
    ctx.rect(x + width, y + height, width, height);
    ctx.fill();

    if(drawCirclePoints) {
      ctx.fillStyle = palette[4];
      ctx.beginPath();
      ctx.arc(x, y, width/11, 0, 2*Math.PI);
      ctx.fill();
    }
  }
</script>

<SmallCanvas id="new" init = {init}
  style={{
    background:"#001427",
    text:"#ffffff",
  }}>
  <svelte:fragment slot="title">Half all the way down</svelte:fragment>>
  <svelte:fragment slot="about">
    <p>1/2 + 1/4 + 1/8 + 1/16 + ...</p>
    <p>Based on the album art for <a href="https://www.youtube.com/watch?v=_JmTatkAMwY">Blue - Eiffel 65 (Flume Remix)</a></p>
    
  </svelte:fragment>
  <svelte:fragment slot="control">
    <div class="control-group">
      <CheckLabel bind:checked={drawCirclePoints} label="Draw circles"/>
    </div>
    <div class="control-item">
      <button class="btn" id="new-redraw" on:click={draw}>Redraw</button>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>

</style>