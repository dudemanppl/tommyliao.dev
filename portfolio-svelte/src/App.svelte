<script>
  import { currentSection } from "./stores.js";
  
  import Nav from "./Nav/index.svelte";
  const updateSection = (newSection) => {
    $currentSection = newSection;
  };
</script>

<main />
<Nav />

<style>
</style>
