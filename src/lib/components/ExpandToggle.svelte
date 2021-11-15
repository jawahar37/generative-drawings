<script>
  export let expanded = true;
  $: label = expanded ? "Collapse" : "Expand";
  
  function toggle() {
    expanded = !expanded;
  }

</script>

<!--
  @component
  A button with two states for expand and collapse with different SVGs.
  Maintains state as a boolean in 'expanded' and bubbles the onclick event.
-->
<button aria-label={label} title={label} on:click={toggle} on:click>
  {#if expanded}
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
  {:else}
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" ><rect fill="none" height="24" width="24"/><path d="M15.08,9.59L12,12.67L8.92,9.59L7.5,11l4.5,4.5l4.5-4.5L15.08,9.59z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z"/></svg>
  {/if}
</button>

<style>
  button {
    background: none;
    border: none;
    outline: none;
    line-height: 1.2;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
  }
  svg {
    fill: var(--textColor);
  }
</style>
