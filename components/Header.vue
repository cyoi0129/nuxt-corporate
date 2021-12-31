<template>
  <header>
    <div class="logo-area">
      <nuxt-link to="/">
        <p class="logo">
          <img
            src="../static/icon.png"
            alt="Nuxt Corporate Logo"
            width="48"
            height="auto"
          />
        </p>
        <p class="site-name">Nuxt Corporate</p>
      </nuxt-link>
    </div>
    <div class="sp-menu" @click="toggleMenu()">
      <MenuIcon />
    </div>
    <nav :class="{ active: show }">
      <div class="close-menu" @click="toggleMenu()">
        <CloseIcon />
      </div>
      <ul>
        <li v-for="item in menu" :key="item.name">
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
          <ul v-if="hasChildren(item)">
            <li v-for="sub in item.children" :key="sub.name">
              <nuxt-link :to="sub.path">{{ sub.name }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      show: false,
      menu: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
          children: [
            {
              name: "Vision",
              path: "#",
            },
            {
              name: "Message",
              path: "#",
            },
            {
              name: "History",
              path: "#",
            },
          ],
        },
        {
          name: "Service",
          path: "/service",
          children: [
            {
              name: "Marketing",
              path: "#",
            },
            {
              name: "Design",
              path: "#",
            },
            {
              name: "Development",
              path: "#",
            },
          ],
        },
        {
          name: "Information",
          path: "/info",
          children: [
            {
              name: "News",
              path: "#",
            },
            {
              name: "IR",
              path: "#",
            },
          ],
        },
        {
          name: "Recult",
          path: "/recult",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
  methods: {
    hasChildren(item: Object) {
      return item.hasOwnProperty("children");
    },
    toggleMenu() {
      this.show = !this.show;
    },
  },
});
</script>
<style lang="scss">
header {
  background: #fff;
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  .logo-area {
    padding-left: 16px;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media only screen and (min-width: 920px) {
    nav {
      .close-menu {
        display: none;
      }
      > ul {
        display: flex;
        > li {
          width: 120px;
          text-align: center;
          position: relative;
          > ul {
            display: none;
            position: absolute;
            top: 42px;
            background: rgba(0, 0, 0, 0.6);
            width: 120px;
            li {
              line-height: 24px;
              padding: 8px 0;
              a {
                color: #fff;
                &:hover {
                  color: #10b981;
                }
              }
            }
          }
          &:hover a + ul {
            display: block;
          }
          > a {
            padding: 8px 8px 10px;
            display: block;
            &:hover {
              border-bottom: 2px solid #10b981;
              padding-bottom: 8px;
            }
          }
        }
      }
    }
    .sp-menu {
      display: none;
    }
  }
  @media only screen and (max-width: 919px) {
    nav {
      display: none;
      &.active {
        display: block;
        opacity: 0;
        animation: SlideIn .4s forwards;
        @keyframes SlideIn {
          0% {
            opacity: 0;
            transform: translateX(64px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        width: 80%;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        .close-menu {
          text-align: right;
          padding: 16px;
        }
        > ul {
          margin-top: 0;
          > li {
            padding: 16px;
            border-bottom: 1px solid #fff;
            > ul {
              display: none;
            }
            a {
              color: #fff;
              display: block;
            }
          }
        }
      }
    }
    .sp-menu {
      display: block;
      padding-right: 16px;
      width: 24px;
    }
  }
}
</style>