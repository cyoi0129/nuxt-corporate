<template>
  <dl>
    <template v-for="(item, index) in posts">
      <dt :key="index + 1">{{ item.date }}</dt>
      <dd :key="index + 1">
        <nuxt-link :to="'info/' + item.id">{{ item.title }}</nuxt-link>
      </dd>
    </template>
  </dl>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "List",
  data() {
    return { };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  }
});
</script>
<style lang="scss" scoped>
dl {
  margin: 32px;
  dt {
    padding-left: 8px;
    width: 120px;
    float: left;
    color: #777;
    font-size: 90%;
    border-bottom: 1px solid #ddd;
    line-height: 48px;
  }
  dd {
    padding-right: 8px;
    max-width: 320px;
    margin-left: 0;
    line-height: 48px;
    border-bottom: 1px solid #ddd;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
</style>