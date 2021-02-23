<script>
  import { onMount } from "svelte";
  import { sections, observer } from "../stores.js";
  const { updateSections } = sections;

  export let sectionName;

  let childElement;

  onMount(() => {
    $observer.observe(childElement);
    updateSections({ [sectionName]: childElement });

    return () => $observer.unobserve(childElement);
  });
</script>

<div bind:this={childElement} data-section={sectionName}>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
