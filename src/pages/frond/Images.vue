<template>
  <div class="images">
    <el-carousel v-if="imgList.length" :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="(item,$index) in imgList" :key="$index">
        <img class="image" :src="item.url"></img>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "images",
    data() {
      return {
        imgList: []
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        let self = this
        api.getImages().then(res => {
          let data = res.data
          console.log(data.data)
          if (data.code == 200) {
            self.imgList = data.data
          } else {
            self.$message.error(data.msg)
          }

        }).catch(err => {
          self.$message('服务器被劫持 请稍后再试')
        })
      }
    }
  }
</script>

<style lang="less">
  .images {
    background: #c5c8e3;
    overflow: hidden;
    height: 100%;
    .image {
      height: 100%;
      margin-top: 20px;
    }
  }
</style>
