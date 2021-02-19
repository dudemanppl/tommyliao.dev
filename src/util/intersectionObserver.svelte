<script>
  import { onMount } from "svelte";
  import { currentSection } from "../stores.js";

  export let newSection = currentSection;
  export let cb = () => {
    $currentSection = newSection;
  };

  let elementToObserve;

  onMount(() => {
    new IntersectionObserver(cb, { threshold: 0.15 }).observe(elementToObserve);
  });
</script>

<div bind:this={elementToObserve}>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
