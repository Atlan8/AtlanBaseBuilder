import http from "@/utils/http/index";
import { onMounted, ref } from "vue";

export interface AccessoriesInfo {
  name: string; // CPU名称
  price: number; // CPU单价
  link: string; // CPU购买链接
}

export interface AccessoriesInfoExt extends AccessoriesInfo {
  count: number; // 硬盘数量
  total: number; // 硬盘总价
}

export interface AssembleInfo {
  id: number;
  name: string; // 方案名
  cpu: AccessoriesInfo; // CPU
  motherboard: AccessoriesInfo; // 主板
  memory: AccessoriesInfoExt; // 内存
  radiator: AccessoriesInfo; // 散热器
  hardDiskList: AccessoriesInfoExt[]; // 硬盘数组
  graphicsCard: AccessoriesInfo; // 显卡
  powerSupply: AccessoriesInfo; // 电源
  chassis: AccessoriesInfo; // 机箱
  fan: AccessoriesInfoExt; // 风扇
  total: number; // 总价
  timestramp: number; // 创建时间戳
  datetime: string; // 创建时间
}

export const useService = () => {
  const assembleList = ref<AssembleInfo[]>();
  onMounted(() => {
    http("./src/views/assemble/data.json").then((res) => {
      console.log("---> 请求数据: ", res);
      const { errorCode, data } = res;
      if (errorCode === 0) {
        assembleList.value = data;
      }
    });
  });

  return {
    assembleList,
  };
};
