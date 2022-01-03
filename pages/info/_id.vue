<template>
  <div class="article">
    <h1>{{ post.title }}</h1>
    <dl class="meta">
      <dt><CategoryIcon /></dt>
      <dd>{{ post.category }}</dd>
      <dt><TagIcon /></dt>
      <dd>
        <ul class="tag-list">
          <li v-for="item in post.tag" :key="item">
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
    <article id="editorjs" v-html="post.html"></article>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { postPageData, ElementItem, headerItem, paragraphItem, listItem, imageItem } from "~/store/types";
export default Vue.extend({
  name: "Article",
  computed: {
    post() {
      const id: string = this.$route.params.id;
      const postData: postPageData = this.$store.getters.getPost(id);
      let result: string = '';
      postData.content.blocks.forEach((item: ElementItem) => {
        switch (item.type) {
          case "header":
            result += `<h3>${(item.data as headerItem).text}</h3>`;
            break;
          case "paragraph":
            result += `<p>${(item.data as paragraphItem).text}</p>`;
            break;
          case "list":
            result += '<ul>';
            (item.data as listItem).items.forEach( (itemTxt: string) => {
              result += `<li>${itemTxt}</li>`;
            })
            result += '</ul>'
            break;
          case "image":
            result += `<p><img src="${(item.data as imageItem).file.url}" alt="${(item.data as imageItem).caption}"></p>`;
            break;
          default:
        }
      });
      postData.html = result;
      return postData;
    },
  },
});
</script>
<style lang="scss">
.article {
  max-width: 800px;
  margin: 16px auto;
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
          margin-left: -4px;
          margin-right: 4px;
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
  #editorjs {
    max-width: 720px;
    padding: 0 8px;
    a {
      text-decoration: underline;
    }
  }
}
</style>