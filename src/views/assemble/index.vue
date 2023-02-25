<template>
  <div>
    <div class="container">
      <div class="header">
        <el-input placeholder="搜索" style="width: 200px; margin-right: 15px" />
        <el-button type="primary">搜索</el-button>
        <el-button type="primary">添加</el-button>
      </div>
      <div class="tableList">
        <el-table></el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  width: 65vw;
  margin: 0 auto;

  .header {
    @include flexRowFn(flex-start);
    padding-top: 15px;
  }
}
</style>
