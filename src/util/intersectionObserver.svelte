<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import {
    sections,
    observer,
    currentSection,
    sectionIntersectionRatios,
  } from "../stores/index.js";
  const { setCurrentSection } = currentSection;

  export let sectionName;

  let elementToObserve, currRatio, hasBeenScrolledTo;

  beforeUpdate(() => {
    const currentSectionInView =
      $sectionIntersectionRatios[$currentSection] === 1;

    if (currentSectionInView) {
      hasBeenScrolledTo = true;
    }
  });

  afterUpdate(() => {
    const newRatio = $sectionIntersectionRatios[sectionName];

    if (newRatio > currRatio && hasBeenScrolledTo) {
      console.log("nice");
      hasBeenScrolledTo = false;
      setCurrentSection(sectionName);
    }

    currRatio = newRatio;
  });

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
