<script>
  import { onMount } from 'svelte';

  export let id;
  export let init;
  export let style = {
    background: "#000404",
    text: "#ffffff",
  };

  onMount(() => {
    let [width, height] = window.innerWidth > 576 ? [600, 600] : [500, 500];
		init(id, width, height);
	});
</script>

<div class="container" style="{`--backgroundColor: ${style.background}; --textColor: ${style.text}`}">
  <div class="info-container">
    <div class="info">
      <div class="about">
        <h2><slot name="title"></slot></h2>
        <slot name="about"></slot>
      </div>
      {#if $$slots.control}
      <div class="control">
        <slot name="control">
          <div class="row"></div>
        </slot>
      </div>
      {/if}
    </div>
  </div>
  <div class="canvas">
    <canvas {id}/>
  </div>
</div>


<style>
  .container {
    background-color: var(--backgroundColor);
    color: var(--textColor);
    
    box-sizing: border-box;
    width: 100%;
    padding: 32px 16px;

    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .info-container{
    flex: 1 1 0%;
  }

  .info {
    padding: 16px; 
    border: 1px solid var(--textColor);
    border-radius: 10px;
  }

  .info h2 {
    margin-block: 0.2em 0.7em;
  }

  .canvas {
    flex: 1 1 0%;
    display: flex;
    align-self: center;
    justify-content: center;
  }

  canvas {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 400px) {
    canvas {
      height: auto;
      max-width: 100%;
    }
  }
  @media (min-width: 576px) {
    .info {
      max-width: 540px;
      margin: 0 auto;
    }
    canvas {
      width: 500px;
      height: 500px;
    }
  }
  @media (min-width: 768px) {
    .info {
      max-width: 600px;
    }
    canvas {
      width: 600px;
      height: 600px;
    }
  }
  @media (min-width: 1000px) {
    .container {
      flex-direction: row;
    }
    
    .info-container {
      max-width: 600px;
    }

    .info {
      max-width: 450px;
      margin-right: 0;
    }
  }
</style>