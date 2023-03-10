import { type PropType, onMounted, ref, computed, defineProps, type ExtractPropTypes } from "vue";
import { useRouter } from "vue-router";
import type { AssembleInfo } from "../service";

/**
 * 装机详情的hook
 * @returns 
 */
export const useAssembleInfo = (props: Readonly<ExtractPropTypes<{
  info: {
      type: PropType<AssembleInfo>;
      required: true;
  };
  isForm: {
      type: BooleanConstructor;
      default: boolean;
  };
}>>) => {

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
    // console.log(process.env);
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