<template>
  <div>
    <div>
      <el-form :model="info" label-width="150px" label-position="right">
        <el-form-item label="方案名称">
          <el-input
            v-model="formData.name"
            style="width: 250px"
            v-show="isForm"
          ></el-input>
          <div v-show="!isForm">{{ info.name }}</div>
        </el-form-item>
        <el-form-item label="CPU">
          <div>
            <AssembleSpecification
              v-model:item="formData.cpu"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="主板">
          <div>
            <AssembleSpecification
              v-model:item="formData.motherboard"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="内存">
          <div>
            <AssembleSpecification
              v-model:item="formData.memory"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="散热器">
          <div>
            <AssembleSpecification
              v-model:item="formData.radiator"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="硬盘">
          <div>
            <div
              v-for="(item, index) in formData.hardDiskList"
              :key="'hard-cell-' + index"
            >
              <AssembleSpecification
                v-model:item="formData.hardDiskList[index]"
                :is-form="isForm"
              />
            </div>
          </div>
        </el-form-item>
        <el-form-item label="显卡">
          <div>
            <AssembleSpecification
              v-model:item="formData.graphicsCard"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="电源">
          <div>
            <AssembleSpecification
              v-model:item="formData.powerSupply"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="机箱">
          <div>
            <AssembleSpecification
              v-model:item="formData.chassis"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="风扇">
          <div>
            <AssembleSpecification
              v-model:item="formData.fan"
              :is-form="isForm"
            />
          </div>
        </el-form-item>
        <el-form-item label="总价">
          <div v-show="!isForm">￥{{ info.total }}</div>
          <div v-show="!!isForm">￥{{ assembleTotal }}</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, watch, reactive, onMounted, computed } from "vue";
import type { AssembleInfo } from "../service";
import AssembleSpecification from "./assembleSpecification.vue";

const props = defineProps({
  info: {
    type: Object as PropType<AssembleInfo>,
    required: true,
  },
  isForm: {
    type: Boolean,
    default: false,
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

const assembleTotal = computed(() => {
  const hard = formData.hardDiskList.reduce((prev, cur) => {
    if (!cur.total) return prev;
    return prev + cur.total;
  }, 0);

  const total =
    formData.cpu.price +
    formData.motherboard.price +
    (formData.memory?.total ?? 0) +
    formData.radiator.price +
    hard +
    formData.graphicsCard.price +
    formData.powerSupply.price +
    formData.chassis.price +
    (formData.fan?.total ?? 0);
  return total;
});

onMounted(() => {
  formData = props.info;
});

watch(props.info, (newVal: AssembleInfo) => {
  formData = { ...newVal };
});
</script>

<style lang="scss" scoped></style>
