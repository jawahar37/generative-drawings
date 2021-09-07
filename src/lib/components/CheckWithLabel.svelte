<script context="module">
  let checkCount=0;
</script>

<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let checked;
  export let disabled=false;
  export let label = "";
  export let id=`check${checkCount++}`;
</script>

<div class:checked>
  <input type="checkbox" bind:checked={checked} on:input {disabled} {id}/>
  <label for={id}>{label}</label>    
</div>

<style>
  input {
    margin: 3px 3px 3px 4px;
  }
  div {
    display: flex;
    padding: 0.25em 0.5em;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
    background: var(--backgroundColor);
    color: var(--textColor);
    gap: 0.25em;
  }
  div.checked {
    background: var(--textColor);
    color: var(--backgroundColor);
  }
</style>