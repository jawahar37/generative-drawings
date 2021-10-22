<script context="module">
  let radioCount=0;
</script>

<script>
  export let value;
  export let name = `radio${radioCount++}`
  export let disabled = false;

  export let values;
  export let labels = undefined;
</script>

<!--
  @component
  Creates a radio group with items from the 'values' .
  If 'labels' is present it is used to set the labels, else 'values' is used.
  The selected radio's value is bound to 'value'.
  'input' and 'change' events from the radios are bubbled.
-->

<div class="radioGroup">
  {#each values as item,i}
    <div class="radio">
      <input type="radio" {name}
        id={`${name}-${item}`}
        value={item}
        bind:group={value}
        on:input
        on:change
        {disabled}>
      <label for={`${name}-${item}`} class:active={value == item}>{labels!=undefined ? labels[i] : item}</label>
    </div>
  {/each}
</div>

<style>
  input {
    position: absolute;
    clip: rect(0,0,0,0);
    pointer-events: none;
  }
  .radioGroup {
    display: flex;
    align-items: stretch;
    padding: 0;
    border: 1px solid var(--textColor);
    border-radius: var(--border-radius);
    background: var(--backgroundColor);
    color: var(--textColor);
    width: fit-content;
  }
  label {
    cursor: pointer;
    padding: 0.25em 0.5em;
    margin: 0;
    border-right: 1px solid var(--textColor);
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  .radio:first-of-type label {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  .radio:last-of-type label{
    border-right: none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
  input:checked + label {
    background: var(--textColor);
    color: var(--backgroundColor);
  }
  input:focus-visible + label{
    text-decoration: underline;
    outline: dodgerblue auto 1px;
    outline-offset: -1px;
  }
  @media(hover) {
    label:hover {
      text-decoration: underline;
      outline: dodgerblue auto 1px;
      outline-offset: -1px;
    }
  }
  label:active {
    outline: none;
    text-decoration: none;
  }
</style>