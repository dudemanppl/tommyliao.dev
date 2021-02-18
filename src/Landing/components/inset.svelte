<script>
  import Icons from "./icons.svelte";
</script>

<div class="inset">
  <img
    src="https://dudemanppl.s3-us-west-1.amazonaws.com/41962026_1898602030162209_5312635139379953664_o+(1).jpg"
    alt="Me at Joshua Tree National Park at sunset"
  />

  <Icons />
  <div class="name">Tommy Liao</div>
  <div class="descrip">Full Stack Developer</div>
</div>

<!-- 570 x 375 -->
<style>
  img {
    height: 375px;
    width: 375px;
    border-radius: 40px 40px 0 0;
    margin-bottom: 20px;
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
    background: rgb(255, 255, 255);
    border-radius: 40px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 475px) {
    img {
      height: 250px;
      width: 250px;
      border-radius: 20px 20px 0 0;
      margin-bottom: 0;
    }

    .name {
      font-size: 35px;
    }

    .inset {
      height: 420px;
      width: 250px;
      border-radius: 20px;
    }

    .inset:nth-child(2) {
      order: 4
    }
  }
</style>
