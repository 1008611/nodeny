<template>
  <div class="blog" >
    <div v-loading="loading" >
      <el-card class="box-card" v-for="(item,index) in articleList" :key="index">
        <div slot="header" class="clearfix">
          <h3>{{item.title}}</h3>
        </div>
        <div class="text item">
          <span>{{item.subtitle}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="readmore(item._id)">read more >></el-button>

        </div>
      </el-card>

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


  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "blog",
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
      //查看文章详情
      readmore(id) {
        console.log(id)
        this.$router.push({name: 'blogdetail', params: {id: id}});
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
  .blog {
    background: url("../../assets/images/wz.jpg") no-repeat center center;
    background-size: cover;

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .box-card {
      margin: 10px 150px 0;
    }
    .page {
      position: relative;
      bottom: 0px;
      text-align: center;
      .el-pagination__total{
        color: #fff;

      }
    }
  }
</style>
