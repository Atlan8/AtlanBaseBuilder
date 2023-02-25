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
          <el-table-column prop="cpu" label="CPU" width="150">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.cpu.name }}</div>
                <div>价格：￥{{ scope.row.cpu.price }}</div>
                <div>购买链接：{{ scope.row.cpu.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="motherboard" label="主板" width="200">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.motherboard.name }}</div>
                <div>价格：￥{{ scope.row.motherboard.price }}</div>
                <div>购买链接：{{ scope.row.motherboard.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="graphicsCard" label="显卡" width="150">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.graphicsCard.name }}</div>
                <div>价格：￥{{ scope.row.graphicsCard.price }}</div>
                <div>购买链接：{{ scope.row.graphicsCard.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="memory" label="内存" width="200">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.memory.name }}</div>
                <div>价格：￥{{ scope.row.memory.price }}</div>
                <div>数量：x{{ scope.row.memory.count }}</div>
                <div>总价：￥{{ scope.row.memory.total }}</div>
                <div>购买链接：{{ scope.row.memory.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="hardDiskList" label="硬盘" width="200">
            <template #default="scope">
              <div>
                <div
                  v-for="(item, index) in scope.row.hardDiskList"
                  :key="'hard-disk-cell-' + index"
                >
                  <div>名称：{{ item.name }}</div>
                  <div>价格：￥{{ item.price }}</div>
                  <div>数量：x{{ item.count }}</div>
                  <div>总价：￥{{ item.total }}</div>
                  <div>购买链接：{{ item.link }}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="radiator" label="散热器" width="120">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.radiator.name }}</div>
                <div>价格：￥{{ scope.row.radiator.price }}</div>
                <div>购买链接：{{ scope.row.radiator.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="fan" label="风扇" width="120">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.fan.name }}</div>
                <div>价格：￥{{ scope.row.fan.price }}</div>
                <div>数量：x{{ scope.row.fan.count }}</div>
                <div>总价：￥{{ scope.row.fan.total }}</div>
                <div>购买链接：{{ scope.row.fan.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="powerSupply" label="电源" width="120">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.powerSupply.name }}</div>
                <div>价格：￥{{ scope.row.powerSupply.price }}</div>
                <div>购买链接：{{ scope.row.powerSupply.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="chassis" label="机箱" width="120">
            <template #default="scope">
              <div>
                <div>名称：{{ scope.row.chassis.name }}</div>
                <div>价格：￥{{ scope.row.chassis.price }}</div>
                <div>购买链接：{{ scope.row.chassis.link }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="总价" width="100">
            <template #default="scope">
              <div>{{ scope.row.total }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="datetime"
            label="创建时间"
            width="100"
          ></el-table-column>
          <el-table-column label="操作" width="300">
            <template #default="scope">
              <div>
                <el-button>查看详情</el-button>
                <el-button type="primary">修改</el-button>
                <el-button type="warning">删除</el-button>
              </div>
            </template>
          </el-table-column>
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
  width: 80vw;
  margin: 0 auto;

  .header {
    @include flexRowFn(flex-start);
    padding-top: 15px;
  }
}
</style>
