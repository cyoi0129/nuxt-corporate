<template>
  <div>
    <Carousel />
    <div class="container">
      <section>
        <h2><span>News</span></h2>
        <List />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IndexPage",
  async asyncData({ store }) {
    await store.dispatch("fetchData");
  },
});
</script>
<style lang="scss" scoped>
section {
  padding: 16px;
  h2 {
    position: relative;
    padding: 0 65px;
    text-align: center;
    &:before {
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 100%;
      height: 2px;
      content: "";
      background: #10b981;
    }
    span {
      position: relative;
      padding: 0 1em;
      background: #fff;
    }
  }
}
</style>