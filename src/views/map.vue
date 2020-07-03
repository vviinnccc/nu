<template>
  <div id="baidu">
    <h1>{{title}}</h1>
    <baidu-map class="baidu" :center="center" :zoom="zoom" @ready="handler" @click="getClickInfo"
      :scroll-wheel-zoom='true'>
    </baidu-map>
  </div>
</template>

<script>
  export default {
    name: 'TestBaiDu',
    data() {
      return {
        center: {
          lng: 118.03364027951048,
          lat: 36.79616858005696
        },
        zoom: 13,
        title: "找到我们-山东省 --TEL:181053020606"
      }
    },
    methods: {
      handler({
        BMap,
        map
      }) {
        var point = new BMap.Point(118.03364027951048, 36.79616858005696)
        map.centerAndZoom(point, 13)
        var marker = new BMap.Marker(point)
        map.addOverlay(marker)
        var circle = new BMap.Circle(point, 6, {
          strokeColor: 'Red',
          strokeWeight: 6,
          strokeOpacity: 1,
          Color: 'Red',
          fillColor: '#f03'
        })
        map.addOverlay(circle)
      },
      getClickInfo(e) {
        console.log(e.point.lng)
        console.log(e.point.lat)
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
      }
    }
  }
</script>

<style>
  #baidu h1 {
    text-indent: 30px;
    line-height: 50px;
    height: 50px;
    color: aliceblue;
    text-shadow: 1px -1px 1px black;
    background-color: rgb(84, 164, 202);
    font-size: 30px;
  }

  .baidu {
    margin-top: 20px;
    height: 500px;
    width: 800px;
    margin-left: 10%;
  }
</style>