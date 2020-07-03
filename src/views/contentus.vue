<template>
  <div>
    <div class="islog">
      <h1>联系我们</h1>
      <p>营养网的工作人员都是经验丰富的注册营养师。他们可以回答食物和营养问题。可以通过电子邮件提供问题和评论，您将收到对您的询问的答复。
        <br>
        <strong>请注意，我们无法提供营养建议。有关如何获取营养建议的信息，请参见我们的常见问题页面。</strong>
      </p>

      <el-input placeholder="请输入邮箱" v-model="email"></el-input>
      <!-- <div class="email" v-html="this.email"></div> -->
      <editor class="editor" ref="content"></editor>
      <el-button class="fbbtn" @click="this.cl" type="primary" round>提交</el-button>
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
        email: ''
      }
    },
    components: {
      editor
    },
    methods: {
      cl() {
        this.val = this.$refs.content.content
        if (this.email == '') {
          this.$message.error("请输入邮箱")
        } else if (this.val == '') {
          this.$message.error("请输入反馈内容")
        } else if (this.val != '' && this.email != '') {
          http({
            url: 'phpback.php',
            method: 'post',
            data: {
              email: this.email,
              text: this.val,
              type: 'contentus'
            }
          }).then(res => {
            if (res.data.recode == 404) {
              this.$message.error('反馈失败')
            } else if (res.data.recode == 200) {
              this.$message({
                message: "感谢您的反馈",
                type: "success"
              })
              this.$router.push('/home')
            } else {
              this.$message.error('recode不存在，检查代码')
            }
          }).catch(err => {
            this.$message.error('未知错误')
          })
        } else {
          this.$message.error("反馈失败")
        }
      }
    }
  }
</script>

<style>
  .editor {
    margin-top: 5px;
  }

  .email {
    margin-left: 15px;
  }

  .islog {
    margin-top: 5%;
  }

  .fbbtn {
    margin-top: 1%;
    margin-left: 90%;
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
</style>