import { ref } from "vue";
import { useService, type AssembleInfo } from "../service";

export const useAssemble = () => {
  const { assembleList } = useService();

  const showInfoDialog = ref(false);
  const assembleInfo = ref<AssembleInfo>();
  const isEditInfo = ref(false);

  const handleShowInfo = (data: AssembleInfo, isForm: boolean = false) => {
    assembleInfo.value = { ...data };
    showInfoDialog.value = true;
    isEditInfo.value = isForm;
  };
  const handleClose = () => {
    showInfoDialog.value = false;
    isEditInfo.value = false;
    assembleInfo.value = undefined;
  };

  return {
    assembleList,
    showInfoDialog,
    assembleInfo,
    isEditInfo,
    handleShowInfo,
    handleClose,
  };
};
