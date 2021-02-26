<script>
  import { currentSection } from "../../stores.js";
  const { setCurrentSection } = currentSection;

  export let label = "";

  $: current = $currentSection === label;

  const scrollToSection = () => {
    setCurrentSection(label);
  };
</script>

<li>
  <button on:click={scrollToSection} class:current>
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
  button:focus,
  button.current {
    color: #3b3b3b;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
  }

  button::after {
    position: absolute;
    content: "";
    left: -15%;
    width: 0;
    height: 100%;
    border-bottom: 3px solid black;
    transition: width 0.15s;
  }

  button:hover::after,
  button:focus::after,
  button.current::after {
    width: 130%;
  }
</style>
