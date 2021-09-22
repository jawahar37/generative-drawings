<script>
  export let disabled = false;
</script>

<button on:keydown on:click {disabled}>
  <span class="shadow" aria-hidden="true"></span>
  <span class="edge" aria-hidden="true"></span>
  <span class="edge-shadow" aria-hidden="true"></span>
  <span class="front">
    <slot/>
    <span class="disabled" aria-hidden="true"></span>
  </span>
</button>

<style>
  button {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    cursor: pointer;
    outline-offset: 3px;
    transition: filter 250ms;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge, .edge-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: var(--textColor);
  }
  .edge-shadow {
    background: linear-gradient(
      to left,
      hsl(0deg 0% 0% / 0.5) 0%,
      hsl(0deg 0% 0% / 0.2) 8%,
      hsl(0deg 0% 0% / 0.2) 92%,
      hsl(0deg 0% 0% / 0.5) 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 0.25em 0.5em;
    border-radius: var(--border-radius);
    color: white;
    border: 1px solid var(--textColor);
    background: var(--backgroundColor);
    color: var(--textColor);
    will-change: transform;
    transform: translateY(-3px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  @media(hover:none) {
    button:not(:disabled) .front {
      transform: translateY(-4px);
      transition:
        transform
        150ms
        cubic-bezier(0, 1.4, 1, 1.2);
    }
    button:not(:disabled) .shadow {
      transition:
        transform
        150ms
        cubic-bezier(0, 1.4, 1, 1.2);
      transform: translateY(3px);
    }
  }
  @media(hover: hover) {
    button:not(:disabled):hover {
      filter: brightness(110%);
    }
    button:not(:disabled):hover .front {
      transform: translateY(-5px);
      transition:
        transform
        250ms
        cubic-bezier(0, 1.4, 1, 1.2);
    }
    button:not(:disabled):hover .shadow {
      transform: translateY(3px);
      transition:
        transform
        250ms
        cubic-bezier(0, 1.4, 1, 1.2);
    }
  }
  button:active:not(:disabled) .front {
    transform: translateY(-2px);
    transition: transform 30ms;
  }

  button:active:not(:disabled) .shadow {
    transform: translateY(1px);
    transition: transform 30ms;
  }
  button:focus:not(:focus-visible) {
    outline: none;
  }
  button:disabled .front  {
    transform: translateY(-2px);
    border-color: hsl(0deg 0% 60%);
    cursor: not-allowed;
  }
  button:disabled .disabled {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.25em 0.5em;
    border-radius: var(--border-radius);
    background-color: hsl(0deg 0% 20% / 0.4);
  }
</style>