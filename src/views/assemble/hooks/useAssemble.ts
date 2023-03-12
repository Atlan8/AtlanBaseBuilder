import { ref } from "vue";
import { useRouter } from "vue-router";
import { useService, type AssembleInfo } from "../service";
import { PageEnum } from "@/enum/pageEnum";
import { ElMessage } from "element-plus";

export const useAssemble = () => {
  const { assembleList } = useService();

  // 路由跳转时，先获取router对象，跟Vue2的this.$router类似
  const router = useRouter();

  const showInfoDialog = ref(false);
  const assembleInfo = ref<AssembleInfo>();
  const isEditInfo = ref(false);

  const handleShowInfo = (data: AssembleInfo, isForm: boolean = false) => {
    if (isForm) {
      // 非命名路由，使用query传参，命名路由使用params传参
      if (!data) {
        ElMessage.warning("请传入装机清单！");
        return;
      }
      router.push({
        path: PageEnum.ASSEMBLE_EDIT,
        query: {
          assembleId: data.id,
        },
      });
      return;
    }
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
