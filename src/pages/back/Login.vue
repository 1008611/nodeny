<template>
  <div class="login">

    <div class="form">
      <el-form label-position="left" label-width="120px" :model="form" :rules="rules" ref="form">
        <el-form-item label="" prop="name">
          <el-input v-model="form.name" placeholder="Name" @blur="checkName"></el-input>
          <span>{{msg}}</span>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="form.password" type="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <!--<el-button type="primary" style="width: 100%" @click="onSubmit('form')">ok</el-button>-->
          <el-button type="primary" @click="onSubmit('form')">login</el-button>
          <el-button type="primary" @click="getData">register</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "login",
    data: () => ({
      msg: '',
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入名称', trigger: 'blur'},
          {min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入名称', trigger: 'blur'},
          {min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}
        ],
      }
    }),
    created() {
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.checkData()
          } else {
            return false;
          }
        });

      },
      checkData() {
        let self = this
        let params = {
          name: self.form.name,
          password: self.form.password
        }
        api.GetLogin(params).then(res => {
          console.log(res)

          // self.$router.push({path: '/admin'})
        })
      },
      checkName() {
        let self = this
        let params = {
          name: self.form.name,
          password: self.form.password
        }
        api.CheckAccount(params).then(res => {
          let data = res.data
          self.msg = data.msg
          // self.$router.push({path: '/admin'})
        })
      },
      getData() {
        let self = this
        let params = {
          name: self.form.name,
          password: self.form.password
        }
        api.Register(params).then(res => {
          console.log(res)
          // self.$router.push({path: '/admin'})
        })
      },
    },
  }
</script>

<style lang="less">
  .login {
    height: 100%;
    width: 100%;
    /*background: url("../../assets/images/login2.jpg") no-repeat center center;*/
    background-size: cover;
    opacity: 0.9;

    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      margin-left: -100px;
      .el-form-item__label {
        color: #fff;
      }

    }
  }

</style>
