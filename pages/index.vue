<template>
  <div>
    <Carousel />
    <div class="container">
      <section>
        <h2><span>News</span></h2>
        <List />
      </section>
      <section class="loop-content">
        <Parallax />
        <Block />
      </section>
      <section class="loop-content">
        <Block />
        <Parallax />
      </section>
      <section class="loop-content">
        <Parallax />
        <Block />
      </section>
      <section class="loop-content">
        <Block />
        <Parallax />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Parallax from "~/components/Parallax.vue";
export default Vue.extend({
  components: { Parallax },
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
  &.loop-content {
    @media only screen and (min-width: 920px) {
      display: flex;
    }
  }
}
</style>