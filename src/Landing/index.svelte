<script>
  import Intersection from "../util/intersectionObserver.svelte";
  import Inset from "./components/inset.svelte";
</script>

<Intersection sectionName="Top">
  <div class="splash">
    <Inset />
    <div class="arrow" />
  </div>
</Intersection>

<style>
  .splash {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

  @media all and (max-width: 700px), (max-height: 800px) {
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
