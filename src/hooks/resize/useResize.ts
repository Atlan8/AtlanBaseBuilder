import { useDeviceStore } from '@/stores/device';
import { DeviceType } from '@/stores/type';
import { onBeforeMount, onUnmounted } from 'vue';

export const useResize = () => {
  const { body, hidden } = document;
  const WIDTH = 998;
  const store = useDeviceStore();
  const isMobile = (): DeviceType => {
    const rect = body.getBoundingClientRect();
    return rect.width - 1 < WIDTH ? (rect.width - 1 < 448 ? DeviceType.MOBILE : DeviceType.PAD) : DeviceType.DESKTOP;
  };
  const resizeHandler = () => {
    const _isMobile = isMobile();
    if (!hidden) {
      store.deviceType = _isMobile;
    }
  };

  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler);
  });
};
