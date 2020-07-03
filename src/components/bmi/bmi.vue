<template>
  <div id="bmi">
    <h1>BMI体重计算器</h1>
    <strong>
      关于体重测试（bmi计算器、bmi指数）
    </strong>
    <p>
      BMI指数（身体质量指数，简称体质指数又称体重指数，英文为Body Mass
      Index，简称BMI），是用体重公斤数除以身高米数平方得出的数字，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。主要用于统计用途，当我们需要比较及分析一个人的体重对于不同高度的人所带来的健康影响时，BMI值是一个中立而可靠的指标。
    </p>
    <div class="bmiinput">
      <el-input class="ten" placeholder="请输入身高" v-model="input1" clearable>
        <template slot="prepend">身高：</template>
        <template slot="append">米</template>
      </el-input>

      <el-input class="ten" placeholder="请输入体重" v-model="input2" clearable>
        <template slot="prepend">体重：</template>
        <template slot="append">KG</template>
      </el-input>

      <el-radio class="ten" v-model="radio" label="1">男</el-radio>
      <el-radio class="ten" v-model="radio" label="2">女</el-radio>

      <el-slider class="ten" v-model="value1"></el-slider>

      <el-button @click="getBMI" type="primary" round>计算您的BMI指数</el-button>
    </div>
    <div class="bmitext" v-if="message">
      {{message}}
    </div>
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
  </div>
</template>

<script>
  export default {
    name: 'BMI',
    data() {
      this.chartSettings = {
        metrics: ['平均BMI', '平均身高', '平均体重'],
        dimension: ['年龄']
      }
      return {
        radio: '1',
        input1: '1.75',
        input2: '60',
        value1: 20,
        message: '',
        chartData: {
          columns: ['年龄', '平均BMI', '平均身高', '平均体重'],
          rows: [
            { '年龄': '17岁以下', '平均BMI': 22.5, '平均身高': 16.3, '平均体重': 55},
            { '年龄': '20-30岁', '平均BMI': 23.5, '平均身高': 17.0, '平均体重': 65},
            { '年龄': '30-40岁', '平均BMI': 24.5, '平均身高': 17.1, '平均体重': 70},
            { '年龄': '40-50岁', '平均BMI': 25.5, '平均身高': 17.2, '平均体重': 69},
            { '年龄': '50-60岁', '平均BMI': 26.5, '平均身高': 17.1, '平均体重': 65},
            { '年龄': '60岁以上', '平均BMI': 27.5, '平均身高': 16.5, '平均体重': 50}
          ]
        }
      }
    },
    methods: {
      getBMI() {
        let mbi = this.input2 / (this.input1 * this.input1)
        let num = mbi.toFixed(2)
        if (this.radio == '1') {
          if (this.value1 <= 17) {
            this.message = "小于17的孩童请在家长的指导下合理的饮食哦"
          } else {
            if (num < 18.5) {
              this.message = "男性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您的体重较轻，请合理饮食增加重量哦"
            }else if (num >= 18.5 && num < 23.9) {
              this.message = "男性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您的体重正常，请继续保持哦"              
            } else if (num >= 23.9 && num <= 27.9) {
              this.message = "男性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您已经超重了，请控制饮食哦"
            } else if (num > 27.9) {
              this.message = "男性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您的体重已经比较危险了，如果超过40请您尽快咨询医生！"
            } else {
              this.message = "男性：请输入正确的年龄与体重哦" 
            }
          }
        } else {
          if (this.value1 <= 17) {
            this.message = "小于17的孩童请在家长的指导下合理的饮食哦"
          } else {
            if (num < 18.5) {
              this.message = "女性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您的体重较轻，请合理饮食增加重量哦"
            }else if (num >= 18.5 && num < 24.9) {
              this.message = "女性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您的体重正常，请继续保持哦"
            } else if (num >= 24.9 && num <= 30) {
              this.message = "女性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您已经超重了，请控制饮食哦"
            } else if (num > 30) {
              this.message = "女性：根据您的年龄：" + this.value1 + "岁，您的BMI指数为：" + num + "，您的体重已经比较危险了，如果超过40请您尽快咨询医生！"
            } else {
              this.message = "女性：请输入正确的年龄与体重哦" 
            }
          }
        }
      }
    },
  }
</script>

<style>
  #bmi h1 {
    text-indent: 30px;
    line-height: 50px;
    height: 50px;
    color: aliceblue;
    text-shadow: 1px -1px 1px black;
    background-color: rgb(84, 164, 202);
    font-size: 30px;
  }

  .bmiinput {
    width: 50%;
    margin-left: 25%;
    text-align: center;
  }

  .ten {
    margin-top: 5%;
  }

  .bmitext {
    text-align: center;
    margin-top: 20px;
    color: cornflowerblue;
  }
</style>