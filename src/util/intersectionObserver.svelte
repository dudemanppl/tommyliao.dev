<script>
  import { onMount } from "svelte";
  import { sections, observer } from "../stores.js";

  export let sectionName;

  let elementToObserve;

  onMount(() => {
    const min = Math.min(
      Math.abs(elementToObserve.getClientRects()[0].y, $sections.min)
    );

    $observer.observe(elementToObserve);
    $sections = { [sectionName]: elementToObserve, min, ...$sections };
    console.log(min);
    console.log(elementToObserve.getClientRects()[0].y, $sections.min);

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
