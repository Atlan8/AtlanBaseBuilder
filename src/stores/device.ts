import { defineStore } from "pinia";
import { ref } from "vue";
import { DeviceType } from "./type";

export const useDeviceStore = defineStore("device", {
  state: () => {
    const deviceType = ref<DeviceType>(DeviceType.DESKTOP);
    return {
      deviceType,
    };
  },
});
