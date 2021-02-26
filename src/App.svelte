<script>
  import { afterUpdate } from "svelte";
  import { currentSection, sections } from "./stores";
  import Nav from "./Nav/index.svelte";
  import Landing from "./Landing/index.svelte";
  import Projects from "./Projects/index.svelte";
  import IntersectionObserver from "./util/intersectionObserver.svelte";

  afterUpdate(() => {
    let lowest;

    for (const { sectionName, section } in $sections) {
      console.log(sectionName);
    }

    // const nice = [...$sections].map((section) => {
    //   const [{ y }] = section.getClientRects();
    // });
    // // const nice = Math.min(...$sections.getClientRects()[0].y);
    // console.log(nice);
  });
</script>

<main>
  <Nav />
  <Landing />
  <Projects />
  <IntersectionObserver sectionName="About Me"
    ><div style="width:100%; height: 100vh;" /></IntersectionObserver
  >
</main>

<style>
  main {
    background: linear-gradient(70deg, #51c5e8, #e8688d, #daac74, #8bee82);
    background-size: 800% 800%;
    -webkit-animation: background-color-animation 20s ease infinite;
    -moz-animation: background-color-animation 20s ease infinite;
    animation: background-color-animation 20s ease infinite;
  }

  @-webkit-keyframes background-color-animation {
    0% {
      background-position: 0% 90%;
    }
    50% {
      background-position: 100% 11%;
    }
    100% {
      background-position: 0% 90%;
    }
  }
  @-moz-keyframes background-color-animation {
    0% {
      background-position: 0% 90%;
    }
    50% {
      background-position: 100% 11%;
    }
    100% {
      background-position: 0% 90%;
    }
  }
  @keyframes background-color-animation {
    0% {
      background-position: 0% 90%;
    }
    50% {
      background-position: 100% 11%;
    }
    100% {
      background-position: 0% 90%;
    }
  }
</style>
