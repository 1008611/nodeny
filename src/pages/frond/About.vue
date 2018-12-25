<template>
  <div class="about">
    <el-input v-model="postId"></el-input>
    <el-button @click="search">查询</el-button>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "images",
    data() {
      return {
        info: [],
        postId:''
      }
    },
    created() {
      // this.initData()
    },
    methods: {
      search() {
        let self = this

        let data = self.postId
        api.getPost( data).then(res => {
          // let data = res.data
          // console.log(data.data)
          // if (data.code == 200) {
          //   self.imgList = data.data
          // } else {
          //   self.$message.error(data.msg)
          // }

        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      }
    }
  }
</script>

<style lang="less">

</style>
