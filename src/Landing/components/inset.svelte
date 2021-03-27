<script>
  import Icons from "./icons.svelte";
</script>

<div class="inset">
  <div class="info">
    <div class="name">Tommy Liao</div>
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
    align-items: center;
    color: white;
  }

  .info {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .name {
    font-family: "Spartan", sans-serif;
    font-weight: 700;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: -7px;
  }

  .descrip {
    font-family: "Overpass", sans-serif;
    font-size: 24px;
    font-weight: 400;
  }

  img {
    height: 450px;
    width: 450px;
    border-radius: 4px;
  }

  @media screen and (max-width: 1280px) {
    .name {
      font-size: 70px;
      line-height: 84px;
      letter-spacing: -3px;
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
      align-items: center;
    }

    .name {
      font-size: 50px;
      line-height: 60px;
      letter-spacing: -2px;
    }

    .descrip {
      font-size: 18px;
    }
  }
</style>
