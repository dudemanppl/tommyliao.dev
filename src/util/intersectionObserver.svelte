<script>
  import { onMount } from "svelte";
  import { currentSection } from "../stores.js";

  export let sectionName;
  export let cb = () => {};

  let observer;
  let elementToObserve;

  const handleIntersect = (entries, observer) => {
    const [{ isIntersecting }] = entries;

    if (isIntersecting) {
      $currentSection = sectionName;
      cb(entries, observer);
    }
    console.log($currentSection);
  };

  const options = { threshold: 0.15 };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(elementToObserve);

    return () => observer.unobserve(elementToObserve);
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
