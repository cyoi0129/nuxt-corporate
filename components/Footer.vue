<template>
    <footer>
        <p>&copy; {{year}} Nuxt Corporate All Rights Reserved</p>
    </footer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
});
</script>
<style lang="scss" scoped>
    footer {
        background: #ccc;
        width: 100%;
        text-align: center;
        font-size: 80%;
        color: #555;
        padding: 8px 0;
        p {
            margin: 0;
        }
    }
</style>