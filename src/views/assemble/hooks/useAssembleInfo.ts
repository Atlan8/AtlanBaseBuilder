import { editAssembleInfo } from "@/api/assemble";
import { ElMessage } from "element-plus";
import { type PropType, onMounted, ref, computed, type ExtractPropTypes } from "vue";
import { useRouter } from "vue-router";
import type { AssembleInfo } from "../service";
import type { AssembleInfoProps } from "../type";

/**
 * 装机详情的hook
 * @param props 组件的props传参，需要在组件中定义，不能在hook中定义，会报错
 * @returns 
 */
export const useAssembleInfo = ({props, emit}:AssembleInfoProps) => {

  const router = useRouter();

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
    // 动态更新数据
    formData.value.total = total
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
    if (!formData.value) {
      ElMessage.error('装机表单不能为空')
      return
    }
    editAssembleInfo(formData.value)
    // console.log(process.env);
    emit('confirm', '点击确定')
  };

  const handleGoBack = () => {
    router.go(-1)
  }

  return {
    props,
    formData,
    totalPrice,
    handleConfirm,
    handleGoBack
  }
}