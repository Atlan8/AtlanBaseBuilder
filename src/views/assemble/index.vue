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
          <el-table-column
            fixed
            prop="id"
            label="序号"
            width="80"
            align="center"
          ></el-table-column>
          <el-table-column
            fixed
            prop="name"
            label="方案名"
            width="100"
            align="center"
          ></el-table-column>
          <el-table-column prop="cpu" label="CPU" width="120" align="center">
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.cpu" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="motherboard"
            label="主板"
            width="220"
            align="center"
          >
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.motherboard" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="graphicsCard"
            label="显卡"
            width="200"
            align="center"
          >
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.graphicsCard" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="memory"
            label="内存"
            width="220"
            align="center"
          >
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.memory" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="hardDiskList"
            label="硬盘"
            width="200"
            align="center"
          >
            <template #default="scope">
              <div>
                <div
                  v-for="(item, index) in scope.row.hardDiskList"
                  :key="'hard-disk-cell-' + index"
                >
                  <AssembleSpecification :item="item" />
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="radiator"
            label="散热器"
            width="200"
            align="center"
          >
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.radiator" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="fan" label="风扇" width="200" align="center">
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.fan" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="powerSupply"
            label="电源"
            width="200"
            align="center"
          >
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.powerSupply" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="chassis"
            label="机箱"
            width="180"
            align="center"
          >
            <template #default="scope">
              <div>
                <AssembleSpecification :item="scope.row.chassis" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="总价" width="100" align="center">
            <template #default="scope">
              <div>￥{{ scope.row.total }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="datetime"
            label="创建时间"
            width="180"
            align="center"
          ></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="300"
            align="center"
          >
            <template #default="scope">
              <div>
                <el-button @click="handleShowInfo(scope.row, false)"
                  >查看详情</el-button
                >
                <el-button
                  type="primary"
                  @click="handleShowInfo(scope.row, true)"
                  >修改</el-button
                >
                <el-button type="warning">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      v-model="showInfoDialog"
      title="装机配置单详情"
      :close-on-click-modal="true"
      @close="handleClose"
    >
      <div>
        <AssembleInfo
          v-if="!!assembleInfo"
          :info="assembleInfo"
          :is-form="isEditInfo"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useAssemble } from "@/views/assemble/hooks/useAssemble";
import AssembleInfo from "./components/assembleInfo.vue";
import AssembleSpecification from "./components/assembleSpecification.vue";

const {
  assembleList,
  assembleInfo,
  showInfoDialog,
  isEditInfo,
  handleShowInfo,
  handleClose,
} = useAssemble();
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
  margin: 0 auto;

  .header {
    @include flexRowFn(flex-start);
    padding: 15px 0;
  }
}
</style>
