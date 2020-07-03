<template>
  <div id="three">
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main class="threemain">
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </el-main>
      <nav-bar-bottom></nav-bar-bottom>
    </el-container>
  </div>
</template>

<script>
  import NavBar from '../components/navbar/NavBar';
  import NavBarBottom from '../components/navbarBottom/NavBarBottom';

  export default {
    name: 'Three',
    components: {
      NavBar,
      NavBarBottom
    },
    // watch: {
    //   $route() {
    //     console.log(this.$route.meta);
    //   }
    // }
  }
</script>

<style>
  .el-header,
  .el-footer,
  .el-main {
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
  .threemain {
    margin-bottom: 200px;
  }
</style>