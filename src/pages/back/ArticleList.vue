<template>
  <div class="article-list">

    <el-table
      :data="articleList"
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
</template>

<script>
  import api from '../../api/index'

  export default {
    name: '',
    data() {
      return {
        articleList: []
      }
    },
    created() {
      this.initData()
    },
    methods: {
      //获取文章列表
      initData() {
        let self = this
        api.GetArticle().then(res => {
          self.articleList = res.data.data
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
        })
      },
      // 去编辑页面
      toEditor(row) {
        let id = row._id
        this.$router.push({path: '/admin/articleEdit', query: {id: id}});
      },
    }

  }
</script>

<style lang="less">
  .article-list {

  }

</style>
