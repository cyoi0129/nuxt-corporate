<template>
  <div class="container">
    <h1>About</h1>
    <Timeline />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
});
</script>
<style lang="scss" scoped>
section {
  padding: 16px;
  img {
    width: 100%;
  }
}
</style>