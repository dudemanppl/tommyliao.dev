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

    let [
      { rootBounds, boundingClientRect, intersectionRect, target },
    ] = entries;

    console.log(observer);

    rootBounds = {
      y: rootBounds.y,
      width: rootBounds.width,
      height: rootBounds.height,
      top: rootBounds.top,
      bottom: rootBounds.bottom,
    };
    boundingClientRect = {
      y: boundingClientRect.y,
      width: boundingClientRect.width,
      height: boundingClientRect.height,
      top: boundingClientRect.top,
      bottom: boundingClientRect.bottom,
    };
    intersectionRect = {
      y: intersectionRect.y,
      width: intersectionRect.width,
      height: intersectionRect.height,
      top: intersectionRect.top,
      bottom: intersectionRect.bottom,
    };

    // rootBounds	boundingClientRect	intersectionRect
    if (isIntersecting) {
      // console.table({ rootBounds, boundingClientRect, intersectionRect });
      console.log(target);
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

      for (let i = 0; i < 20; i += 2) {
        thresholdArr.push(i / 100);
      }
      return thresholdArr;
    })(),
    // threshold: 0.1,
  };

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
