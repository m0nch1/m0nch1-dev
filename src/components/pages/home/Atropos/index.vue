<template>
  <atropos class="atropos" :shadow="false">
    <img data-atropos-offset="-4.5" src="/i/atropos-bg.svg" alt="" />
    <img data-atropos-offset="-2.5" src="/i/atropos-mountains.svg" alt="" />
    <img data-atropos-offset="0" src="/i/atropos-forest-back.svg" alt="" />
    <img data-atropos-offset="2" src="/i/atropos-forest-mid.svg" alt="" />
    <img data-atropos-offset="4" src="/i/atropos-forest-front.svg" alt="" />
    <img data-atropos-offset="5" src="/i/atropos-logo-en.svg" alt="" />
  </atropos>
</template>
<script>
import Atropos from "atropos/vue";

export default {
  components: {
    Atropos,
  },
};
</script>

<style scoped lang="scss">
.atropos {
  width: 100%;
  height: 500px;
  object-fit: contain;

  img {
    position: absolute;
    left: -5%;
    top: -5%;
    width: 110%;
    height: 110%;
    object-fit: contain;
    display: block;
    z-index: 1;
    transform-style: preserve-3d;
    pointer-events: none;
    max-width: none;
  }
}
</style>
