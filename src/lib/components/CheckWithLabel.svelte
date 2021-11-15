<script context="module">
  let checkCount=0;
</script>

<script>
  export let checked;
  export let disabled = false;
  export let label = "";
  export let id=`check${checkCount++}`;

</script>

<!--
  @component
  Creates a checkbox input and a label.
  The state is set in 'checked'. The input can be disabled with 'disabled'.
  If no 'id' is set, it will be auto-generated.
  The 'input' and 'change' events from the checkbox are bubbled.
-->

<div class:checked class:disabled>
  <input type="checkbox" {id} bind:checked={checked} on:input on:change {disabled}/>
  <label for={id}>{label}</label>    
</div>

<style>
  input {
    margin: 3px 3px 3px 4px;
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
    background: var(--backgroundColor);
    color: var(--textColor);
  }
  label {
    padding: 0.25em 0.5em;
    cursor: pointer;
    margin: 0;
    user-select: none;
  }
  div.checked {
    background: var(--textColor);
    color: var(--backgroundColor);
  }

  input:focus {
    outline: none;
  }

  div:focus-within:not(.disabled){
    outline: dodgerblue auto 1px;
    outline-offset: -1px;
  }
  @media(hover) {
    div:hover:not(.disabled) {
      outline: dodgerblue auto 1px;
      outline-offset: -1px;
    }
  }
  div:active {
    outline: none;
    text-decoration: none;
  }

  div.disabled {
    background-color: #ccc;
    color: #555;
    cursor: default;
  }
</style>