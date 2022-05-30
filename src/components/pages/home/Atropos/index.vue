<template>
  <atropos class="atropos" :shadow="false">
    <img data-atropos-offset="-3" src="/m0nch1_golden.png" alt="" />
    <img data-atropos-offset="0" src="/m0nch1_karekusa.png" alt="" />
    <img data-atropos-offset="3" src="/m0nch1_green.png" alt="" />
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
