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
    font-size: 32px;
    line-height: 60px;
    position: relative;
    height: 60px;
    width: 150px;
    margin: 0 20px;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
    transition: text-shadow 0.3s;
  }

  button:hover,
  button.current {
    text-shadow: 2px 2px rgb(100, 100, 100);
    cursor: pointer;
  }

  /* button::after {
    content: "";
    position: absolute;
    right: -15%;
    width: 0;
    bottom: -3px;
    background: white;
    height: 3px;
    transition: width 0.2s;
  }

  button:hover::after,
  button:active::after,
  button.current::after {
    left: -15%;
    right: auto;
    width: 130%;
  } */
</style>
