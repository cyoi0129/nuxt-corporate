<template>
  <div class="container">
    <h1>Service</h1>
    <section class="flex-content">
      <article><img src="../static/device.jpg" alt="" /></article>
      <TextBlock />
    </section>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Service",
});
</script>
<style lang="scss" scoped>
section {
  padding: 16px;
  img {
    width: 100%;
  }
  &.flex-content {
    @media only screen and (min-width: 920px) {
      display: flex;
      article {
        width: 50%;
      }
    }
    @media only screen and (max-width: 919px) {
      article {
        width: 100%;
      }
    }
  }
}
</style>