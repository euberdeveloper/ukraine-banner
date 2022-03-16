<svelte:options tag="ukraine-ribbon" />

<script lang="ts">
  import { onMount } from "svelte";

  export let href: string | undefined = undefined;
  export let title: string | undefined = undefined;

  export let height: string | undefined = "3vw";
  export let boxshadow: string | undefined = "0 0 8px rgb(0 0 0 / 50%)";

  export let vertical: "top" | "bottom" = "bottom";
  export let horizontal: "left" | "right" = "right";

  export let zindex: string | undefined = "999999";

  let top: boolean;
  let bottom: boolean;
  let left: boolean;
  let right: boolean;

  onMount(() => {
    vertical = vertical === "top" ? "top" : "bottom";
    horizontal = horizontal === "left" ? "left" : "right";

    top = vertical === "top";
    bottom = vertical === "bottom";
    left = horizontal === "left";
    right = horizontal === "right";
  });
</script>

<div class="ukraine-ribbon" class:top class:bottom class:left class:right style="--zindex:{zindex}">
  <a
    class="ribbon"
    {href}
    {title}
    style="--height:{height}; --box-shadow:{boxshadow}"
  >
    <div class="stripe blue" />
    <div class="stripe yellow" />
  </a>
</div>

<style type="scss">
  .ukraine-ribbon {
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(45%);
    z-index: var(--zindex);

    > .ribbon {
      position: relative;
      display: block;
      width: 100vw;
      height: var(--height);
      transform: rotate(45deg);
      box-shadow: var(--box-shadow);

      > .stripe {
        width: 100%;
        height: 50%;

        &.blue {
          background: #275bbb;
        }
        &.yellow {
          background: #fad503;
        }
      }
    }

    &.left {
      left: 0;
      right: auto;
      transform: translateX(-45%);

      &.top {
        > .ribbon {
          transform: rotate(-45deg);
        }
      }
      &.bottom {
        > .ribbon {
          transform: rotate(45deg);
        }
      }
    }
    &.right {
      left: auto;
      right: 0;
      transform: translateX(45%);

      &.top {
        > .ribbon {
          transform: rotate(45deg);
        }
      }
      &.bottom {
        > .ribbon {
          transform: rotate(-45deg);
        }
      }
    }
    &.top {
      top: 0;
      bottom: auto;
    }
    &.bottom {
      top: auto;
      bottom: 0;
    }
  }
</style>
