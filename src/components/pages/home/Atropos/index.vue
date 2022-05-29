<template>
  <atropos class="atropos atropos-header">
    <img data-atropos-offset="-4.5" src="/i/atropos-bg.svg" alt="" />
    <img src="/m0nch1_face.png" data-atropos-offset="10" />
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
@import "atropos/scss";

.atropos {
  width: 50%;
  height: 300px;
}
</style>
