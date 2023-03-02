<template>
  <div>
    <div v-if="formData">
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
          <div v-show="!!isForm">￥{{ totalPrice }}</div>
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
import { type PropType, onMounted, ref, computed } from "vue";
import type { AssembleInfo } from "../service";
import AssembleSpecification from "./assembleSpecification.vue";
// import data from "../data.json";

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

let formData = ref<AssembleInfo>();

// const totalPrice = ref(0);

/**
 * computed 监听 ref 对象，使用 reactive 的不生效
 */
const totalPrice = computed(() => {
  if (!formData.value) return 0;
  const hard = formData.value.hardDiskList.reduce((prev, cur) => {
    if (!cur.count) return prev;
    return prev + cur.count * cur.price;
  }, 0);

  const cpuPrice = +formData.value.cpu.price;
  const motherboardPrice = +formData.value.motherboard.price;
  const memoryPrice =
    +(formData.value.memory?.count ?? 0) * +formData.value.memory.price;
  const radiatorPrice = +formData.value.radiator.price;
  const graphicsCardPrice = +formData.value.graphicsCard.price;
  const powerSupplyPrice = +formData.value.powerSupply.price;
  const fanPrice =
    +(formData.value.fan?.count ?? 0) * +formData.value.fan.price;
  const chassisPrice = +formData.value.chassis.price;

  console.log("表单数据变化", formData);

  const total =
    hard +
    cpuPrice +
    motherboardPrice +
    memoryPrice +
    radiatorPrice +
    graphicsCardPrice +
    powerSupplyPrice +
    chassisPrice +
    fanPrice;
  // debugger;
  return total;
});

onMounted(() => {
  formData.value = props.info;
  console.log(JSON.stringify(props.info));
  // totalPrice.value = props.info.total;
});

// watch(props.info, (newVal: AssembleInfo) => {
//   formData = { ...newVal };
// });

/**
 * 监听数据变化，动态调整总价 监听 ref 对象，使用 reactive 的不生效
 */
// watch(
//   formData,
//   (newVal) => {
//     console.log("表单数据变化", { ...newVal });
//     if (!newVal) return;
//     const hard = newVal.hardDiskList.reduce((prev, cur) => {
//       if (!cur.total) return prev;
//       return prev + cur.total;
//     }, 0);

//     const total =
//       +newVal.cpu.price +
//       +newVal.motherboard.price +
//       +(newVal.memory?.total ?? 0) +
//       +newVal.radiator.price +
//       hard +
//       +newVal.graphicsCard.price +
//       +newVal.powerSupply.price +
//       +newVal.chassis.price +
//       +(newVal.fan?.total ?? 0);
//     // debugger;
//     totalPrice.value = total;
//   },
//   { deep: true, immediate: true, flush: "sync" }
// );

// const handleCPUChange = (val: AccessoriesInfoExt, type: string) => {
//   formData.value[type] = val;
//   console.log(val, type, formData.value.cpu);
// };

const handleConfirm = () => {
  console.log("---> 修改后的数据", JSON.stringify(formData.value));
  // data.push(JSON.parse(JSON.stringify(formData.value)));
};
</script>

<style lang="scss" scoped></style>
