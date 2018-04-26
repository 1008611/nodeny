<template>
  <div class="api-list">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>接口管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-input placeholder="请输入内容" v-model="input3">
      <template slot="prepend">Http://</template>
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>

  </div>
</template>

<script>
  import api from '../../api/index'
  export default {
    name: "ApiList",
    data() {
      return {
        input3:''
      }
    },
    methods:{
      search(){
        let self = this
        let params = 'article'
        api.getApi(params).then(res=>{
          console.log(res)
        })
      },
    }
  }
</script>

<style lang="less">

</style>
