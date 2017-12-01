<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  html, body{
    height: 100%;
    overflow:hidden;
  }

  #app {
    height: 100%;
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
  }
</style>
