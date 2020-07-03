<template>
  <div id="break">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if='breadcrumb1' :to="{path: this.$route.meta.path}">{{breadcrumb1}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{breadcrumb2}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'break',
    data() {
      return {
        breadcrumb1: '',
        breadcrumb2: '',
        breadcrumb3: ''
      }
    },
    methods: {
      setBread() {
        this.breadcrumb1 = this.$route.meta.parentTitle
        this.breadcrumb2 = this.$route.meta.title
      }
    },
    created() {
      this.setBread()
    },
    watch: {
      $route: {
        handler(newRouter) {
          this.setBread()
        }
      }
    }
  }
</script>

<style>
  #break {
    margin-top: 5px;
    margin-left: 30%;
  }
  .el-breadcrumb {
    font-size: 15px;
  }
</style>