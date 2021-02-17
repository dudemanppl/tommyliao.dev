<script>
  import Logo from "./components/logo.svelte";
  import { currentSection } from "../stores.js";

  const updateSection = (newSection) => {
    $currentSection = newSection;
  };
</script>

<nav>
  <a on:click={() => updateSection("nice")}><Logo /></a>
</nav>
