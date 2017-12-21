<template>
  <div class="index">
    <v-title>nodeny</v-title>



    <div class="m_container">
      <el-container class="mt30" >
        <el-container>
          <el-main>Main</el-main>
          <el-aside width="300px">Aside</el-aside>
        </el-container>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
    <!--<m-editor></m-editor>-->
    <!--<el-input v-model="name" placeholder="请输入内容"></el-input>-->
    <!--<el-input v-model="pwd" placeholder="请输入内容"></el-input>-->
    <!--<el-button @click="submit">注册</el-button>-->
    <!--<el-button @click="find">查找</el-button>-->

  </div>
</template>

<script>
  import vTitle from '../../components/Title.vue'
  import mEditor from '../../components/frond/Editor.vue'
  import api from '../../api/index'

  export default {
    name: '',
    components: {
      vTitle,
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
  .index {
    height: 2200px;
    overflow: scroll;
    .mt30 {
      margin-top: 30px;
      border: 1px solid #3a8ee6;
    }
  }
</style>
