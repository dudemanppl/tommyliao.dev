<script>
  import { currentSection } from "../../stores/index";
  const { setCurrentSection } = currentSection;

  $: visible = $currentSection === "top";
  $: tabindex = visible ? -1 : 1;

  const goToTop = () => {
    setCurrentSection("top");
  };
</script>

<li>
  <button class:visible {tabindex} on:click={goToTop}>TL</button>
</li>

<style>
  button.visible {
    transition: top 500ms;
    top: -100px;
  }

  button {
    position: absolute;
    margin: 15px;
    top: 0;
    left: 0;
    font-family: "Spartan", sans-serif;
    font-weight: 700;
    color: white;
    font-size: 80px;
    line-height: 80px;
    cursor: pointer;
    transition: top 200ms, left 200ms;
  }

  button:hover,
  button:focus-visible {
    top: -2px;
    left: -2px;
  }

  @media screen and (max-width: 500px) {
    li {
      display: none;
    }
  }
</style>
