<script>
  import Button3D from "$lib/components/Button3D.svelte";
  import SmallCanvas from "$lib/components/SmallCanvas.svelte";
  import * as _10print from "./10print";
</script>

<SmallCanvas id="10-print" init = {_10print.init}
  style={{
    background:"#453ba4",
    text:"#ffffff",
  }}>
  <svelte:fragment slot="title">10 PRINT</svelte:fragment>>
  <svelte:fragment slot="about">
    <p>10 PRINT is a BASIC program written in the early 80s to run on a Commodore 64 system that generates a maze with a surprisingly simple condition. It prints either a \ or a / with a 50% probability.</p>
    <p class="code">10 PRINT CHR$ (205.5 + RND (1));<br> 20 GOTO 10</p>
  </svelte:fragment>
  <svelte:fragment slot="control">
    <div class="control-item">
      <Button3D on:click={_10print.draw}>Redraw</Button3D>
    </div>
  </svelte:fragment>
</SmallCanvas>

<style>
.code {
  font-family: Courier New, Courier;
  font-weight: bold;
}
</style>