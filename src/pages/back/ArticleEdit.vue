<template>
  <div class="article-edit">
    <el-form ref="form" label-width="80px" class="edit-form">
      <el-form-item label="文章标题">
        <el-input v-model="title" size="mini"></el-input>
      </el-form-item>

      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="input"  :rows="20"></el-input>
      </el-form-item>

      <!--<el-form-item label="文章内容">-->
      <div v-html="compiledMarkdown"></div>
      <!--</el-form-item>-->


      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';
  import api from '../../api/index'

  export default {
    name: '',
    data() {
      return {
        title: '',
        input: ''
      }
    },
    mounted() {
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, {sanitize: true})
      }
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
