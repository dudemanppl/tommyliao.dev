<script>
  import { currentSection } from "../../stores/index.js";
  const { setCurrentSection } = currentSection;

  export let label = "";

  $: current = $currentSection === label;

  const scrollToSection = () => {
    setCurrentSection(label);
  };
</script>

<li>
  <button on:click|preventDefault={scrollToSection} class:current>
    {label}
  </button>
</li>

<style>
  button {
    font-size: 22px;
    line-height: 60px;
    position: relative;
    height: 60px;
    width: 100px;
    margin: 0 20px;
  }

  button:hover,
  button.current {
    color: #3b3b3b;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
  }

  button::after {
    content: "";
    position: absolute;
    right: -15%;
    width: 0;
    bottom: -3px;
    background: black;
    height: 3px;
    transition: width 0.2s;
  }

  button:hover::after,
  button:active::after,
  button.current::after {
    left: -15%;
    right: auto;
    width: 130%;
  }
</style>
