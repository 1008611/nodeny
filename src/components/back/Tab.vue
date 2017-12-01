<template>

  <el-row class="admin-tab">
    <el-col :span="6">
      <div class="tab-left">
        <div class="l-title" v-show="!isCollapse">
          <p class="l-title-name"> 后台系统 </p>
        </div>
        <div @click="openLeftMenu" class=" r-icon" :class="isCollapse ?'l-icon':'l-icon2'">
          <i class="fa fa-outdent" aria-hidden="true" v-show="!isCollapse"></i>
          <i class="fa fa-indent" aria-hidden="true" v-show="isCollapse"></i>
        </div>
      </div>
    </el-col>
    <el-col :span="6">&nbsp;</el-col>
    <el-col :span="6">&nbsp;</el-col>
    <el-col :span="6">

      <div class="r-content">

        <el-dropdown>
          <div class="el-dropdown-link r-item">
            <span>XXX</span>
            <i class="fa fa-user-circle  "></i>
          </div>
          <el-dropdown-menu slot="dropdown" class="down-menu">

            <el-dropdown-item>
              <div @click="openEdit">
                <i class="el-icon-setting"></i>
                <span>修改密码</span>
              </div>
            </el-dropdown-item>

            <el-dropdown-item>
              <div @click="loginOut">
                <i class="fa fa-sign-out"></i>
                <span>退出登录</span>
              </div>
            </el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown>
          <div class="el-dropdown-link r-item">
            <i class="el-icon-bell"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>业务信息</el-dropdown-item>
            <el-dropdown-item>系统公告</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>


      </div>
    </el-col>
  </el-row>


</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        dialogFormVisible: false,
        userDataVisible: false,
        formLabelWidth: '120px',
        companyform: {}
      }
    },
    created() {
    },
    methods: {
      openLeftMenu(){
        this.isCollapse =!this.isCollapse
        console.log(this.isCollapse)
        this.$store.dispatch('openMenu',this.isCollapse)
      },
      openEdit(){},
      loginOut(){},
    }
  }


</script>


<style lang="less">

  @tabHeight: 45px;
  .admin-tab {
    height: @tabHeight;
    background: #263949;
    width: 100%;
    min-width: 800px;

    .tab-left {
      display: flex;
      .l-title {
        margin-left: 15px;
        text-align: center;
        &-name {
          padding: 2px 0;
          color: #dbdbdb;
          font-size: 12px;
        }
      }
      .r-icon {
        position: relative;
        text-align: center;
        width: 40px;
        height: @tabHeight;
        cursor: pointer;

        i {
          color: #fff;
          display: block;
          line-height: @tabHeight;
          height: @tabHeight;
          font-size: 18px;
        }
      }
      .l-icon {
        position: relative;
        animation: moveR .5s;
        animation-fill-mode: forwards;
      }
      .l-icon2 {
        position: relative;
        animation: moveL .5s;
        animation-fill-mode: forwards;
      }

      @keyframes moveL {
        0% {
          left: 0px;
          top: 0px;
        }
        100% {
          left: 10px;
          top: 0px;
        }
      }
      @keyframes moveR {
        0% {
          left: 50px;
          top: 0px;
        }
        100% {
          left: 10px;
          top: 0px;
        }
      }

    }

    .r-content {
      display: flex;
      justify-content: flex-end;
      text-align: center;

      .r-item {
        width: 100px;
        cursor: pointer;
        color: #fff;
        display: flex;
        justify-content: center;
        span {
          display: inline-block;
          max-width: 80px;
          height: @tabHeight;
          line-height: @tabHeight;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
        }
        i {
          padding: 0 5px;
          display: inline-block;
          line-height: @tabHeight;
          height: @tabHeight;
        }
        &:hover {
          background-color: #4e7495;
        }
      }
    }

  }

</style>
