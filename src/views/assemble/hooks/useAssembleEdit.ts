import { ref } from "vue";

import type { AssembleInfo } from "../service";

export const useAssembleEdit = () => {
  const formData = ref<AssembleInfo>();

  return {
    formData,
  };
};
