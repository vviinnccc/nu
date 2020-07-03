<template>
  <div id="nav-bar">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" menu-trigger="hover" router
      background-color="#222222" text-color="#9D9D9D" active-text-color="#F7F7F7">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item v-if="$route.path!='/login'" index="/about">关于</el-menu-item>
      <el-menu-item v-if="$route.path!='/login'" index="/list/recipe">菜谱</el-menu-item>
      <el-menu-item v-if="$route.path!='/login'" index="/questions">常见问题</el-menu-item>
      <el-menu-item v-if="$route.path!='/login'" index="/contentus">联系我们</el-menu-item>
      <el-menu-item v-if="$route.path!='/login'" index="/map">找到我们</el-menu-item>
      <!-- 用户登录 -->
      <el-menu-item v-if="islogin=='1'" class="menu-item-right" @click="drawer = true">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </el-menu-item>
      <!-- 营养师登录 -->
      <el-menu-item v-else-if="islogin=='2'" class="menu-item-right" @click="drawer2 = true">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </el-menu-item>
      <!-- 未登录 -->
      <el-menu-item v-else-if="$route.path!='/login'" index="/login" class="menu-item-right" @click="login">
        <el-avatar>登录</el-avatar>
      </el-menu-item>
    </el-menu>
    <!-- 用户柜子 -->
    <el-drawer :visible.sync="drawer" :with-header="false" size='20%'>
      <el-row class="toprow">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="100"></el-avatar>
        <br><br>
        昵称：{{username}}
        <!-- <el-button type="text" @click="peican"><i class="el-icon-edit"></i>修改</el-button> -->
        <br><br>
        <el-button type="primary" round @click="peicanjiance">本周食材</el-button>
        <br><br>
        <el-button type="primary" @click="jinripeican" round>今日配餐</el-button>
        <br><br>
        <el-button type="info" plain @click="logOut">退出登录</el-button>
      </el-row>
    </el-drawer>
    <!-- 用户配餐无信息 -->
    <el-dialog title="用户配餐" :visible.sync="dialogVisible" width="30%">
      <el-form label-width="80px">
        <el-form-item label="疾病">
          <el-select v-model="value" placeholder="请选择" @change="peican">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="饮食主张">
          <el-radio-group v-model="radio" @change="peican">
            <el-radio label="无肉不欢">无肉不欢</el-radio>
            <el-radio label="素食主义">素食主义</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身高">
          <el-input v-model="shengao" clearable @change="peican">
            <template slot="append">M</template>
          </el-input>
        </el-form-item>
        <el-form-item label="体重">
          <el-input v-model="tizhong" clearable @change="peican">
            <template slot="append">KG</template>
          </el-input>
        </el-form-item>
      </el-form>
      <p>{{ces}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="peicansure">确 认</el-button>
      </span>
    </el-dialog>
    <!-- 用户配餐有信息 -->
    <el-dialog title="用户配餐" :visible.sync="dialogVisible2" width="30%">

      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in activities" :key="index">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>

    </el-dialog>
    <!-- 用户今日配餐 -->
    <el-dialog title="今日配餐" :visible.sync="dialogVisible3" width="30%">
      您患有{{peicanl.jibing}},您是{{peicanl.yinshi}}
      <br><br>
      今日是今年的第{{peicanl.zhouci}}个周,星期{{peicanl.xingqi}}
      <br><br>
      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in activitied" :key="index" :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </el-dialog>
    <!-- 营养师柜子 -->
    <el-drawer :visible.sync="drawer2" :with-header="false" size='20%'>
      <el-row class="toprow">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="100"></el-avatar>
        <br><br>
        营养师：{{username}}
        <br><br>
        <el-button type="primary" round @click="toeditor">写文章</el-button>
        <br><br>
        <el-button type="primary" round @click="toline">查看用户访问量</el-button>
        <br><br>
        <el-button type="info" plain @click="logOut">退出登录</el-button>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
  import {
    http
  } from '@/http/request';

  export default {
    name: 'NavBar',
    data() {
      return {
        drawer: false,
        ces: '',
        drawer2: false,
        islogin: '',
        username: '',
        dialogVisible: false,
        dialogVisible2: false,
        dialogVisible3: false,
        options: [{
          value: '糖尿病',
          label: '糖尿病'
        }, {
          value: '超重与肥胖',
          label: '超重与肥胖'
        }],
        value: '请选择',
        radio: '',
        shengao: '',
        tizhong: '',
        ces2: '蔬菜',
        reverse: true,
        activities: [{
          content: '食材1'
        }, {
          content: '食材2'
        }, {
          content: '食材3'
        }, {
          content: '食材4'
        }, {
          content: '食材5'
        }],
        activitied: [{
          content: '晚餐',
          timestamp: ''
        }, {
          content: '午餐',
          timestamp: ''
        }, {
          content: '早餐',
          timestamp: ''
        }],
        peicanl: {
          yinshi: '',
          zhouci: '',
          jibing: '',
          xingqi: ''
        }
      }
    },
    methods: {
      login() {
        this.$router.push('/login')
      },
      isLogin() {
        this.islogin = sessionStorage.getItem("isLogin")
        this.username = sessionStorage.getItem("username")
      },
      logOut() {
        this.islogin = false
        sessionStorage.clear()
        location.reload()
      },
      toeditor() {
        this.$router.push('/create')
      },
      toline() {
        this.$router.push('/echarfir')
      },
      peican() {
        this.ces = ' 疾病：' + this.value + ' 饮食主义:' + this.radio + ' 身高:' + this.shengao + ' 体重:' + this.tizhong
      },
      // 决定显示那个窗口
      peicanjiance() {
        http({
          url: 'phpback.php',
          method: 'post',
          data: {
            type: 'peican1',
            username: this.username
          }
        }).then(res => {
          if (res.data == '2') {
            this.dialogVisible = true
          } else {
            this.dialogVisible2 = true
            this.activities[0].content = res.data.shiwu1
            this.activities[1].content = res.data.shiwu2
            this.activities[2].content = res.data.shiwu3
            this.activities[3].content = res.data.shiwu4
            this.activities[4].content = res.data.shiwu5
          }
        }).catch(err => {
          this.$message.error('未知错误')
        })
      },
      // 无用户信息
      peicansure() {
        let a = this.value
        let b = this.radio
        let c = this.shengao
        let d = this.tizhong
        if (a == '请选择') {
          this.ces = '请输入疾病信息！'
          return
        }
        if (b == '') {
          this.ces = '请输入您的饮食习惯！'
          return
        }
        if (c == '') {
          this.ces = '请输入您的身高！'
          return
        }
        if (d == '') {
          this.ces = '请输入您的体重！'
          return
        }

        http({
          url: 'phpback.php',
          method: 'post',
          data: {
            type: 'peican2',
            username: this.username,
            jibing: this.value,
            xiguan: this.radio,
            shengao: this.shengao,
            tizhong: this.tizhong
          }
        }).then(res => {
          this.$message({
            message: '再次点击查看配餐信息',
            type: 'success'
          });
          console.log(res.data);
        }).catch(err => {
          this.$message.error('未知错误')
        })
      },
      // 今日配餐
      jinripeican() {
        http({
          url: 'phpback.php',
          method: 'post',
          data: {
            type: 'peican3',
            username: this.username
          }
        }).then(res => {
          this.activitied[2].timestamp = res.data.m
          this.activitied[1].timestamp = res.data.n
          this.activitied[0].timestamp = res.data.e
          this.peicanl.zhouci = res.data.zhouci
          if (res.data.yinshi == '2') {
            this.peicanl.yinshi = '素食者'
          } else if (res.data.yinshi == '1'){
            this.peicanl.yinshi = '肉食者'
          } else {
            this.$message.error('请在本周食材内填写相关信息哦。')
            return
          }
          this.peicanl.xingqi = res.data.xingqi
          this.peicanl.jibing = res.data.jibing
          this.dialogVisible3 = true
        }).catch(err => {
          this.$message.error('未知错误')
        })
      }
    },
    created: function () {
      this.isLogin()
    },
    watch: {
      '$route.path'(newval, oldval) {
        this.isLogin()
      }
    },
  }
</script>

<style>
  .el-menu-item,
  .el-submenu__title {
    font-size: 16px;
  }

  .is-disabled {
    font-size: 15px;
  }

  .menu-item-right {
    float: right !important;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  .toprow {
    margin-top: 50px;
  }

  .el-drawer {
    text-align: center;
  }
</style>