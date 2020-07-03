<template>
  <div id="nav-bar-bottom">
    <p>特别声明：本站内容仅供参考，不作为诊断及医疗依据。本站如有转载或引用文章涉及版权问题请速与我们联系。</p>
    <a href="/about">关于我们</a>
    <a href="/contentus">联系我们</a>
    <a href="/privacy">隐私政策</a>
    <p>Copyright@ 2008-2020 营养网 版权所有</p>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    margin-bottom: 30px;
  }

  #nav-bar-bottom {
    background-color: #F9F9F9;
    text-align: center;
    /* 置底 */
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    /* 阴影 */
    /* box-shadow: 0 -2px 1px rgba(100, 100, 100, .2); */
  }

  #nav-bar-bottom p {
    bottom: 0;
    margin: 0;
    color: #9B9B9B;
  }

  #nav-bar-bottom a {
    margin-right: 2px;
    margin-left: 2px;
    text-decoration: none;
    color: #377BB5;
  }

  #nav-bar-bottom a:visited {
    color: #377BB5;
  }
</style>