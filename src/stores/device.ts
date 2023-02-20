import { defineStore } from "pinia";
import { ref } from "vue";
import { DeviceType } from "./type";

export const useDeviceStore = defineStore("device", {
  state: () => {
    // 当前设备类型 手机、平板、PC
    const deviceType = ref<DeviceType>(DeviceType.DESKTOP);
    // 导航菜单高度
    const navHeight = ref<number>(0);
    return {
      deviceType,
      navHeight,
    };
  },
});
