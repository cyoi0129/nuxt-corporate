<template>
  <svg class="menu-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/>
  </svg>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: 'MenuIcon',
});
</script>
<style>
.menu-icon {
  fill: #10b981;
}
</style>