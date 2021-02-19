<script>
  import { onMount } from "svelte";
  import { currentSection } from "../stores.js";

  export let newSection = currentSection;
  export let cb = () => {
    $currentSection = newSection;
  };

  let elementToObserve;

  onMount(() => {
    new IntersectionObserver(cb, { threshold: 0.1 }).observe(elementToObserve);
  });
</script>

<div bind:this={elementToObserve}>
  <slot />
</div>

<style>
  div {
    position: relative;
    z-index: -10;
    height: 100vh;
    width: 100vh;
  }
</style>
