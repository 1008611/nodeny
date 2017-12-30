<template>
  <div class="article-edit">
    <el-form ref="form" label-width="80px" class="edit-form">
      <el-form-item label="文章标题">
        <el-input v-model="title" size="mini"></el-input>
      </el-form-item>

      <el-form-item label="文章内容">
        <markdown-editor :value="content" :highlight="true" @input="handleInput"></markdown-editor>

      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

  import api from '../../api/index'
  import hljs from 'highlight.js';
  window.hljs = hljs;

  export default {
    name: '',

    data() {
      return {
        title: '',
        input: '',
        content:''
      }
    },

    created(){

    },
    methods: {
      onSubmit() {
        let self = this
        let params = {
          title: self.title,
          input: self.input,
          state: true,
        }
        api.PostArticle(params).then(res => {
          console.log(res)
        })
      },
      handleInput(){}

    }
  }
</script>

<style lang="less">

  .article-edit {
    width: 100%;
    height: 100%;
    background: #fff;
    .edit-form {
      margin-right: 20px;
    }

  }

</style>
