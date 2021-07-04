
<script>
  import "../app.css";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="${base}/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="${base}/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="${base}/favicon-16x16.png">
  <link rel="manifest" href="${base}/site.webmanifest">
  <title>Generative Drawings</title>
</svelte:head>

<slot></slot>
