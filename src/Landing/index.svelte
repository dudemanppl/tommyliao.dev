<script>
  import Inset from "./components/inset.svelte";

  // rgb(255, 255, 255),
  //     rgb(135, 227, 255),
  //     rgb(95, 212, 247),
  //     rgb(78, 188, 222),
</script>

<div class="splash">
  <Inset />
  <div class="arrow" />
</div>

<style>
  .splash {
    position: relative;
    z-index: 1;
    top: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(170deg, #51c5e8, #e8688d, #daac74, #8bee82);
    background-size: 800% 800%;
    -webkit-animation: background-color-animation 30s ease infinite;
    -moz-animation: background-color-animation 30s ease infinite;
    animation: background-color-animation 30s ease infinite;
    height: calc(100vh - 60px);
  }

  @-webkit-keyframes background-color-animation {
    0% {
      background-position: 14% 0%;
    }
    50% {
      background-position: 87% 100%;
    }
    100% {
      background-position: 14% 0%;
    }
  }
  @-moz-keyframes background-color-animation {
    0% {
      background-position: 14% 0%;
    }
    50% {
      background-position: 87% 100%;
    }
    100% {
      background-position: 14% 0%;
    }
  }
  @keyframes background-color-animation {
    0% {
      background-position: 14% 0%;
    }
    50% {
      background-position: 87% 100%;
    }
    100% {
      background-position: 14% 0%;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) rotate(135deg);
    }
    40% {
      transform: translateY(-30px) rotate(135deg);
    }
    60% {
      transform: translateY(-15px) rotate(135deg);
    }
  }

  .arrow {
    position: absolute;
    bottom: 30px;
    width: 35px;
    height: 35px;
    border-top: 4px solid white;
    border-right: 4px solid white;
    animation: bounce 2s infinite;
  }

  @media all and (max-width: 700px) {
    .splash {
      top: 0;
      height: 100vh;
    }
  }

  @media all and (max-width: 700px), (max-height: 750px) {
    .arrow {
      width: 25px;
      height: 25px;
      border-top: 3px solid white;
      border-right: 3px solid white;
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0) rotate(135deg);
      }
      40% {
        transform: translateY(-20px) rotate(135deg);
      }
      60% {
        transform: translateY(-15px) rotate(135deg);
      }
    }
  }

  @media all and (max-height: 600px) {
    .arrow {
      bottom: 10px;
      width: 20px;
      height: 20px;
    }
  }
</style>
