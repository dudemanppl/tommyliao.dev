<script>
  import Icons from "./icons.svelte";
</script>

<div class="inset">
  <div class="info">
    <div class="name"><span class="first-name">Tommy</span> Liao</div>
    <div class="descrip">full stack developer</div>
    <Icons />
  </div>
  <img
    src="https://dudemanppl.s3-us-west-1.amazonaws.com/41962026_1898602030162209_5312635139379953664_o+(1).jpg"
    alt="Me at Joshua Tree National Park at sunset"
  />
</div>

<style>
  .inset {
    display: flex;
    align-items: flex-end;
    color: white;
  }

  .info {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .name {
    font-weight: 800;
    font-size: 100px;
    line-height: 100px;
    letter-spacing: -4px;
  }

  .first-name {
    letter-spacing: -8px;
  }

  .descrip {
    font-size: 24px;
    font-weight: 500;
  }

  img {
    height: 450px;
    width: 450px;
    border-radius: 3px;
  }

  @media screen and (max-width: 1280px) {
    .name {
      font-size: 80px;
      line-height: 84px;
    }
    .descrip {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    .inset {
      flex-direction: column-reverse;
    }
    .info {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    .inset {
      align-items: center;
    }

    img {
      height: 90%;
      width: 90%;
    }

    .info {
      margin-top: 5px;
    }

    .name {
      font-size: 50px;
      line-height: 48px;
      letter-spacing: -2px;
    }

    .first-name {
      letter-spacing: -4px;
    }

    .descrip {
      font-size: 18px;
    }
  }

  /* @media screen and (max-width: 475px), (max-height: 770px) {
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
  } */
</style>
