<template>
  <div class="blog-detail ">
    <div class="m_container">
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <div class="fr">{{publishTime}}</div>

      <div class="blog-content" v-html="compiledMarkdown">
      </div>
    </div>


  </div>
</template>

<script>

  import api from '../../api/index'
  import hljs from 'highlight.js';

  import marked from 'marked'

  window.hljs = hljs;

  export default {
    name: '',
    data() {
      return {
        title: '',
        publishTime: '',
        content: '',
        id: '',
      }
    },

    created() {
      this.id = this.$route.params.id
      this.getArticle(this.id)
    },

    computed: {
      compiledMarkdown() {
        return marked(this.content, {sanitize: true})
      }
    },
    methods: {

      //获取文章
      getArticle(id) {
        let self = this
        api.OpenArticle(id).then(res => {
          let data = res.data.data
          console.log(data)
          console.log(data.title)
          self.title = data.title
          self.publishTime = data.publishTime
          self.content = data.content
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      },

    }
  }
</script>

<style lang="less">
  .blog-detail {
    padding-top: 100px;
    background-image: url("../../assets/images/bg3.jpg") ;
    background-size: cover;
    .title {
      text-align: center;
    }
    .blog-content{
      padding: 45px 0;
    }
    blockquote {
      border-left: 6px solid #ddd;
      margin: 30px 0;
      padding-left: 20px;
    }
    blockquote blockquote {
      border: none;
      text-align: right;
    }

    pre {
      background-color: #666;
      padding: 10px 10px;
    }
    code {
      color: #fff;
    }

  }
</style>
