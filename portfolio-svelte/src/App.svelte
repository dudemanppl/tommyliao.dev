<script>
  import { currentSection } from "./stores.js";

  import Nav from "./Nav/index.svelte";
  import Splash from "./Splash/index.svelte";
  const updateSection = (newSection) => {
    $currentSection = newSection;
  };
</script>

<main />
<Nav />
<Splash />

<style>
</style>
