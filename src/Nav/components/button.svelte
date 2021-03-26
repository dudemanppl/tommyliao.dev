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
  button:hover,
  button:focus {
    top: -2px;
    left: -2px;
    outline: 0;
    color: white;
  }

  button,
  button.current {
    font-weight: 600;
    font-size: 30px;
    position: relative;
    height: 60px;
    width: auto;
    margin: 1vh 20px;
    color: #f8f4f0;
    cursor: pointer;
    top: 0;
    left: 0;
    transition: top 0.15s, left 0.15s, color 0.15s;
    letter-spacing: -1px;
  }

  button.current {
    color: white;
  }

  button::after {
    content: "";
    position: absolute;
    right: -10%;
    width: 0;
    bottom: 10px;
    background: white;
    height: 3px;
    transition: width 0.2s;
  }

  button.current::after {
    left: -10%;
    right: auto;
    width: 120%;
  }
</style>
