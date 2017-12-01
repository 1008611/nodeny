<template>
  <div class="article-list">
    <div v-for="(item,index) in articleList">
      <div>{{item.title}}</div>
      <el-button @click="openA(item._id)">查看</el-button>
      <el-button @click="deleteA(item._id)">删除</el-button>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: '',
    data() {
      return {
        articleList: ''
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        let self = this
        api.GetArticle().then(res => {
          self.articleList = res.data.data
        })
      },
      openA(id){
        let self = this
        api.OpenArticle(id).then(res => {
          console.log(res)
          self.initData()
        })
      },
      deleteA(id){
        let self = this
        api.DeleteArticle(id).then(res => {
          console.log(res)
          self.initData()
        })
      },
    }
  }
</script>

<style lang="less">
  .article-list {

  }

</style>
