<script>
  import Logo from "./components/logo.svelte";
  import Button from "./components/button.svelte";
  const buttonLabels = ["work", "about me", "resume"];
</script>

<nav>
  <ul>
    <!-- <Logo /> -->
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
    position: fixed;
    flex-direction: row;
    z-index: 10;
  }

  ul {
    width: 100%;
    justify-content: flex-end;
    padding-right: 1.5%;
  }

  @media screen and (max-width: 500px), (max-height: 570px) {
    nav {
      display: none;
    }
  }
</style>
