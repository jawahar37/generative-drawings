<script>
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
	import * as squareBloom from "$lib/drawings/squareBloom";

  let {padding, threshold, borderWidth} = squareBloom.presets.medium;

  function redraw() {
    squareBloom.draw({padding, threshold, borderWidth});
  }

  function drawPreset(e) {
    ({padding, threshold, borderWidth} = squareBloom.presets[e.target.value]);
    squareBloom.draw(squareBloom.presets[e.target.value]);
  }
</script>

<SmallCanvas id="square-bloom" init = {squareBloom.init}
  style={{
    background:"#0D1821",
    text:"#ffffff",
  }}>

<svelte:fragment slot="title">Square Bloom</svelte:fragment>>

  <svelte:fragment slot="about">
    <p>Its rule is simple: pick a random spot and draw the largest square possible that doesn't touch any existing square.</p>
    <p>Try tweaking the parameters. While proper inputs lets the canvas draw following the rule, negative values are fun too!</p>
  </svelte:fragment>
  
  <svelte:fragment slot="control">
    <div class="control-item control-group" style="padding: 0.5em 0;">
      <span>
        <input type="radio" name="square-bloom-preset" value="small" class="btn-radio" id="square-bloom-preset-small" on:input={drawPreset}>
        <label for="square-bloom-preset-small">Small</label>
      </span>
      <span>
        <input type="radio" name="square-bloom-preset" value="medium" checked class="btn-radio" id="square-bloom-preset-medium" on:input={drawPreset}>
        <label for="square-bloom-preset-medium">Medium</label>
      </span>
      <span>
        <input type="radio" name="square-bloom-preset" value="large" class="btn-radio" id="square-bloom-preset-large" on:input={drawPreset}>
        <label for="square-bloom-preset-large">Large</label>
      </span>
    </div>
    <div class="control-item">
      <label for="square-bloom-padding">Space between squares: </label>
      <input type="number" id="square-bloom-padding" step="1" bind:value="{padding}">    
    </div>
    <div class="control-item">
      <label for="square-bloom-threshold">Minimum square size: </label>
      <input type="number" id="square-bloom-threshold" step="1" bind:value="{threshold}">
    </div>
    <div class="control-item">
      <label for="square-bloom-border-width">Line width: </label>
      <input type="number" id="square-bloom-border-width" min="1" step="1" bind:value="{borderWidth}">
    </div>                    
    <div class="control-item">
      <button id="square-bloom-redraw" on:click={redraw}>Redraw</button>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>

</style>