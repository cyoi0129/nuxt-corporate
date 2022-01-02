<template>
  <article>
    <h2>Parallax</h2>
    <p>
      Parallax is a displacement or difference in the apparent position of an
      object viewed along two different lines of sight, and is measured by the
      angle or semi-angle of inclination between those two lines.
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
$bg: '../static/bg' + random(5) + '.jpg';
article {
  box-sizing: border-box;
  color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 32px 0;
  background-image: url($bg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 920px) {
    width: 50%;
  }
  @media only screen and (max-width: 919px) {
    width: 100%;
  }
  h2 {
      font-size: 24px;
  }
  p {
      font-size: 14px;
      padding: 16px;
  }
}
</style>