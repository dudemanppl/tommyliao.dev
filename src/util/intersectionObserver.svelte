<script>
  import { onMount } from "svelte";
  import { currentSection, sections } from "../stores.js";
  const { setCurrentSection } = currentSection;
  const { addSection } = sections;

  export let sectionName;
  export let cb = () => {};

  const sectionIntersectionRatios = {};
  let observer;
  let childElement;

  const handleIntersect = (entries, observer) => {
    const [{ intersectionRatio }] = entries;

    if (intersectionRatio > 0 && intersectionRatio < 1) {
      console.log(sectionName, entries[0].intersectionRatio);

      sectionIntersectionRatios[sectionName] = intersectionRatio;
      console.log(sectionIntersectionRatios);
      // console.table({ rootBounds, boundingClientRect, intersectionRect });
      // console.log(target);
      setCurrentSection(sectionName);
      // $sections[$currentSection].scrollIntoView({
      //   behavior: "smooth",
      // });
      cb(entries, observer);
    }
  };

  const observerOptions = {
    threshold: (() => {
      const thresholdArr = [];

      for (let i = 0; i < 20; i += 1) {
        thresholdArr.push(i / 100);
      }
      return thresholdArr;
    })(),
  };

  onMount(() => {
    observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(childElement);
    addSection(sectionName, childElement);

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
