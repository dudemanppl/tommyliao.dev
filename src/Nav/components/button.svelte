<script>
  import { currentSection } from "../../stores/index.js";
  const { setCurrentSection } = currentSection;

  export let label = "";

  $: current = $currentSection === label;
</script>

<li>
  <button
    on:click|preventDefault={() => setCurrentSection(label)}
    class:current
  >
    {label}
  </button>
</li>

<style>
  button {
    font-family: "Petrona", serif;
    font-size: 30px;
    line-height: 60px;
    position: relative;
    height: 60px;

    width: auto;
    margin: 20px;
    color: white;
    transition: text-shadow 0.2s;
  }

  button:hover,
  button.current {
    text-shadow: 2px 2px 1px rgb(100, 100, 100);
    cursor: pointer;
  }

  button::after {
    content: "";
    position: absolute;
    right: -10%;
    width: 0;
    bottom: 8px;
    background: white;
    height: 3px;
    box-shadow: 1px 1px 3px rgb(100, 100, 100);
    transition: width 0.2s;
  }

  button:hover::after,
  button:active::after,
  button.current::after {
    left: -10%;
    right: auto;
    width: 120%;
  }
</style>
