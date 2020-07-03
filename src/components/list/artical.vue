<template>
  <div id="artical">
    <h1>{{title}}</h1>
    <div class="short">
      {{short}}
      <div class="author">
        {{author}} - {{time}}
      </div>
    </div>
    <div v-html="value">
    </div>
  </div>
</template>

<script>
  import {
    http
  } from '@/http/request';

  export default {
    name: 'artical',
    data() {
      return {
        short: '',
        title: '',
        author: '',
        time: '',
        value: ''
      }
    },
    created() {
      this.getdata()
      document.title = this.$route.params.id
      console.log("artical");
      
    },
    methods: {
      getdata() {
        http({
          url: 'phpback.php',
          method: 'post',
          data: {
            title: this.$route.params.id,
            type: 'artical'
          }
        }).then(res => {
          console.log(res.data);
          console.log(res.data[0].title);
          this.author = res.data[0].author
          this.short = res.data[0].short
          this.time = res.data[0].time
          this.title = res.data[0].title
          this.value = res.data[0].value
        }).catch(err => {
          this.$message.error('未知错误')
        })
      }
    },
  }
</script>

<style>
  #artical h1 {
    text-indent: 30px;
    line-height: 50px;
    height: 50px;
    color: aliceblue;
    text-shadow: 1px -1px 1px black;
    background-color: rgb(84, 164, 202);
    font-size: 30px;
    margin-bottom: 0;
  }

  .short {
    background-color: #F8F8F8;
    text-align: left;
    font-style: italic ;
    color: #BEBEBE;
  }

  .author {
    text-align: right;
    margin-right: 5px;
  }
</style>