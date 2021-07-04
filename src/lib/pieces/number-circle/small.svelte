<script>
  import { base } from '$app/paths';
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
	import * as numberCircle from "$lib/drawings/numberCircle";

  let n = 10;
</script>

<SmallCanvas id="number-circle" init = {numberCircle.init}
  style={{
    background:"#fffdf2",
    text:"#000000",
  }}>
  <svelte:fragment slot="title"><a href="{base}/number-circle" class="link">Number Circle</a></svelte:fragment>>
  <svelte:fragment slot="about">
    <p>Get evenly spaced points on a circle. Draw lines between them all. <a href="{base}/number-circle" class="link">See more...</a></p>
    
  </svelte:fragment>
  <svelte:fragment slot="control">
    <div class="control-item">
      <label for="number-circle-points">Points: </label>
      <div class="control-group">
        <input id="number-circle-points" type="number" min="2" max="24" bind:value="{n}" on:input={numberCircle.draw(n)} style="width: 6em;">
        <input type="range" min="2" max="24" step="1" bind:value={n} on:input={numberCircle.draw(n)}>
      </div>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>

</style>