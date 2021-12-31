<template>
  <main class="home-main">
    <Carousel />
    <List />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IndexPage",
  computed: {
    // testPost() {
    //   const testPost = this.$store.getters.getPost('-Mr2ecVMLuD4DQvP_YC8');
    //   console.log(testPost);
    // },
    Categories() {
      return this.$store.state.masters.categories;
    },
    Tags() {
      return this.$store.state.masters.tags;
    },
  },
  // asyncData () {
  //   async () => {
  //     await this.$store.dispatch('fetchData');
  //   }
  // },
  async asyncData({ store }) {
    await store.dispatch("fetchData");
  },
});
</script>
