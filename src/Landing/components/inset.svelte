<script>
  import Icons from "./icons.svelte";
</script>

<div class="inset">
  <img
    src="https://dudemanppl.s3-us-west-1.amazonaws.com/41962026_1898602030162209_5312635139379953664_o+(1).jpg"
    alt="Me at Joshua Tree National Park at sunset"
  />

  <div class="name">Tommy Liao</div>
  <div class="descrip">Full Stack Developer</div>
  <Icons />
</div>

<style>
  img {
    height: 375px;
    width: 375px;
    border-radius: 20px 20px 0 0;
    margin-bottom: 15px;
  }

  .name {
    font-weight: bold;
    font-style: italic;
    font-size: 50px;
  }
  .descrip {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .inset {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 570px;
    width: 375px;
    background: white;
    border-radius: 15px;
    --white-shadow: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 2px var(--white-shadow), 0 0 4px var(--white-shadow),
      0 0 8px var(--white-shadow), 0 0 16px var(--white-shadow),
      0 0 32px var(--white-shadow), 0 0 64px var(--white-shadow),
      0 0 128px var(--white-shadow);
  }

  @media screen and (max-width: 475px), (max-height: 770px) {
    img {
      height: 250px;
      width: 250px;
      border-radius: 10px 10px 0 0;
    }

    .name {
      font-size: 35px;
    }

    .inset {
      height: 420px;
      width: 250px;
      border-radius: 10px;
    }
  }
</style>
