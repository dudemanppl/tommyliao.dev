<script>
  import Nav from "./Nav/index.svelte";
  import Landing from "./Landing/index.svelte";
  import Projects from "./Projects/index.svelte";
</script>

<main>
  <Nav />
  <Landing />
  <Projects />
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
