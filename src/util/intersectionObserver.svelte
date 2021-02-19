<script>
  import { onMount } from "svelte";
  import { currentSection, sections } from "../stores.js";
  const { setCurrentSection } = currentSection;
  const { addSection } = sections;

  export let sectionName;
  export let cb = () => {};

  let observer;
  let childElement;

  const handleIntersect = (entries, observer) => {
    const [{ isIntersecting }] = entries;

    if (isIntersecting) {
      setCurrentSection(sectionName);
      cb(entries, observer);
    }
  };

  const observerOptions = { threshold: 0.15 };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(childElement);
    addSection({ [sectionName]: childElement });

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
