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

<div class="container-background" style="{`background-color: ${style.background}; color: ${style.text}`}">
  <div class="container flexbox">
    <div class="info">
      <div class="about">
        <slot name="title"></slot>
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
    <div class="canvas"><canvas {id}/></div>
  </div>
</div>


<style>
  .container-background {
    width: 100%;
  }

  .flexbox {
    display: flex;
    flex-direction: column;
  }

  .info {
    flex: 1 1 0%;
  }

  .canvas {
    flex: 1 1 0%;
    align-self: center;
  }

  .container {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    padding: 16px;
    margin: 0 auto;
  }

  canvas {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
    canvas {
      width: 500px;
      height: 500px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
    canvas {
      width: 600px;
      height: 600px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }

    .flexbox {
      flex-direction: row;
    }
  }
  @media (min-width: 1300px) {
    .container {
      max-width: 1050px;
    }
  }
</style>