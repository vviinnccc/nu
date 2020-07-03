<template>
  <div id="login">
    <el-row class="logrow">
      <el-col :span="8" :offset="4">
        <el-image :src="src"></el-image>
      </el-col>
      <el-col class="logcol" :span="6" :offset="1">

        <div class="logbtn">
          <a :class="{'active':isActive==1}" href="javascript:void(0);" @click="showForm(1)"><strong>用户登录</strong></a>
          <el-divider direction="vertical"></el-divider>
          <a :class="{'active':isActive==2}" href="javascript:void(0);" @click="showForm(2)"><strong>用户注册</strong></a>
          <el-divider direction="vertical"></el-divider>
          <a :class="{'active':isActive==3}" href="javascript:void(0);" @click="showForm(3)"><strong>营养师登录</strong></a>
          <el-divider direction="vertical"></el-divider>
          <a :class="{'active':isActive==4}" href="javascript:void(0);" @click="showForm(4)"><strong>营养师注册</strong></a>
        </div>

        <div v-if="show1">
          <el-form label-width="40px" class="logRuleForm">
            <el-form-item>
              <el-input placeholder="账号" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="密码" type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width:84%;" placeholder="验证码" v-model="user.verification"></el-input>
              <el-tag @click="createCode" type="success">{{checkCode}}</el-tag>
            </el-form-item>
          </el-form>
          <el-row class="logbtn">
            <el-button @click="userlog" class="btntype"><strong>登录</strong></el-button>
          </el-row>
        </div>

        <div v-if="show2">
          <el-form label-width="40px" class="logRuleForm">
            <el-form-item>
              <el-input placeholder="账号" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="密码" type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请重复输入密码" type="password" v-model="user.repassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="邮箱" v-model="user.email"></el-input>
            </el-form-item>
          </el-form>
          <el-row class="logbtn">
            <el-button @click="uregistered" class="btntype"><strong>注册</strong></el-button>
          </el-row>
        </div>

        <div v-if="show3">
          <el-form label-width="40px" class="logRuleForm">
            <el-form-item>
              <el-input placeholder="营养师账号" v-model="dietitian.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="密码" type="password" v-model="dietitian.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width:84%;" placeholder="验证码" v-model="dietitian.verification"></el-input>
              <el-tag @click="createCode" type="success">{{checkCode}}</el-tag>
            </el-form-item>
          </el-form>
          <el-row class="logbtn">
            <el-button @click="dietitianlogin" class="btntype"><strong>营养师登录</strong></el-button>
          </el-row>
        </div>

        <div v-if="show4">
          <el-form label-width="40px" class="logRuleForm">
            <el-form-item>
              <el-input placeholder="姓名" v-model="dietitian.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="营养师编号" v-model="dietitian.number"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="密码" type="password" v-model="dietitian.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="邮箱" v-model="dietitian.email"></el-input>
            </el-form-item>
          </el-form>
          <el-row class="logbtn">
            <el-button @click="dietitianregistered" class="btntype"><strong>申请注册</strong></el-button>
          </el-row>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    http
  } from '@/http/request';

  export default {
    name: 'Login',
    data() {
      return {
        isActive: 1,
        show1: true,
        show2: false,
        show3: false,
        show4: false,
        checkCode: '',
        src: require('@/assets/img/log.jpg'),
        user: {
          username: '',
          password: '',
          repassword: '',
          email: '',
          verification: ''
        },
        dietitian: {
          name: '',
          password: '',
          number: '',
          email: '',
          verification: ''
        }
      };
    },
    mounted() {
      this.createCode()
    },
    methods: {
      createCode() {
        let code = "";
        const codeLength = 4; //验证码的长度  
        const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
          'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (let i = 0; i < codeLength; i++) {
          let index = Math.floor(Math.random() * 36)
          code += random[index]
        }
        this.checkCode = code
      },
      showForm(item) {
        if (item == 1) {
          this.createCode()
          this.isActive = 1
          console.log("item1")
          this.show1 = true
          this.show2 = false
          this.show3 = false
          this.show4 = false
        } else if (item == 2) {
          this.createCode()
          this.isActive = 2
          console.log("item2");
          this.show1 = false
          this.show2 = true
          this.show3 = false
          this.show4 = false
        } else if (item == 3) {
          this.createCode()
          this.isActive = 3
          console.log("item3");
          this.show1 = false
          this.show2 = false
          this.show3 = true
          this.show4 = false
        } else if (item == 4) {
          this.createCode()
          this.isActive = 4
          console.log("item4");
          this.show1 = false
          this.show2 = false
          this.show3 = false
          this.show4 = true
        }
      },
      userlog() {
        if (this.user.username == '') {
          this.$message({
            message: '请输入您的账号哦',
            type: 'warning'
          })
          this.createCode()
        } else if (this.user.password == '') {
          this.$message({
            message: '请输入您的密码哦',
            type: 'warning'
          })
          this.createCode()
        } else if (this.user.verification == '') {
          this.$message({
            message: '请输入您的验证码哦',
            type: 'warning'
          })
          this.createCode()
        } else if (this.user.username != '' && this.user.password != '' && this.user.verification != '') {
          if (this.checkCode == this.user.verification) {
            http({
              url: 'phpback.php',
              method: 'post',
              data: {
                username: this.user.username,
                password: this.user.password,
                type: 'userlogin'
              }
            }).then(res => {
              if (res.data.recode == 401) {
                this.createCode()
                this.$message.error('登录失败')
              } else if (res.data.recode == 200) {
                // 登录验证成功存到session里
                window.sessionStorage.setItem("isLogin", res.data.type)
                window.sessionStorage.setItem("username", this.user.username)
                // 跳转路由
                this.$message({
                  message: "欢迎您: " + this.user.username,
                  type: "success"
                })
                this.$router.replace('/home')
                // location.relokad()
              } else {
                this.$message.error('recode不存在，检查代码')
              }
            }).catch(err => {
              this.$message.error('未知错误')
            })
          } else {
            this.$message.error('验证码错误，请检查大小写')
            this.createCode()
          }
        } else {
          this.$message.error('未知错误，请联系管理员！！')
          this.createCode()
        }
      },
      uregistered() {
        if (this.user.username == '') {
          this.$message({
            message: '请输入您的账号哦',
            type: 'warning'
          })
        } else if (this.user.password == '') {
          this.$message({
            message: '请输入您的密码哦',
            type: 'warning'
          })
        } else if (this.user.repassword == '') {
          this.$message({
            message: '请再次输入密码哦',
            type: 'warning'
          })
        } else if (this.user.email == '') {
          this.$message({
            message: '请输入您的邮箱哦',
            type: 'warning'
          })
        } else if (this.user.username != '' && this.user.password != '' && this.user.repassword != '' && this.user
          .email != '') {
          if (this.user.password == this.user.repassword) {
            http({
              url: 'phpback.php',
              method: 'post',
              data: {
                username: this.user.username,
                password: this.user.password,
                email: this.user.email,
                type: 'userregistered'
              }
            }).then(res => {
              console.log(res);
              if (res.data.recode == 401) {
                this.$message.error('用户名重复，请重新输入')
              } else if (res.data.recode == 404) {
                this.$message.error('注册失败')
              } else if (res.data.recode == 200) {
                // 登录验证成功存到session里
                window.sessionStorage.setItem("isLogin", res.data.type)
                window.sessionStorage.setItem("username", this.user.username)
                // 跳转路由
                this.$message({
                  message: "欢迎您: " + this.user.username,
                  type: "success"
                })
                this.$router.replace('/home')
                // location.reload()
              } else {
                this.$message.error('recode不存在，检查代码')
              }
            }).catch(err => {
              this.$message.error('未知错误')
            })
          } else {
            this.$message({
              message: '密码两次输入不一致，请检查一下哦',
              type: 'warning'
            })
          }
        } else {
          this.$message.error('未知错误，请联系管理员！！')
        }
      },
      dietitianlogin() {
        if (this.dietitian.name == '') {
          this.$message({
            message: '请输入营养师的账号哦',
            type: 'warning'
          })
          this.createCode()
        } else if (this.dietitian.password == '') {
          this.$message({
            message: '请输入营养师的密码哦',
            type: 'warning'
          })
          this.createCode()
        } else if (this.dietitian.verification == '') {
          this.$message({
            message: '请输入营养师的验证码哦',
            type: 'warning'
          })
          this.createCode()
        } else if (this.dietitian.name != '' && this.dietitian.password != '' && this.dietitian.verification != '') {
          if (this.checkCode == this.dietitian.verification) {
            http({
              url: 'phpback.php',
              method: 'post',
              data: {
                name: this.dietitian.name,
                password: this.dietitian.password,
                type: 'dietitianlogin'
              }
            }).then(res => {
              if (res.data.recode == 404) {
                console.log(res);
                
                this.createCode()
                this.$message.error('登录失败')
              } else if (res.data.recode == 200) {
                // 登录验证成功存到session里
                window.sessionStorage.setItem("isLogin", res.data.type)
                window.sessionStorage.setItem("username", this.dietitian.name)
                // 跳转路由
                this.$message({
                  message: "欢迎您: " + this.dietitian.name + "-营养师",
                  type: "success"
                })
                this.$router.replace('/home')
                // location.relokad()
              } else {
                this.$message.error('recode不存在，检查代码')
              }
            }).catch(err => {
              this.$message.error('未知错误')
            })
          } else {
            this.$message.error('验证码错误，请检查大小写')
            this.createCode()
          }
        } else {
          this.$message.error('未知错误，请联系管理员！！')
          this.createCode()
        }
      },
      dietitianregistered() {
        if (this.dietitian.name == '') {
          this.$message({
            message: '请输入您的姓名哦',
            type: 'warning'
          })
        } else if (this.dietitian.number == '') {
          this.$message({
            message: '请输入您的营养师编号哦',
            type: 'warning'
          })
        } else if (this.dietitian.password == '') {
          this.$message({
            message: '请输入您的密码哦',
            type: 'warning'
          })
        } else if (this.dietitian.email == '') {
          this.$message({
            message: '请输入您的邮箱哦',
            type: 'warning'
          })
        } else if (this.dietitian.name != '' && this.dietitian.password != '' && this.dietitian.number != '' && this
          .dietitian
          .email != '') {
          http({
            url: 'phpback.php',
            method: 'post',
            data: {
              name: this.dietitian.name,
              password: this.dietitian.password,
              email: this.dietitian.email,
              number: this.dietitian.number,
              type: 'dietitianregistered'
            }
          }).then(res => {
            console.log(res);
            if (res.data.recode == 404) {
              this.$message.error('注册失败')
            } else if (res.data.recode == 200) {
              // 登录验证成功存到session里
              window.sessionStorage.setItem("isLogin", res.data.type)
              window.sessionStorage.setItem("username", this.dietitian.name)
              // 跳转路由
              this.$message({
                message: "欢迎您: " + this.dietitian.name + "-营养师",
                type: "success"
              })
              this.$router.replace('/home')
              // location.reload()
            } else {
              this.$message.error('recode不存在，检查代码')
            }
          }).catch(err => {
            this.$message.error('未知错误')
          })
        } else {
          this.$message.error('未知错误，请联系管理员！！')
        }
      }
    },
  }
</script>

<style>
  .logrow {
    margin-top: 150px;
  }

  .logcol {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    height: 47vh;
  }

  .logRuleForm {
    margin-top: 20px;
    margin-right: 40px;
  }

  .el-divider {
    background-color: black;
  }

  .logbtn {
    text-align: center;
    margin-top: 30px;
    margin-left: 40px;
    margin-right: 40px;
    /*  */
  }

  .active {
    color: #388561 !important;
  }

  .logbtn a,
  .logbtn a:link,
  .logbtn a:hover,
  .logbtn a:visited {
    color: #535965;
    text-decoration: none;
  }


  .btntype,
  .btntype:hover,
  .btntype:active,
  .btntype:focus {
    width: 100%;
    background-color: #388561;
    font-size: 15px;
    color: cornsilk;
  }


  .el-tag {
    width: 16%;
    height: 40px;
    line-height: 39px;
  }



  /* a {
    font-size: 16px
  } */

  /* 未访问：蓝色、无下划线 */
  /* a:link {
    color: blue;
    text-decoration: none;
  } */

  /* 激活：红色  */
  /* a:active: {
    color: red;
  } */

  /* 已访问：紫色、无下划线  */
  /* a:visited {
    color: purple;
    text-decoration: none;
  } */

  /* 鼠标移近：红色、下划线  */
  /* a:hover {
    color: red;
    text-decoration: underline;
  } */
</style>