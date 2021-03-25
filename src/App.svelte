<script>
  import { onMount } from "svelte";
  import {
    currentSection,
    sections,
    sectionIntersectionRatios,
    scrolledTo,
  } from "./stores/index";
  import Nav from "./Nav/index.svelte";
  import Landing from "./Landing/index.svelte";
  import Work from "./Work/index.svelte";

  $: if (Math.round($sectionIntersectionRatios[$currentSection])) {
    $scrolledTo = true;
  }

  onMount(() => {
    currentSection.setCurrentSection($sections.currentElemInView[0]);
  });
</script>

<main>
  <Nav />
  <Landing />
  <Work />
</main>

<style>
  main {
    background: linear-gradient(70deg, #51c5e8, #e8688d, #daac74, #8bee82);
    background-size: 800% 800%;
    -webkit-animation: 10s linear infinite alternate background-color-animation;
    -moz-animation: 10s linear infinite alternate background-color-animation;
    animation: 10s linear infinite alternate background-color-animation;
  }

  @-webkit-keyframes background-color-animation {
    from {
      background-position: 0% 90%;
    }
    to {
      background-position: 100% 11%;
    }
  }
  @-moz-keyframes background-color-animation {
    from {
      background-position: 0% 90%;
    }
    to {
      background-position: 100% 11%;
    }
  }
  @keyframes background-color-animation {
    from {
      background-position: 0% 90%;
    }
    to {
      background-position: 100% 11%;
    }
  }
</style>
