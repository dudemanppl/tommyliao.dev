<script>
  import Intersection from "../util/intersectionObserver.svelte";
  import { currentSection } from "../stores.js";

  const scrollToBottom = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      $currentSection = "Projects";
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };
</script>

<Intersection cb={scrollToBottom}>
  <div class="test">nice</div>
</Intersection>

<style>
  .test {
    z-index: 1;
    width: 100%;
    height: 100vh;
    background: grey;
  }
</style>
