<template>
  <div id="app">
    <m-header v-show="$route.meta.showHeader"></m-header>
    <router-view/>
  </div>
</template>

<script>
  import mHeader from './components/frond/Header.vue'

  export default {
    name: 'app',
    components: {
      mHeader,
    },
    data() {
      return {
        showHeader: true,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 80) {
          this.showHeader = false
        } else {
          this.showHeader = true
        }
      },
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style lang="less">
  html, body {
    height: 100%;
    /*overflow: hidden;*/
  }

  #app {
    height: 100%;
    color: #333;
    /*清除浮动*/
    .clearfix {
      zoom: 1;
    }
    .clearfix:after {
      display: block;
      content: "";
      clear: both;
      height: 0;
      line-height: 0;
      visibility: hidden;
    }

    .fl {
      float: left;
    }
    .fr {
      float: right;
    }

    .m_container {
      width: 1000px;
      margin: 0 auto;
    }
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  }
</style>
