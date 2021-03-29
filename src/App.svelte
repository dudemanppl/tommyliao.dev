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
    -webkit-animation: 20s linear infinite alternate background-color-animation;
    -moz-animation: 20s linear infinite alternate background-color-animation;
    animation: 20s linear infinite alternate background-color-animation;
  }

  main::before {
    content: "";
    overflow: hidden;
    animation: 2s linear main-fade, 2s linear bg-fade;
  }

  main::after {
    content: "TL";
    animation: 2s linear main-fade, 2s linear name-fade;
    opacity: 0;
    border-radius: 3px;
  }

  @keyframes main-fade {
    0%,
    100% {
      position: fixed;
    }
    10%,
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes bg-fade {
    0%,
    100% {
      background-color: white;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 11;
    }
  }

  @keyframes name-fade {
    0% {
      top: 50%;
    }

    0%,
    100% {
      font-size: 5vh;
      line-height: 5vh;
      font-weight: 800;
      text-align: center;
      z-index: 12;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2.5vh;
      border: 2px solid black;
    }
    60% {
      border: 2px solid black;
      opacity: 1;
      color: black;
      top: 50%;
    }
    90% {
      opacity: 0;
      color: transparent;
      border-color: transparent;
      top: 40%;
    }
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
