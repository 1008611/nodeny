<template>
  <div class="m-header">
    <div class="top_nav m_container">
      <a href="http://www.nodeny.cn" title="nodeny">
        <img src="../../assets/images/nodeny.png" class="logo" alt="nodeny">
      </a>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="index">Home</el-menu-item>

        <el-menu-item index="blog">Blog</el-menu-item>

        <el-menu-item index="images">Images</el-menu-item>

        <el-menu-item index="about">About</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key)
      }
    }
  }
</script>

<style lang="less">
  .m-header {
    background: #fff;
    width: 100%;
    border-bottom: 1px solid #ddd;
    /*opacity: 0.9;*/
    .top_nav {
      height: 91px;
      display: flex;
      .logo {
        height: 85px;
        margin: 5px 0;
      }
      .el-menu-demo {
        margin-top: 20px;
      }
    }
  }

</style>
