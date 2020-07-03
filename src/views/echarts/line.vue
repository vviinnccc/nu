<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    data: function () {
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [{
              '日期': '1月1日',
              '访问用户': 1393
            },
            {
              '日期': '1月2日',
              '访问用户': 3530
            },
            {
              '日期': '1月3日',
              '访问用户': 2923
            },
            {
              '日期': '1月4日',
              '访问用户': 1723
            },
            {
              '日期': '1月5日',
              '访问用户': 3792
            },
            {
              '日期': '1月6日',
              '访问用户': 4593
            }
          ]
        }
      }
    }
  }
</script>

<style>
</style>