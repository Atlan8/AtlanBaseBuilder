import { getAssembleListById } from "@/api/assemble";
import { ref } from "vue";

import type { AssembleInfo } from "../service";

export const useAssembleEdit = () => {
  const formData = ref<AssembleInfo>({
    id: 0,
    name: "",
    cpu: { name: "", price: 0, link: "" },
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

  /**
   *  获取装机详情
   * @param params
   */
  const getData = ({ id }: { id: number }) => {
    getAssembleListById({ id: id }).then((res) => {
      console.log("--->id: ", res.data.data);
      const { data, errorCode } = res.data;
      if (errorCode === 10000) {
        formData.value = data;
      }
    });
  };
  return {
    formData,
    getData,
  };
};
