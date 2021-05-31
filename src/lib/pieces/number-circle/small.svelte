<script>
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
	import * as numberCircle from "$lib/drawings/numberCircle";

  let n = 10;
</script>

<SmallCanvas id="number-circle" init = {numberCircle.init}
  style={{
    background:"#fffdf2",
    text:"#000000",
  }}>
  <h2 slot="title">Number Circle</h2>
  <svelte:fragment slot="about">
    <p>Get evenly spaced points on a circle. Draw lines between them all.</p>
  </svelte:fragment>
  <svelte:fragment slot="control">
    <div class="flex-row">
      <div><label for="number-circle-points">Points: </label><input id="number-circle-points" type="number" min="2" max="24" bind:value="{n}" on:input={numberCircle.draw(n)} style="width: 60px;"></div>
      <input type="range" min="2" max="24" step="1" bind:value={n} on:input={numberCircle.draw(n)}>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>
  .flex-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>