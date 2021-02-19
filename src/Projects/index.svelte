<script>
  import Intersection from "../util/intersectionObserver.svelte";
</script>

<Intersection cb={console.log}>
  <div class="test">nice</div>
</Intersection>

<!-- <div bind:this={nice} class="test">nice</div> -->
<style>
  .test {
    width: 100vw;
    height: 100vh;
  }
</style>
