<template>
  <div class="index">
    <v-title>nodeny</v-title>

    <m-header></m-header>
    <!--<m-editor></m-editor>-->
    <el-input v-model="name" placeholder="请输入内容"></el-input>
    <el-input v-model="pwd" placeholder="请输入内容"></el-input>
    <el-button @click="submit">注册</el-button>
    <el-button @click="find">查找</el-button>

  </div>
</template>

<script>
  import vTitle from '../../components/Title.vue'
  import mHeader from '../../components/frond/Header.vue'
  import mEditor from '../../components/frond/Editor.vue'
  import api from '../../api/index'

  export default {
    name: '',
    components: {
      vTitle,
      mHeader,
      mEditor
    },
    data() {
      return {
        name: '',
        pwd: '',
      }
    },
    methods: {
      submit() {
        let self = this
        let params = {
          account: self.name,
          password: self.pwd
        }
        api.Register(params).then(res => {
          console.log(res)
        })
      },
      find() {
        let self = this
        api.GetAccount().then(res => {
          console.log(res)
        })
      },
    }
  }
</script>

<style lang="less">

</style>
