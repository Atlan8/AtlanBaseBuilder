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
          <div v-show="!!isForm">￥-{{ totalPrice }}</div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  type PropType,
  watch,
  reactive,
  onMounted,
  ref,
  watchEffect,
  onUnmounted,
} from "vue";
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

const totalPrice = ref(0);

/**
 * computed 没有明确响应式对象的某个值，是不会执行更新操作的。如下面的复杂对象，不明确某个属性发生变化，计算属性不生效
 */
// const assembleTotal = computed(() => {
//   const hard = formData.hardDiskList.reduce((prev, cur) => {
//     if (!cur.total) return prev;
//     return prev + cur.total;
//   }, 0);

//   const total =
//     formData.cpu.price +
//     formData.motherboard.price +
//     (formData.memory?.total ?? 0) +
//     formData.radiator.price +
//     hard +
//     formData.graphicsCard.price +
//     formData.powerSupply.price +
//     formData.chassis.price +
//     (formData.fan?.total ?? 0);
//   // debugger;
//   return total;
// });

onMounted(() => {
  formData = { ...props.info };
  console.log(JSON.stringify(props.info));
  totalPrice.value = props.info.total;
});

watch(props.info, (newVal: AssembleInfo) => {
  formData = { ...newVal };
});

/**
 * 监听数据变化，动态调整总价，不能使用computed的替代方案
 */
watch(
  () => formData,
  (newVal) => {
    console.log("表单数据变化", { ...newVal });
    const hard = newVal.hardDiskList.reduce((prev, cur) => {
      if (!cur.total) return prev;
      return prev + cur.total;
    }, 0);

    const total =
      +newVal.cpu.price +
      +newVal.motherboard.price +
      +(newVal.memory?.total ?? 0) +
      +newVal.radiator.price +
      hard +
      +newVal.graphicsCard.price +
      +newVal.powerSupply.price +
      +newVal.chassis.price +
      +(newVal.fan?.total ?? 0);
    // debugger;
    totalPrice.value = total;
  },
  { deep: true, immediate: true }
);

// const stopEffect = watchEffect(() => {
//   console.log("表单数据变化", { ...formData });
//   const hard = formData.hardDiskList.reduce((prev, cur) => {
//     if (!cur.total) return prev;
//     return prev + cur.total;
//   }, 0);

//   const total =
//     +formData.cpu.price +
//     +formData.motherboard.price +
//     +(formData.memory?.total ?? 0) +
//     +formData.radiator.price +
//     hard +
//     +formData.graphicsCard.price +
//     +formData.powerSupply.price +
//     +formData.chassis.price +
//     +(formData.fan?.total ?? 0);
//   // debugger;
//   totalPrice.value = total;
// });

const handleConfirm = () => {
  console.log("---> 修改后的数据", JSON.stringify(formData));
};

onUnmounted(() => {
  // 消除负面影响
  // stopEffect();
});
</script>

<style lang="scss" scoped></style>
