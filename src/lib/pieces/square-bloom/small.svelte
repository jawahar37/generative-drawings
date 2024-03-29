<script>
  import * as squareBloom from "./squareBloom";
  import { onMount } from 'svelte';
  import SmallCanvas from "$lib/components/SmallCanvas.svelte";
  import { slide } from 'svelte/transition';
  import {cubicOut} from 'svelte/easing';
  import RadioWithLabel from "$lib/components/RadioWithLabel.svelte";
  import Button3D from '$lib/components/Button3D.svelte';
  import CheckWithLabel from '$lib/components/CheckWithLabel.svelte';
  import ExpandToggle from '$lib/components/ExpandToggle.svelte';

  let drawStyles = ["Fill", "Border"];
  let drawStyle = drawStyles[Math.floor(Math.random() * drawStyles.length)];

  let leafsOnly = false;
  let expandControls = false;

  let presets = Object.keys(squareBloom.presets);
  let presetLabels = presets.map((item) => squareBloom.presets[item].name);

  let {padding, threshold, borderWidth} = squareBloom.presets.medium;

  function regenerate() {
    squareBloom.draw(padding, threshold, borderWidth, drawStyle, leafsOnly, true);
  } 
  function redraw() {
    squareBloom.draw(padding, threshold, borderWidth, drawStyle, leafsOnly, false);
  }

  function drawPreset(e) {
    ({padding, threshold, borderWidth} = squareBloom.presets[e.target.value]);
    regenerate();
  }
  
  onMount(regenerate);
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
    <div class="control-group">
      <RadioWithLabel values={presets} labels={presetLabels} on:change={drawPreset} value={presets[1]}/>
      <ExpandToggle bind:expanded={expandControls}/>
    </div>
    {#if expandControls}
    <div transition:slide="{{duration: 400, easing: cubicOut}}">
      <div class="control-item">
        <label for="square-bloom-padding">Space between squares: </label>
        <input type="number" id="square-bloom-padding" step="1" bind:value="{padding}">    
      </div>
      <div class="control-item" >
        <label for="square-bloom-threshold">Minimum square size: </label>
        <input type="number" id="square-bloom-threshold" step="1" bind:value="{threshold}">
      </div>
    </div>
    {/if}
    <div class="control-item">
      <RadioWithLabel values={drawStyles} bind:value={drawStyle} name="drawStyle" on:change={redraw}/>
    </div>
    {#if expandControls && drawStyle == "Border"}
      <div class="control-item" transition:slide="{{duration: 400, easing: cubicOut}}" style="margin-top: 0.2em;">
        <label for="square-bloom-border-width">Border width: </label>
        <input type="number" id="square-bloom-border-width" min="1" step="1" bind:value="{borderWidth}" disabled={drawStyle != "Border"}>
      </div>
    {/if}
    <div class="control-group control-item">
      <CheckWithLabel bind:checked={leafsOnly} label="Show inner squares only" on:change={redraw}/>
    </div>
    <div class="control-item">
      <Button3D on:click={regenerate}>Redraw</Button3D>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>

</style>