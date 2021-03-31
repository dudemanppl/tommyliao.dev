<script>
  import Intersection from "../util/intersectionObserver.svelte";
</script>

<Intersection sectionName="work">
  <div class="test">nice</div>
</Intersection>

<style>
  .test {
    z-index: 1;
    width: 100%;
    height: 100vh;
    /* background: grey; */
  }
</style>
