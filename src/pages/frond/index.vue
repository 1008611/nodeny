<template>
  <div class="index">
    <v-title>weal8</v-title>

    <div class="m_container">
      <el-container class="mt30" >
        <el-container>
          <el-main>Main</el-main>
          <el-aside width="300px">Aside</el-aside>
        </el-container>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>

  </div>
</template>

<script>
  import vTitle from '../../components/Title.vue'
  import api from '../../api/index'

  export default {
    name: '',
    components: {
      vTitle,
    },
    data() {
      return {
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
    width: 100%;
    overflow: scroll;
    background: #c1cad8;
    .mt30 {
      margin-top: 30px;
      border: 1px solid #3a8ee6;
    }
  }
</style>
