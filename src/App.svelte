<script>
  import { currentSection } from "./stores.js";

  import Nav from "./Nav/index.svelte";
  import Landing from "./Landing/index.svelte";
  const updateSection = (newSection) => {
    $currentSection = newSection;
  };
</script>

<main />
<Nav />
<Landing />

<style>
</style>
