<script>
  import { onMount } from 'svelte';
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
	import * as squareBloom from "$lib/drawings/squareBloom";
	import { slide } from 'svelte/transition';
  import RadioWithLabel from "$lib/components/RadioWithLabel.svelte";

  let drawStyles = ["Fill", "Border"];
  let drawStyle = drawStyles[Math.floor(Math.random() * drawStyles.length)];

  let presets = Object.keys(squareBloom.presets);
  let presetLabels = presets.map((item) => squareBloom.presets[item].name);

  let {padding, threshold, borderWidth} = squareBloom.presets.medium;
  
  function redraw() {
    squareBloom.draw(padding, threshold, borderWidth, drawStyle);
  }

  function drawPreset(e) {
    ({padding, threshold, borderWidth} = squareBloom.presets[e.target.value]);
    squareBloom.draw(padding, threshold, borderWidth, drawStyle);
  }

  onMount(redraw);
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
    <div class="control-item">
      <RadioWithLabel values={presets} labels={presetLabels} on:change={drawPreset} value={presets[1]}/>
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
      <RadioWithLabel values={drawStyles} bind:value={drawStyle} name="drawStyle" on:change={redraw}/>
    </div>
    {#if drawStyle == "Border"}
      <div class="control-item" transition:slide style="margin-top: 0.2em;">
        <label for="square-bloom-border-width">Border width: </label>
        <input type="number" id="square-bloom-border-width" min="1" step="1" bind:value="{borderWidth}" disabled={drawStyle != "Border"}>
      </div>
    {/if}
    <div class="control-item">
      <button class="btn" id="square-bloom-redraw" on:click={redraw}>Redraw</button>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>

</style>