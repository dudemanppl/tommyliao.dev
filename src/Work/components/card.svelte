<script>
  export let project;
  const {
    name,
    techStack,
    description,
    bulletPoints,
    media,
    backgroundColor,
    githubLink,
  } = project;
</script>

<div class="card" style="--background-color: rgb({backgroundColor})">
  {name}
</div>

<style>
  div {
    width: 35vw;
    height: 40vh;
    margin: 20px;
    background-color: var(--background-color);
  }
</style>
