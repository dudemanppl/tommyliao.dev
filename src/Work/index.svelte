<script>
  import Intersection from "../util/intersectionObserver.svelte";
  import Card from "./components/card.svelte";
  import projects from "../../dummy";
</script>

<Intersection sectionName="work">
  <div class="work">
    {#each projects as project}
      <Card {project} />
    {/each}
  </div>
</Intersection>

<style>
  .work {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    /* padding: 40px; */
    justify-content: center;
    /* background: white; */
    align-items: center;
  }
</style>
