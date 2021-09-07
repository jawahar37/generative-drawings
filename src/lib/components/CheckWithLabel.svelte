<script context="module">
  let checkCount=0;
</script>

<script>
  export let checked;
  export let disabled=false;
  export let label = "";
  export let id=`check${checkCount++}`;

  let focus = false;
</script>

<div class:checked class:focus>
  <input type="checkbox" {id} bind:checked={checked} on:input {disabled}
    on:focusin={ () => focus=true } on:focusout={ () => focus = false }/>
  <label for={id}>{label}</label>    
</div>

<style>
  input {
    margin: 3px 3px 3px 4px;
    width: 1em;
    height: 1em;
  }
  div {
    display: flex;
    align-items: center;
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