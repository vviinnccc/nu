<template>
  <div id="nav-bar-left">
    <h2>按主题浏览</h2>
    <el-menu  :default-active="$route.path" unique-opened router class="el-menu-vertical-demo">
      <el-menu-item index="/about">
        <i class="el-icon-location"></i>
        <span>关于我们</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>适用人群</span>
        </template>
        <el-menu-item index="/list/infants">婴幼儿</el-menu-item>
        <el-menu-item index="/list/toddlers">幼儿</el-menu-item>
        <el-menu-item index="/list/children">孩童</el-menu-item>
        <el-menu-item index="/list/teens">青少年</el-menu-item>
        <el-menu-item index="/list/men">成年男士</el-menu-item>
        <el-menu-item index="/list/women">成年女士</el-menu-item>
        <el-menu-item index="/list/old">老年人</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>健康体重</span>
        </template>
        <el-menu-item index="/bmi">BMI体重计算器</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>饮食与健康状况</span>
        </template>
        <el-menu-item index="/echarthot">卡路里热量表</el-menu-item>
      </el-submenu>
      <el-submenu index="/list/">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>购物、烹饪和饮食安全</span>
        </template>
        <el-menu-item index="/home">食品标签</el-menu-item>
        <el-menu-item index="/list/recipe">菜谱</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-fork-spoon"></i>
          <span>食物里有什么</span>
        </template>
        <el-menu-item index="/list/carbohydrates">碳水化合物</el-menu-item>
        <el-menu-item index="/list/fats">脂肪类</el-menu-item>
        <el-menu-item index="/list/fiber">纤维</el-menu-item>
        <el-menu-item index="/list/foodadd">食品添加剂</el-menu-item>
        <el-menu-item index="/list/phytonutrients">植物营养素</el-menu-item>
        <el-menu-item index="/list/proteins">蛋白质类</el-menu-item>
        <el-menu-item index="/list/salt">盐和钠</el-menu-item>
        <el-menu-item index="/list/vitamin">维生素和矿物质</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavBarLeft',
    methods: {}
  }
</script>

<style>
  nav-bar-left h2 {
    text-indent: 30px;
    line-height: 50px;
    height: 50px;
    font-size: 30px;
    /* text-align: center; */
  }
</style>