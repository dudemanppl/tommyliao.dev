<script>
  import { onMount } from "svelte";
  import { sections, observer } from "../stores.js";
  const { updateSections } = sections;

  export let sectionName;

  let elementToObserve;

  onMount(() => {
    $observer.observe(elementToObserve);
    updateSections({ [sectionName]: elementToObserve });

    return () => $observer.unobserve(elementToObserve);
  });
</script>

<div bind:this={elementToObserve} data-section={sectionName}>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
