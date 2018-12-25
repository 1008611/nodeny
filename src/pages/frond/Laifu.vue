<template>
  <div class="jock">

    <div class="jock_container">
      <div class="jock_wrap" v-for="(item,$index) in jockList" :key="$index">
        <div class="jock_header">
          <div class="auther">
            <img class="header_img" :src="item.header" alt="">
            <span class="auther_name">{{item.username}}</span>
          </div>
          <div class="publist_time fr">{{item.time}}</div>
        </div>
        <div class="jock_content">
          <div class="note">{{item.title}}</div>

          <div class="note" v-if="item.content">{{item.content}}</div>

          <div class="image" v-else>
            <img :src="item.image" alt="">
          </div>

        </div>
      </div>

      <div class="page">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="pageIndex"
          :total="100">
        </el-pagination>
      </div>


    </div>

  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "Jock",
    data() {
      return {
        pageIndex: 1,
        jockList: [],
        isPlaying: false,
      }
    },
    created() {
      this.getInitData()

    },
    computed: {},
    mounted() {

      let b = document.documentElement.clientHeight || document.body.clientHeight;//可视区域的高度

      window.onscroll = () => {
        let a = document.documentElement.scrollTop || document.body.scrollTop;//滚动条y轴上的距离
        let audio2 = document.querySelectorAll('#video');
        if (a - b > 0) {
          console.log(audio2)
          audio2.forEach(item => {
            item.pause()
          })
          b += document.documentElement.clientHeight || document.body.clientHeight
        }
      }
    },
    methods: {
      getInitData() {
        let self = this
        api.getLaifu().then(res => {
          console.log(res)
          let data = res.data
          // if (data.code == 200) {
          self.jockList = data[0]
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          // } else {
          //   self.$message.error(data.msg)
          // }
        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      },
      //
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageIndex = val
        this.getInitData()
      }
    }
  }
</script>

<style lang="less">
  .jock {
    width: 100%;
    background: #f3f3f3;

    .jock_container {
      width: 650px;
      margin: 0 auto;
      .jock_wrap {
        padding: 30px 20px;
        background: #fff;
        .jock_header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .auther {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header_img {
              height: 40px;
              width: 40px;
              border-radius: 20px;
            }
            .auther_name {
              margin-left: 10px;
            }
          }

          .publist_time {
            color: #999;
          }
        }
      }
      .jock_content {
        margin: 5px 48px;
        .note {

        }
        .image {
          width: 100%;
          margin-top: 5px;
          img {
            max-width: 100%;
          }
        }
        .video {
          margin-top: 5px;
        }
      }
      .page {
        width: 100%;
        background: #fff;
        text-align: center;
      }
    }

  }

</style>
