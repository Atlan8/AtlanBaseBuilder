import { useService } from "../service";

export const useAssemble = () => {
  const { assembleList } = useService();

  return {
    assembleList,
  };
};
