<script>
  import { onMount } from "svelte";
  import { currentSection, sections } from "../stores.js";

  export let sectionName;
  export let cb = () => {};

  let observer;
  let childElement;

  const addSection = (section) => {
    $sections = { ...$sections, [sectionName]: section };
  };

  const handleIntersect = (entries, observer) => {
    const [{ isIntersecting }] = entries;

    if (isIntersecting) {
      $currentSection = sectionName;
      cb(entries, observer);
    }
  };

  const options = { threshold: 0.15 };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(childElement);
    addSection(childElement);

    return () => observer.unobserve(childElement);
  });
</script>

<div bind:this={childElement}>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
