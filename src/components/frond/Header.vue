<template>
  <div class="m-header">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-tag>Article</el-tag>
      </el-col>
      <el-col :span="6">
        <el-tag>Pic</el-tag>
      </el-col>
      <el-col :span="6">
        <el-tag>About</el-tag>
      </el-col>
      <el-col :span="6">
        <el-tag>Nodeny</el-tag>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  .m-header {
    line-height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 5px #888888;
    .el-tag {
      background-color: #ecf5ff1c;
      padding: 0px 34px;
      color: #5daf34;
      border-radius: 43px;
    }
  }

</style>
