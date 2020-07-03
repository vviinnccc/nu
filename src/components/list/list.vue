<template>
  <div id="list">
    <H1>{{title}}</H1>
    <el-row>
      <el-col :span="24">
        <el-table @cell-click="handle" :data="list.slice((currentPage-1)*PageSize,currentPage*PageSize)">
          <el-table-column label="文章名" width="250px">
            <template slot-scope="{row}">
              <router-link :to="path+'/'+row.vrouter" class="rl">
                <span>{{ row.title }}</span>
              </router-link>
            </template>
          </el-table-column>

          <el-table-column prop="author" label="作者" align="center">
          </el-table-column>

          <el-table-column prop="time" label="时间" align="center">
          </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="pageSizes" :page-size="PageSize" background layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    http
  } from '@/http/request';

  export default {
    name: 'list',
    data() {
      return {
        // 总数据
        list: [],
        // 总条数
        total: 0,
        // 默认显示第几页
        currentPage: 1,
        // 个数选择器
        pageSizes: [10, 20, 30, 40],
        // 默认每页显示的条数
        PageSize: 10,
        title: '',
        path: '',
      }
    },
    created() {
      this.getlist()
      this.path = this.$route.path
    },
    watch: {
      '$route.path'(newval, oldval) {
        this.getlist()
      }
    },
    methods: {
      getlist() {
        http({
          url: 'phpback.php',
          method: 'post',
          data: {
            type: this.$route.meta.name
          }
        }).then(res => {
          this.list = res.data
          this.total = res.data.length
          this.title = res.data[0].name
        }).catch(err => {
          this.$message.error('未知错误')
          // console.log(err);
        })
      },
      // 分页
      // 每页显示的条数
      handleSizeChange(val) {
        // 改变每页显示的条数 
        this.PageSize = val
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.currentPage = 1
      },
      // 显示第几页
      handleCurrentChange(val) {
        // 改变默认的页数
        this.currentPage = val
      },
      handle(row) {
        this.$router.push(row.url)
      }
    }
  }
</script>

<style>
  #list h1 {
    text-indent: 30px;
    line-height: 50px;
    height: 50px;
    color: aliceblue;
    text-shadow: 1px -1px 1px black;
    background-color: rgb(84, 164, 202);
    font-size: 30px;
  }
  .rl {
    text-decoration: none;
    color:#337ab7;
  }
  .el-pagination {
    margin-top: 20px;
    margin-left: 20%;
  }
</style>