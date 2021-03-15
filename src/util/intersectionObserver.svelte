<script>
  import { onMount, beforeUpdate } from "svelte";
  import { sections, observer, currentSection } from "../stores/index.js";
  // const { setCurrentSection } = currentSection;

  export let sectionName;

  let elementToObserve;
  let currRatio;

  beforeUpdate(() => {
    if ($currentSection === sectionName) {
      // console.log($sections[$currentSection]);
    }
    // const newRatio = $sections[sectionName];

    // console.log($sections[sectionName]);

    // if (newRatio > currRatio) {
    //   setCurrentSection(sectionName);
    // }

    // currRatio = newRatio;
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
      [sectionName]: { element: elementToObserve },
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
