<template>
  <div class="login">
    <div class="form">
      <el-form label-position="left" label-width="120px" :model="form" :rules="rules" ref="form">
        <el-form-item label="" prop="name">
          <el-input v-model.lazy="form.name" placeholder="Name">
          </el-input>
        </el-form-item>

        <el-form-item label="" prop="password">
          <el-input v-model="form.password" type="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 50%" @click="onSubmitL('form')">login</el-button>
          <el-button plain round size="mini" style="width: 40%" @click="toRegister">register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    name: "login",
    data() {
      return {
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
      }
    },
    created() {
    },
    methods: {
      onSubmitL(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.Login()
          } else {
            return false;
          }
        });
      },
      Login() {
        let self = this
        let params = {
          name: self.form.name,
          password: self.form.password
        }
        api.GetLogin(params).then(res => {
          console.log(res)
          let data = res.data

          if (data.success) {
            self.$message.success(data.msg)
            self.$router.push({path: '/admin'})
          } else {
            self.$message.error(data.msg)
            return
          }

        }).catch(err => {
          self.message.error('服务器被劫持了 请稍后再试')
        })
      },
      toRegister() {
        this.$router.push({path: "/register"})
      }
    },
  }
</script>

<style lang="less">
  .login {
    height: 100%;
    width: 100%;
    background: url("../../assets/images/login2.jpg") no-repeat center center;
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
