<template>
  <div class="splash">

    <div class="one">
      <span class="note">{{note}}</span>
    </div>

  </div>
</template>

<script>
  import api from '../../api/index'
  import {MP} from '../../assets/js/map'

  export default {
    name: "Splash",
    data() {
      return {
        note: '',
      }
    },
    created() {
      this.getInitData()
    },

    mounted() {
      // this.$nextTick(function () {
      //   MP("fQM89RLW48obYnRQxLKDixwZBGru23pj").then( BMap => {
      //     let self = this
      //     var map = new BMap.Map("allmap");            // 创建Map实例
      //     var point = new BMap.Point(116.404, 39.915); // 创建点坐标
      //     map.centerAndZoom(point,15);
      //     map.enableScrollWheelZoom();
      //     function myFun(result){
      //      let cityName = result.name;
      //      self.cityName = cityName
      //     }
      //     var myCity = new BMap.LocalCity();
      //     myCity.get(myFun);
      //   })
      // })
    },

    methods: {
      getInitData() {

        Promise.all([
          this.getOneNote()
        ]).then(res => {
          console.log(res)
          let data = res[0]
          this.note = data[0].text
          setTimeout(()=>{
            this.$router.push('/index')
          },3000)
        })

      },

      //获取到每日一句
      getOneNote() {
        return new Promise((resolve, reject) => {
          let self = this
          api.getOne().then(res => {
            let data = res.data
            resolve(data.data)
          }).catch(err => {
            self.$message('服务器被劫持 请稍后再试')
          })
        })
      },

    }
  }
</script>

<style lang="less">
  .splash {
    height: 100%;
    width: 100%;
    background: #6f7180;
    opacity: 0.8;
    margin: auto;
    .one {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 50px;
      .note {
        color: #fff;
        font-weight: 500;
        font-family: fantasy;
        font-size: 38px;
      }
    }
  }

</style>
