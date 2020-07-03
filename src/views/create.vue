<template>
  <div>
    <div class="islog" v-if="islogin=='2'">
      <h1>写文章</h1>
      <el-input placeholder="请输入标题" v-model="title"></el-input>
      <el-input placeholder="请输入分类" v-model="category"></el-input>
      <editor ref="content"></editor>
      <el-button class="fbbtn" @click="this.cl" type="primary" round>发布</el-button>
    </div>

    <div v-else class="notlog">
      <h1>请营养师登录后进行文章编辑</h1>
    </div>
  </div>
</template>

<script>
  import editor from '@/components/editor/editor';
  import {
    http
  } from '@/http/request';
  export default {
    data() {
      return {
        val: '',
        title: '',
        category: ''
      }
    },
    components: {
      editor
    },
    methods: {
      islog() {
        this.islogin = sessionStorage.getItem("isLogin")
      },
      cl() {
        this.val = this.$refs.content.content
        if (this.val == '') {
          this.$message.error('请输入信息哦')
        } else if (this.title == '') {
          this.$message.error('请输入标题哦')
        } else if (this.category == '') {
          this.$message.error('请输入分类哦')
        } else {
          http({
            url: 'phpback.php',
            method: 'post',
            data: {
              title: this.title,
              text: this.val,
              name: sessionStorage.getItem("username"),
              category: this.category,
              type: 'createarticle'
            }
          }).then(res => {
            if (res.data.recode == 404) {
              this.$message.error('写文章失败')
            } else if (res.data.recode == 200) {
              this.$message({
                message: "感谢您的贡献",
                type: "success"
              })
              this.$router.push('/home')
            } else {
              this.$message.error('recode不存在，检查代码')
            }
          }).catch(err => {
            this.$message.error('未知错误')
          })
        }
      }
    },
    watch: {
      '$route.path'(newval, oldval) {
        this.islog()
      }
    },
    created() {
      this.islog()
    },
  }
</script>

<style>
  .islog {
    margin-top: 5%;
  }

  .islog h1 {
    text-indent: 30px;
    line-height: 50px;
    height: 50px;
    color: aliceblue;
    text-shadow: 1px -1px 1px black;
    background-color: rgb(84, 164, 202);
    font-size: 30px;
  }

  .notlog {
    margin-top: 20%;
    text-align: center;
  }

  .fbbtn {
    margin-top: 1%;
    margin-left: 90%;
  }
</style>