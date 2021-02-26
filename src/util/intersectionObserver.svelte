<script>
  import { onMount } from "svelte";
  import { sections, observer } from "../stores.js";
  const { updateSections } = sections;

  export let sectionName;

  let elementToObserve;

  onMount(() => {
    $observer.observe(elementToObserve);
    $sections = { ...{ [sectionName]: elementToObserve }, ...$sections };
    console.log(sectionName, Math.abs(elementToObserve.getClientRects()[0].y));

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
