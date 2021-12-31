<template>
  <main class="article">
    <h1>{{ post.title }}</h1>
    <dl class="meta">
      <dt><CategoryIcon /></dt>
      <dd>{{ post.category }}</dd>
      <dt><TagIcon /></dt>
      <dd>
        <ul class="tag-list">
          <li v-for="(item, index) in post.tag" :key="index + 1">
            {{ item }}
          </li>
        </ul>
      </dd>
      <dt><DateIcon /></dt>
      <dd>{{ post.date }}</dd>
    </dl>
    <p class="description">{{ post.description }}</p>
    <template v-if="post.thumbnail !== ''">
      <img class="thumbnail" :src="post.thumbnail" :alt="post.title" />
    </template>
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
<style lang="scss">
main.article {
  max-width: 800px;
  margin: 0 auto;
  h1 {
    padding: 8px;
    margin: 0;
    border-bottom: 2px solid #10b981;
  }
  .description {
    font-style: italic;
    font-size: 80%;
    color: #777;
    padding: 4px 8px;
    margin: 0;
  }
  .thumbnail {
    max-width: 100%;
    margin: 8px auto;
  }
  dl.meta {
    padding: 0 8px;
    .tag-list {
      display: flex;
      justify-items: flex-start;
      align-items: center;
      li {
        padding-right: 0;
        &:after {
          content: ", ";
          padding-right: 8px;
        }
        &:last-child:after {
          content: "";
        }
      }
    }
  }
  @media only screen and (min-width: 920px) {
    dl.meta {
      margin: 0;
      display: flex;
      align-items: center;
      justify-items: stretch;
      dd {
        margin: 0 16px 0 8px;
      }
    }
  }
  @media only screen and (max-width: 919px) {
    dl.meta {
      margin: 16px 0 0;
      dt {
        float: left;
        line-height: 36px;
      }
      dd {
        line-height: 36px;
      }
      .tag-list {
        margin: 0;
      }
    }
  }
  .ce-block__content {
    max-width: 720px;
    .image-tool__caption {
      display: none;
    }
  }
}
</style>