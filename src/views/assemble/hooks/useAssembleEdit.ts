import { getAssembleListById } from "@/api/assemble";
import { ref } from "vue";

import type { AssembleInfo } from "../service";

export const useAssembleEdit = () => {
  const formData = ref<AssembleInfo>();

  /**
   *  获取装机详情
   * @param params
   */
  const getData = ({id}: {id: number}) => {
    getAssembleListById({id: id}).then(res => {
      console.log('--->id: ', res.data.data)
      const {data, errorCode} = res.data
      if (errorCode === 10000) {
        formData.value = data
      }
    })
  }

  return {
    formData,
    getData
  };
};
