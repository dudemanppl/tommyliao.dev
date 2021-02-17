<script>
  export let size = 60;
</script>

<li>
  <button aria-label="Scroll to top">
    <svg class="logo" height="{size}px" width="{size}px">
      <rect />
      <rect />
      <rect />
      <rect />
      <rect />
      <rect />
      <rect />
    </svg>
  </button>
</li>

<style>
  li {
    margin-left: 30px;
    margin-right: auto;
  }

  .logo {
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .logo:hover,
  .logo:focus {
    opacity: 0.7;
  }

  rect {
    width: 100%;
    height: calc(100% / 15);
  }

  rect:nth-of-type(1) {
    fill: #5f5f5f;
    y: calc(100% / 15 * 1);
  }
  rect:nth-of-type(2) {
    fill: #3f3f3f;
    y: calc(100% / 15 * 3);
  }
  rect:nth-of-type(3) {
    fill: #5e5e5e;
    y: calc(100% / 15 * 5);
  }
  rect:nth-of-type(4) {
    fill: #7f7f7f;
    y: calc(100% / 15 * 7);
  }
  rect:nth-of-type(5) {
    fill: #9e9e9e;
    y: calc(100% / 15 * 9);
  }
  rect:nth-of-type(6) {
    fill: #bfbfbf;
    y: calc(100% / 15 * 11);
  }
  rect:nth-of-type(7) {
    fill: #dddddd;
    y: calc(100% / 15 * 13);
  }
</style>
