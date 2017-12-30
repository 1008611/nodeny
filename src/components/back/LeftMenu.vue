<template>
  <div class="admin-menu" v-bind:style="{'max-width':maxWidth}">

    <div class="menu-out">
      <div class="menu-inner">

        <el-menu style="height: 100%" class="el-menu-vertical-demo"
                 router
                 v-if="menuList"
                 background-color="#354F65"
                 text-color="#fff"
                 active-text-color="#72a8d8"
                 :default-active="activePath"
                 :unique-opened="true" :collapse="isCollapse">

          <el-menu-item index="/admin/articleList">
            <i class="el-icon-setting"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/articleEdit">
            <i class="el-icon-setting"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>

        </el-menu>
      </div>
    </div>


  </div>
</template>

<script>


  export default {
    data() {
      return {
        path: '',
        tabName: '',
        isCollapse: false,
        maxWidth: '200px',

        index: 0,
        activePath: '/admin/basesales',
        menuList: []

      };
    },
    created() {
      this.initData()
    },

    computed: {
      isOpenMenu() {
        return this.$store.state.openMenu
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "routeChange",
      isOpenMenu(v) {
        console.log(v)
        this.isCollapse = v
        if (!v) {
          this.maxWidth = '160px'
        } else {
          this.maxWidth = '60px'
        }
      }
    },

    methods: {
      routeChange() {
        console.log(this.$route.path)
      },
      initData() {
        let self = this
      },

    },

  }


</script>


<style lang="less">

  @percent: 100%;
  .admin-menu {
    height: @percent;
    .menu-out {
      height: @percent;
      width: 160px;
      overflow: hidden;
      margin: 0px auto;
    }
    .menu-inner {
      height: @percent;
      width: 180px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .el-menu {
      height: 100%;
      box-shadow: 3px 1px 3px #888888;
      background-color: #fff;
      .item {
        margin-right: 20px;
      }
      .el-submenu__icon-arrow {
        margin-top: -4px;
      }

    }

    .last-item {
      height: 350px;
      border-top: 1px solid #666;
      position: relative;
      .b-logo {
        position: relative;
        margin-top: 200px;
        text-align: center;
        img {
          height: 20px;
        }
      }
    }
    .el-submenu__title {
      font-size: 13px;
    }
    .el-menu-item {
      font-size: 12px;
    }

  }

</style>
