import { ref } from "vue";
import { useService, type AssembleInfo } from "../service";

export const useAssemble = () => {
  const { assembleList } = useService();

  const showInfoDialog = ref(false);
  const assembleInfo = ref<AssembleInfo>();

  const handleShowInfo = (data: AssembleInfo) => {
    assembleInfo.value = data;
    showInfoDialog.value = true;
  };
  const handleClose = () => {
    showInfoDialog.value = false;
    assembleInfo.value = undefined;
  };

  return {
    assembleList,
    showInfoDialog,
    assembleInfo,
    handleShowInfo,
    handleClose,
  };
};
