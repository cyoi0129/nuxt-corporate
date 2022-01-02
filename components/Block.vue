<template>
  <article>
    <h2>Heading</h2>
    <ul>
      <li>Many animals have two eyes with overlapping visual fields</li>
      <li>In computer vision the effect is used for computer stereo vision</li>
      <li>A primitive way to determine the distance to the Sun</li>
      <li>
        Parallax error can be seen when taking photos with many types of cameras
      </li>
    </ul>
  </article>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Block",
});
</script>
<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media only screen and (min-width: 920px) {
    width: 50%;
  }
  @media only screen and (max-width: 919px) {
    width: 100%;
  }
  h2 {
      font-size: 24px;
  }
  ul {
      margin: 0 32px 32px;
      font-size: 14px;
      li {
          list-style-type: disc;
      }
  }
}
</style>