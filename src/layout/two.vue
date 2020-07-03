<template>
  <div id="two">

    <el-container>
      <img class="toppic" src="@/assets/img/top-pic.jpg" alt="pic">
    </el-container>

    <el-container class="break">
      <break></break>
    </el-container>

    <el-container class="container">
      <el-aside width="20%">
        <nav-bar-left></nav-bar-left>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import NavBarLeft from '@/components/navbarLeft/NavBarLeft'
  import Break from '@/components/break/break'

  export default {
    name: 'two',
    components: {
      NavBarLeft,
      Break
    }
  }
</script>

<style>
  .toppic {
    width: 100%;
    height: 250px;
  }

  .el-aside {
    margin-left: 10%;
    margin-top: 100px;
  }

  .break {
    background-color: #F5F5F5;
    height: 25px;
  }

  .container {
    margin-right: 10%;
  }

  #two .el-main {
    margin-left: 5%;
  }
</style>