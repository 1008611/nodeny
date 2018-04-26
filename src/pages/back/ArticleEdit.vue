<template>
  <div class="article-edit">
    <el-form ref="form" label-width="80px" class="edit-form">
      <el-form-item label="文章标题" class="article-title">
        <el-input v-model="title" size="mini"></el-input>
      </el-form-item>

      <el-form-item label="文章内容" >
        <markdown-editor v-model="content" :configs="configs"  :highlight="true"></markdown-editor>

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
      let self = this
      return {
        title: '',
        input: '',
        content: '',
        id: '',
        configs: {
          spellChecker: false, // 禁用拼写检查
          toolbar: ['bold', 'italic', 'heading', 'code', 'quote', 'link', 'image', 'preview', 'side-by-side', 'fullscreen',
            {
              name: 'publish',
              action: function customFunction(editor) {
                self.onSubmit()
              },
              className: 'fa fa-send',
              title: '发布'
            },
            {
              name: 'clear',
              action: function customFunction(editor) {
                self.clearContent()
              },
              className: 'fa fa-remove',
              title: '清空'
            },
          ]
        }
      }
    },

    created() {
      this.id = this.$route.query.id
      console.log(this.id)
      if (this.id) {
        this.getArticle(this.id)
      }
    },
    methods: {
      //删除文章
      clearContent() {
        this.title = ''
        this.content = ''
      },
      //获取文章
      getArticle(id) {
        let self = this
        api.OpenArticle(id).then(res => {
          let data = res.data.data
          self.title = data.title
          self.content = data.content
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      },
      //发布文正
      onSubmit() {
        let self = this
        if (self.title == '' || self.content == '') {
          self.$message.error('你这叫 文章~~~~')
          return
        }
        let params = {
          id: self.id,
          title: self.title,
          content: self.content,
          state: true,
        }
        api.PostArticle(params).then(res => {
          console.log(res)
          let data = res.data
          if (data.success) {
            self.$message(data.msg)
            self.title = ''
            self.content = ''
          }
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      },


    }
  }
</script>

<style lang="less">

  .article-edit {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #fff;

    .edit-form {
      margin-right: 20px;
    }
  }

  .editor-toolbar a:last-child {
    float: right;
    margin-top: 3px;
    margin-right: 10px;
  }

  .editor-toolbar a:nth-last-child(2) {
    float: right;
    margin-top: 3px;
    margin-right: 10px;
  }
</style>
