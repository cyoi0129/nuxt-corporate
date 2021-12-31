<template>
  <!-- Slider -->
  <div id="slider">
    <div class="slides">
      <div class="slider">
        <div class="legend"></div>
        <div class="content">
          <div class="content-txt">
            <h1>Lorem ipsum dolor</h1>
            <h2>
              Nam ultrices pellentesque facilisis. In semper tellus mollis nisl
              pulvinar vitae vulputate lorem consequat. Fusce odio tortor,
              pretium sit amet auctor ut, ultrices vel nibh.
            </h2>
          </div>
        </div>
        <div class="image">
          <img src="../static/slider1.jpg" />
        </div>
      </div>
      <div class="slider">
        <div class="legend"></div>
        <div class="content">
          <div class="content-txt">
            <h1>Lorem ipsum dolor</h1>
            <h2>
              Nam ultrices pellentesque facilisis. In semper tellus mollis nisl
              pulvinar vitae vulputate lorem consequat. Fusce odio tortor,
              pretium sit amet auctor ut, ultrices vel nibh.
            </h2>
          </div>
        </div>
        <div class="image">
          <img src="../static/slider2.jpg" />
        </div>
      </div>
      <div class="slider">
        <div class="legend"></div>
        <div class="content">
          <div class="content-txt">
            <h1>Lorem ipsum dolor</h1>
            <h2>
              Nam ultrices pellentesque facilisis. In semper tellus mollis nisl
              pulvinar vitae vulputate lorem consequat. Fusce odio tortor,
              pretium sit amet auctor ut, ultrices vel nibh.
            </h2>
          </div>
        </div>
        <div class="image">
          <img src="../static/slider3.jpg" />
        </div>
      </div>
      <div class="slider">
        <div class="legend"></div>
        <div class="content">
          <div class="content-txt">
            <h1>Lorem ipsum dolor</h1>
            <h2>
              Nam ultrices pellentesque facilisis. In semper tellus mollis nisl
              pulvinar vitae vulputate lorem consequat. Fusce odio tortor,
              pretium sit amet auctor ut, ultrices vel nibh.
            </h2>
          </div>
        </div>
        <div class="image">
          <img src="../static/slider4.jpg" />
        </div>
      </div>
    </div>
    <div class="switch">
      <ul>
        <li>
          <div class="on"></div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* Slider */
#slider {
  width: 100%;
  //   height: 100vh;
  height: 480px;
  position: relative;
  overflow: hidden;
  .slides {
    width: 400%;
    height: 100%;
    position: relative;
    -webkit-animation: slide 30s infinite;
    -moz-animation: slide 30s infinite;
    animation: slide 30s infinite;
    .slider {
      width: 25%;
      height: 100%;
      float: left;
      position: relative;
      z-index: 1;
      overflow: hidden;
      .image {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
      }
      /* Legend */
      .legend {
        border: 500px solid transparent;
        border-left: 800px solid rgba(52, 73, 94, 0.7);
        border-bottom: 0;
        position: absolute;
        bottom: 0;
      }
      /* Contents */
      .content {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        .content-txt {
          width: 400px;
          height: 150px;
          float: left;
          position: relative;
          top: 300px;
          -webkit-animation: content-s 7.5s infinite;
          -moz-animation: content-s 7.5s infinite;
          animation: content-s 7.5s infinite;
          h1 {
            font-family: Arial;
            text-transform: uppercase;
            font-size: 24px;
            color: #fff;
            text-align: left;
            margin-left: 30px;
            padding-bottom: 10px;
          }
          h2 {
            font-family: arial;
            font-weight: normal;
            font-size: 14px;
            font-style: italic;
            color: #fff;
            text-align: left;
            margin-left: 30px;
          }
        }
      }
    }
  }
  /* Switch */
  .switch {
    width: 120px;
    height: 10px;
    position: absolute;
    bottom: 50px;
    z-index: 2;
    left: calc(50% - 30px);
    > ul {
      overflow: hidden;
      list-style: none;
      > li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #efefef;
        float: left;
        margin-right: 5px;
        cursor: pointer;
        div.on {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #10b981;
          position: relative;
          -webkit-animation: on 30s infinite;
          -moz-animation: on 30s infinite;
          animation: on 30s infinite;
        }
      }
    }
  }
}
/* Animation */
@keyframes load {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}

@-webkit-keyframes slide {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: -100%;
  }
  46% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  71% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  96% {
    margin-left: -300%;
  }
}
@-moz-keyframes slide {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: -100%;
  }
  46% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  71% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  96% {
    margin-left: -300%;
  }
}
@keyframes slide {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: -100%;
  }
  46% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  71% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  96% {
    margin-left: -300%;
  }
}

@-webkit-keyframes content-s {
  0% {
    left: -420px;
  }
  10% {
    left: 0px;
  }
  30% {
    left: 0px;
  }
  40% {
    left: 0px;
  }
  50% {
    left: 0px;
  }
  60% {
    left: 0px;
  }
  70% {
    left: 0;
  }
  80% {
    left: -420px;
  }
  90% {
    left: -420px;
  }
  100% {
    left: -420px;
  }
}
@-moz-keyframes content-s {
  0% {
    left: -420px;
  }
  10% {
    left: 0px;
  }
  30% {
    left: 0px;
  }
  40% {
    left: 0px;
  }
  50% {
    left: 0px;
  }
  60% {
    left: 0px;
  }
  70% {
    left: 0;
  }
  80% {
    left: -420px;
  }
  90% {
    left: -420px;
  }
  100% {
    left: -420px;
  }
}
@keyframes content-s {
  0% {
    left: -420px;
  }
  10% {
    left: 20px;
  }
  15% {
    left: 0px;
  }
  30% {
    left: 0px;
  }
  40% {
    left: 0px;
  }
  50% {
    left: 0px;
  }
  60% {
    left: 0px;
  }
  70% {
    left: 0;
  }
  80% {
    left: -420px;
  }
  90% {
    left: -420px;
  }
  100% {
    left: -420px;
  }
}

@-webkit-keyframes on {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: 15px;
  }
  46% {
    margin-left: 15px;
  }
  50% {
    margin-left: 30px;
  }
  71% {
    margin-left: 30px;
  }
  75% {
    margin-left: 45px;
  }
  96% {
    margin-left: 45px;
  }
}

@-moz-keyframes on {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: 15px;
  }
  46% {
    margin-left: 15px;
  }
  50% {
    margin-left: 30px;
  }
  71% {
    margin-left: 30px;
  }
  75% {
    margin-left: 45px;
  }
  96% {
    margin-left: 45px;
  }
}

@keyframes on {
  0%,
  100% {
    margin-left: 0%;
  }
  21% {
    margin-left: 0%;
  }
  25% {
    margin-left: 15px;
  }
  46% {
    margin-left: 15px;
  }
  50% {
    margin-left: 30px;
  }
  71% {
    margin-left: 30px;
  }
  75% {
    margin-left: 45px;
  }
  96% {
    margin-left: 45px;
  }
}
</style>