<template>
  <div>
    <Carousel />
    <div class="container">
      <section>
        <h2><span>News</span></h2>
        <List />
      </section>
      <section>
        <Parallax />
      </section>
      <section class="flex-content">
        <article><img src="../static/marketing.jpg" alt="" /></article>
        <TextBlock />
      </section>
      <section>
        <Parallax />
      </section>
      <section class="flex-content">
        <TextBlock />
        <article><img src="../static/device.jpg" alt="" /></article>
      </section>
      <section>
        <Parallax />
      </section>
      <section class="flex-content">
        <article><img src="../static/analysis.jpg" alt="" /></article>
        <TextBlock />
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