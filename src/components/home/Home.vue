<template>
  <div id="home">
    <carousel></carousel>
    <el-row>
      <el-col :span="16" :offset="4">
        <p class="bigp">营养网是获取有关食品，健康饮食，体育锻炼和食品安全的可靠资源的门户。
          查找具有人民政府，非政府组织和大学在食品和人类营养方面专业知识的信息的链接，以帮助您做出健康的饮食选择。</p>
      </el-col>
    </el-row>

    <el-row>
      <h1>特色资源</h1>
    </el-row>

    <el-row>
      <el-col :span="18" :offset="3">
        <el-divider></el-divider>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="5">
        <img src="@/assets/img/item1.jpg" alt="">
        <h3><strong><a href="/about">关于我们</a></strong></h3>
        <p>提供本网站的基本信息，地址、电话等等。</p>
      </el-col>
      <el-col :span="4" :offset="1">
        <img src="@/assets/img/item2.jpg" alt="">
        <h3><strong><a href="/list/recipe">菜谱</a></strong></h3>
        <p>为您和您的家人发现数百种美味，健康，预算友好的食谱。</p>
      </el-col>
      <el-col :span="4" :offset="1">
        <img src="@/assets/img/item3.jpg" alt="">
        <h3><strong><a href="/bmi">健康体重</a></strong></h3>
        <p>查找成功减肥的策略，有关流行饮食的知识等。</p>
      </el-col>
    </el-row>

    <el-row>
      <h1>当下热门</h1>
    </el-row>

    <el-row>
      <el-col :span="18" :offset="3">
        <el-divider></el-divider>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="3" :offset="5">
        <img src="@/assets/img/item4.jpg" alt="">
        <h3><strong><a href="/echarthot">历史饮食指导</a></strong></h3>
      </el-col>
      <el-col :span="4">
        <img src="@/assets/img/item5.jpg" alt="">
        <h3><strong><a href="/map">找到我们</a></strong></h3>
      </el-col>
      <el-col :span="4">
        <img src="@/assets/img/item6.jpg" alt="">
        <h3><strong><a href="/list/infants">婴幼儿饮食</a></strong></h3>
      </el-col>
      <el-col :span="3">
        <img src="@/assets/img/item7.jpg" alt="">
        <h3><strong><a href="/list/men">成年男士</a></strong></h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Carousel from '../carousel/Carousel';
  export default {
    name: 'Home',
    components: {
      Carousel
    }
  }
</script>

<style>
  .el-row {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #377BB5;
  }

  a:visited {
    color: #377BB5;
  }

  .bigp {
    font-size: 20px;
  }

  h1 {
    font-size: 30px;
  }

</style>