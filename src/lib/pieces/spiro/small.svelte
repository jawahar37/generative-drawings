<script>
	import SmallCanvas from "$lib/components/SmallCanvas.svelte";
	import * as spiro from "$lib/drawings/spiro";

  let radiusRatio = 0.667;
  let loops = 3;

  function redraw() {
    spiro.draw(radiusRatio,loops);
  }
</script>

<SmallCanvas id="spiro" init = {spiro.init}
  style={{
    background:"#4C5454",
    text:"#ffffff",
  }}>
  <svelte:fragment slot="title">Spiro</svelte:fragment>>
  <svelte:fragment slot="about">
    <p>Tracing the path of a circle rolling around the perimeter of another circle gives a simple spirograph.</p>
    <p>Loopiness controls the relative sizes of the inner and outer circles, and Loops controls how many times the outer circle rolls around the inner one.</p>
  </svelte:fragment>
  <svelte:fragment slot="control">
    <div class="control-item">
      <label for="spiro-radius">Loopiness:</label>
      <div class="control-group">
        <input id="spiro-radius" type="number" min="0" max="1" step="0.01" bind:value={radiusRatio} on:input={redraw} style="width: 6em;">
        <input type="range" min="0" max="1" step="0.01" bind:value={radiusRatio} on:input={redraw}>
      </div>
    </div>
    <div class="control-item">
      <label for="spiro-loops">Loops:</label>
      <div class="control-group">
        <input id="spiro-loops" type="number" min="0" max="9" step="1" bind:value={loops} on:input={redraw} style="width: 6em;">
        <input type="range" min="0" max="9" step="1" bind:value={loops} on:input={redraw}>
      </div>
    </div>
  </svelte:fragment>
</SmallCanvas>