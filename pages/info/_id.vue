<template>
  <main>
    <h1>{{ post.title }}</h1>
    <template v-if="post.thumbnail !== ''">
        <img :src="post.thumbnail" :alt="post.title" />
    </template>
    <dl>
      <dt>Category</dt>
      <dd>{{ post.category }}</dd>
      <dt>Tag</dt>
      <dd>
        <ul>
          <li v-for="(item, index) in post.tag" :key="index">
            {{ item }}
          </li>
        </ul>
      </dd>
    </dl>
    <article id="editorjs"></article>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
import EditorJS from "@editorjs/editorjs";
export default Vue.extend({
  name: "Article",
  computed: {
    post() {
      const id = this.$route.params.id;
      const postData = this.$store.getters.getPost(id);
      const Header = require("@editorjs/header");
      const List = require("@editorjs/list");
      const ImageTool = require("@editorjs/image");
      const Table = require("@editorjs/table");
      // const EditorJSStyle = require('editorjs-style');
      new EditorJS({
        holderId: "editorjs",
        readOnly: true,
        tools: {
            header: Header,
            list: List,
            table: Table,
            image: ImageTool,
        },
        data: postData.content,
        // style: EditorJSStyle.StyleInlineTool
      });
      return postData;
    },
  },
});
</script>
<style>
.image-tool__caption {
    display: none;
}
</style>