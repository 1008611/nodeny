<template>
  <div class="m-header">
    <div class="m-header-top">
      <div class="time">
        <span>{{nowtime}} </span>
      </div>

      <div class="scroll-wrap">
        <ul class="scroll-content" :style="{ top }">
          <li v-for="item in weatherList">
            {{item.date+" "+item.type+" "+item.high+" "+item.low}}
          </li>
        </ul>
      </div>
    </div>

    <div class="top_nav m_container">
      <a href="#" title="nodeny">
        <img src="../../assets/images/weal8.png" class="logo" alt="nodeny">
      </a>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="index">Home</el-menu-item>

        <el-menu-item index="blog">Blog</el-menu-item>

        <el-menu-item index="images">Images</el-menu-item>

        <el-menu-item index="about">About</el-menu-item>

        <el-menu-item index="jock">Jock</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../../assets/js/date'
  import api from '../../api/index'

  export default {
    name: '',
    data() {
      return {
        activeIndex: '1',
        nowtime: formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"),
        weatherTip: '',
        weatherList: '',
        index: 0
      }
    },
    created() {
      this.getWeatherData()
    },
    computed: {
      top() {
        return -this.index * 3 + 'px';
      }
    },
    mounted() {
      setInterval(() => {
        var date = new Date();
        this.nowtime = formatDate(date, "yyyy-MM-dd hh:mm:ss");
      }, 1000)
      setInterval(() => {
        if (this.index < 46) {
          this.index += 1;
        } else {
          this.index = -5;
        }
      }, 100)
    },
    methods: {
      //菜单 跳转
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push({name: key})
      },
      //获取天气接口
      getWeatherData() {
        let self = this
        let params = '北京'
        api.getSplash(params).then(res => {
          let data = res.data
          if (data.code = 200) {
            self.weatherList = data.data.forecast
            self.weatherTip = data.data.ganmao
          }
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })

      },
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm:ss");
      }
    }
  }
</script>

<style lang="less">
  .m-header {
    background: #fff;
    width: 100%;
    border-bottom: 1px solid #ddd;
    position: relative;

    .m-header-top{
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      .time{

      }
      .scroll-wrap {
        width: 400px;
        height: 20px;
        overflow: hidden;
        .scroll-content {
          position: relative;
          transition: top 0.5s;

          li {
            list-style-type:none;
            line-height: 25px;
            text-align: center;
            color: #37aaf4;
          }
        }
      }
    }
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
