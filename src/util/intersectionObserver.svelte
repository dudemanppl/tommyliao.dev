<script>
  import { onMount } from "svelte";
  import {
    sections,
    observer,
    currentSection,
    sectionIntersectionRatios,
    scrolledTo,
  } from "../stores/index.js";
  const { setCurrentSection } = currentSection;

  export let sectionName;

  let elementToObserve, currRatio;

  $: {
    const newRatio = $sectionIntersectionRatios[sectionName];

    if (newRatio > currRatio && $scrolledTo) {
      $scrolledTo = false;
      setCurrentSection(sectionName);
    }

    currRatio = newRatio;
  }

  onMount(() => {
    const currElemPxFromTop = Math.abs(elementToObserve.getClientRects()[0].y);

    const currentElemInView =
      !$sections.currentElemInView ||
      $sections.currentElemInView[1] > currElemPxFromTop
        ? [sectionName, currElemPxFromTop]
        : $sections.currentElemInView;

    $observer.observe(elementToObserve);
    sections.updateSections({
      [sectionName]: elementToObserve,
      currentElemInView,
    });

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
