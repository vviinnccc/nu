<template>
  <div id="hot">
    <ve-heatmap :data="chartData"></ve-heatmap>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chartData: {
          columns: ['时间', '食物', '热量'],
          rows: [
            { '时间': '星期一', '食物': '黄金糕', '热量': 1000 },
            { '时间': '星期一', '食物': '双皮奶', '热量': 500 },
            { '时间': '星期二', '食物': '双皮奶', '热量': 400 },
            { '时间': '星期三', '食物': '蚵仔煎', '热量': 800 },
            { '时间': '星期四', '食物': '黄金糕', '热量': 200 },
            { '时间': '星期四', '食物': '北京烤鸭', '热量': 600 },
            { '时间': '星期五', '食物': '龙须面', '热量': 100 },
            { '时间': '星期六', '食物': '双皮奶', '热量': 300 },
            { '时间': '星期天', '食物': '北京烤鸭', '热量': 800 },
          ]
        }
      }
    }
  }
</script>

<style>
</style>