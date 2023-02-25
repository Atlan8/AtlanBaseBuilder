<template>
  <div>
    <div class="container">
      <div class="header">
        <el-input placeholder="搜索" style="width: 200px; margin-right: 15px" />
        <el-button type="primary">搜索</el-button>
        <el-button type="primary">添加</el-button>
      </div>
      <div class="tableList">
        <el-table :data="assembleList">
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column
            prop="name"
            label="方案名"
            width="100"
          ></el-table-column>
          <el-table-column prop="CPU" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="序号" width="80"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAssemble } from "@/views/assemble/hooks/index";
const { assembleList } = useAssemble();
</script>

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
