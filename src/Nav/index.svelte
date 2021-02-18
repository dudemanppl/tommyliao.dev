<script>
  import Logo from "./components/logo.svelte";
  import Button from "./components/button.svelte";
  const buttonLabels = ["Projects", "About Me", "Resume"];
</script>

<nav>
  <ul>
    <Logo />
    {#each buttonLabels as label}
      <Button {label} />
    {/each}
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    height: 60px;
    display: flex;
    background: white;
    position: fixed;
    flex-direction: row;
    z-index: 10;
  }

  ul {
    width: 100%;
    justify-content: flex-end;
  }

  @media screen and (max-width: 475px), screen and (max-height: 790px) {
    nav {
      display: none;
    }
  }
</style>
