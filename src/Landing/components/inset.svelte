<script>
  import Icons from "./icons.svelte";
</script>

<div class="inset">
  <img
    src="https://dudemanppl.s3-us-west-1.amazonaws.com/41962026_1898602030162209_5312635139379953664_o+(1).jpg"
    alt="Me at Joshua Tree National Park at sunset"
  />
  <div class="name">Tommy Liao</div>
  <div class="bio">Full Stack Developer</div>
  <Icons />
  <a
    class="resume"
    href="https://dudemanppl.s3-us-west-1.amazonaws.com/resume.pdf"
  >
    Resume
  </a>
</div>

<style>
  img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    /* border: solid white 3px;
    box-shadow: 0px 0px 15px rgb(200, 200, 200); */
  }
  .resume {
    display: none;
    font-size: 25px;
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .name,
  .bio {
    color: #f1edeb;
  }

  .name {
    font-weight: bold;
    font-style: italic;
    font-size: 60px;
  }
  .bio {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .inset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50px;
    height: 500px;
    width: 500px;
    /* background: rgb(250, 250, 250); */
    /* box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.3); */
  }
  @media all and (max-width: 700px) {
    .resume {
      margin-top: 10px;
      display: flex;
    }

    .inset {
      width: 100%;
      height: 80%;
      box-shadow: 0 20px 30px rgb(11, 104, 133);
    }
  }

  @media all and (max-width: 400px) {
    .name {
      font-size: 40px;
    }
  }

  @media all and (max-height: 585px) {
    img {
      height: 220px;
      width: 220px;
    }
    .name {
      font-size: 35px;
    }
    .bio {
      font-size: 18px;
    }
    .resume {
      font-size: 20px;
    }
  }

  @media all and (max-height: 510px) {
    img {
      height: 200px;
      width: 200px;
    }
    .name {
      font-size: 30px;
    }
    .bio {
      font-size: 15px;
    }
    .resume {
      font-size: 18px;
    }
  }
</style>
