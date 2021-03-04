<script>
  import { onMount } from "svelte";
  import { sections, observer } from "../stores.js";
  const { updateSections } = sections;

  export let sectionName;

  let elementToObserve;

  onMount(() => {
    const currElemPxFromTop = Math.abs(elementToObserve.getClientRects()[0].y);

    const min =
      !$sections.min || $sections.min[1] > currElemPxFromTop
        ? [sectionName, currElemPxFromTop]
        : $sections.min;

    $observer.observe(elementToObserve);
    updateSections({ [sectionName]: elementToObserve, min });

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
