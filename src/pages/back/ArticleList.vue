<template>
  <div class="article-list">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="table">
      <el-table
        :data="articleList"
        border
        v-loading="loading"
        style="width: 100%">
        <el-table-column
          prop="publishTime"
          label="date"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="title"
          width="180">
        </el-table-column>
        <el-table-column
          prop="subtitle"
          label="content">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <!--<el-button @click="watch(scope.row)" type="text" size="small">查看</el-button>-->
            <el-button @click="deleteArticle(scope.row)" type="text" size="small">删除</el-button>
            <el-button @click="toEditor(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block page">
      <el-pagination
        layout="total,prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageIndex"
        :total="dataCount"
        :page-size="pageSize">
      </el-pagination>
    </div>


  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: '',
    data() {
      return {
        articleList: [],
        rarticleList: [],
        loading: false,

        pageSize: 8,
        pageIndex: 1,
        dataCount: 0,
      }
    },
    created() {
      this.initData()
    },
    methods: {
      //获取文章列表
      initData() {
        let self = this
        self.loading = true
        api.GetArticle().then(res => {
          let data = res.data.data
          self.rarticleList = data
          self.loading = false
          self.dataCount = data.length
          self.pageIndex = 1
          self.handlePage()
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      },
      // //查看文章详情
      // watch(row) {
      //   console.log(row)
      //   let self = this
      //   api.OpenArticle(row._id).then(res => {
      //     console.log(res)
      //     self.initData()
      //   })
      // },
      //删除文章
      deleteArticle(row) {
        let self = this
        api.DeleteArticle(row._id).then(res => {
          console.log(res)
          self.initData()
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      },
      // 去编辑页面
      toEditor(row) {
        let id = row._id
        this.$router.push({path: '/admin/articleEdit', query: {id: id}});
      },
      handlePage() {
        let arr = this.rarticleList.slice(this.pageSize * this.pageIndex - this.pageSize, this.pageSize * this.pageIndex)
        this.articleList = arr
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val
        this.handlePage()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageIndex = val
        this.handlePage()
      },
    }

  }
</script>

<style lang="less">
  .article-list {
    .bread {
      line-height: 20px;
      margin: 5px;
    }
    .table {
      margin: 15px 5px;
    }
    .page {
      position: absolute;
      bottom: 20px;
      right: 50%;
      text-align: center;
    }
  }

</style>
