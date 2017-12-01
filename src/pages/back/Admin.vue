<template>
  <div class="admin">
    <m-tab></m-tab>

    <div class="content">

      <left-menu class="left-menu fl"></left-menu>

      <div class="right-content">

        <router-view class="r-content"></router-view>

      </div>
    </div>

  </div>
</template>

<script>
  import mTab from '../../components/back/Tab.vue'
  import LeftMenu from '../../components/back/LeftMenu.vue'
  export default {
    name: '',
    components:{
      mTab,
      LeftMenu
    },
    data() {
      return {}
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
  @percent: 100%;
  .admin {
    background: #E9ECF3;
    height: @percent;
    width: @percent;

    .content {
      display: flex;
      width: @percent;
      height: @percent;
      .left-menu {
        height: @percent;
        position: relative;
        white-space: nowrap;
      }
      .right-content {
        position: relative;
        overflow: hidden;
        width: @percent;
        height: @percent;
        background: #fff;

        .r-content {
          position: relative;
          width: @percent;
          height: @percent;
        }

      }

    }

  }


</style>
