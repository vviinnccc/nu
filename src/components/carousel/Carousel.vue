<template>
  <div id="carousel">
    <div class="coverflow">
      <img class="coverflow-item" v-for="item in img" :key="item.id" :src="item.src" :alt="item.id">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        img: [{
            id: 0,
            src: require("@/assets/img/item1.jpg")
          },
          {
            id: 1,
            src: require("@/assets/img/item2.jpg")
          },
          {
            id: 2,
            src: require("@/assets/img/item3.jpg")
          },
          {
            id: 3,
            src: require("@/assets/img/item4.jpg")
          },
          {
            id: 4,
            src: require("@/assets/img/item5.jpg")
          },
          {
            id: 5,
            src: require("@/assets/img/item6.jpg")
          },
          {
            id: 6,
            src: require("@/assets/img/item7.jpg")
          },
          {
            id: 7,
            src: require("@/assets/img/item8.jpg")
          },
          {
            id: 8,
            src: require("@/assets/img/item9.jpg")
          },
          {
            id: 9,
            src: require("@/assets/img/item10.jpg")
          },
          {
            id: 10,
            src: require("@/assets/img/item11.jpg")
          }
        ]
      }
    }
  }
</script>

<style>
  .coverflow {
    position: relative;
    height: calc(100vw / 8);
    width: calc(100vw / 1.04);
  }

  .coverflow * {
    position: absolute;
    opacity: 0;
    /* 居中 */
    left: 50%;
    /* transform: translateX(-50%); */
    /* 宽度高度 */
    height: calc(100vw / 9);
    width: calc(100vw / 9);
    /* 动画 */
    /* animation: ceshi 5s; */
    animation: coverflow 16s;
    animation-iteration-count: infinite;
    /* -webkit-animation: lunbo 10s infinite */
    /* 代表循环 */
    /* alternate */
    /* 保持匀速 */
    /* ; */
  }

  .coverflow-item {
    border-radius: 50%;
    border: 5px solid white;
  }

  .coverflow :nth-child(2) {
    animation-delay: 1s;
  }

  .coverflow :nth-child(3) {
    animation-delay: 2s;
  }

  .coverflow :nth-child(4) {
    animation-delay: 4s;
  }

  .coverflow :nth-child(5) {
    animation-delay: 5s;
  }

  .coverflow :nth-child(6) {
    animation-delay: 7s;
  }

  .coverflow :nth-child(7) {
    animation-delay: 8s;
  }

  .coverflow :nth-child(8) {
    animation-delay: 10s;
  }

  .coverflow :nth-child(9) {
    animation-delay: 11s;
  }

  .coverflow :nth-child(10) {
    animation-delay: 13s;
  }

  .coverflow :nth-child(11) {
    animation-delay: 14s;
  }


  @keyframes coverflow {

    0%,
    5% {
      opacity: 0;
      transform: translateX(70.5%) scale(0.6);
    }

    12.5%,
    17.5% {
      opacity: 0.8;
      transform: translateX(191%) scale(0.6);
    }

    25%,
    30% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }

    37.5%,
    42.5% {
      opacity: 0.8;
      transform: translateX(-291%) scale(0.6);
    }

    0%,
    50% {
      opacity: 0;
      transform: translateX(-170.5%) scale(0.6);
    }

    100% {
      opacity: 0;
      transform: translateX(-170.5%) scale(0.6);
    }
  }
</style>