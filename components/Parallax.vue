<template>
  <article>
    <h2>Parallax</h2>
    <p>
      Parallax is a displacement or difference in the apparent position of an
      object viewed along two different lines of sight, and is measured by the
      angle or semi-angle of inclination between those two lines. Due to foreshortening, nearby objects show a larger parallax than farther objects when observed from different positions, so parallax can be used to determine distances.
    </p>
  </article>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Parallax",
});
</script>
<style lang="scss" scoped>
article {
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 32px 0;
  background-image: url('../static/system.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h2 {
      font-size: 24px;
  }
  p {
      font-size: 14px;
      padding: 16px;
  }
}
</style>