<template>
  <div>
    <div>
      <el-form :model="info" label-width="150px" label-position="left">
        <el-form-item label="方案名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="CPU">
          <div>
            <div>名称：<el-input v-model="formData.cpu.name"></el-input></div>
            <div>价格：<el-input v-model="formData.cpu.price"></el-input></div>
            <div>
              购买链接：<el-input v-model="formData.cpu.link"></el-input>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="主板"></el-form-item>
        <el-form-item label="内存"></el-form-item>
        <el-form-item label="散热器"></el-form-item>
        <el-form-item label="硬盘"></el-form-item>
        <el-form-item label="显卡"></el-form-item>
        <el-form-item label="电源"></el-form-item>
        <el-form-item label="机箱"></el-form-item>
        <el-form-item label="风扇"></el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, watch, reactive } from "vue";
import type { AssembleInfo } from "../service";

const props = defineProps({
  info: {
    type: Object as PropType<AssembleInfo>,
    required: true,
  },
});

let formData = reactive<AssembleInfo>({
  id: 0,
  name: "",
  cpu: {
    name: "",
    price: 0,
    link: "",
  },
  motherboard: {
    name: "",
    price: 0,
    link: "",
  },
  memory: {
    name: "",
    price: 0,
    count: 0,
    total: 0,
    link: "",
  },
  radiator: {
    name: "",
    price: 0,
    link: "",
  },
  hardDiskList: [
    {
      name: "",
      price: 0,
      count: 0,
      total: 0,
      link: "",
    },
  ],
  graphicsCard: {
    name: "",
    price: 0,
    link: "",
  },
  powerSupply: {
    name: "",
    price: 0,
    link: "",
  },
  chassis: {
    name: "",
    price: 0,
    link: "",
  },
  fan: {
    name: "",
    price: 0,
    count: 0,
    total: 0,
    link: "",
  },
  total: 0,
  timestramp: 0,
  datetime: "",
});

watch(
  () => props.info,
  (newVal: AssembleInfo) => {
    formData = { ...newVal };
  }
);
</script>

<style lang="scss" scoped></style>
