import { onBeforeMount, onBeforeUnmount } from "vue";

/**
 * 全局异常捕获
 * 通过全局监听 unhandledrejection 来实现
 * 开启 sourceMap 就能定位到具体的代码报错行数
 * return PromiseRejectionEvent
 */
export const useErrorCatch = () => {
  onBeforeMount(() => {
    window.addEventListener("unhandledrejection", (e: Event) => {
      // 阻止事件冒泡，在这里处理
      e.stopPropagation();
      console.log("---> 报错信息", e);
      // todo 上报异常监控
    });
  });
  onBeforeUnmount(() => {
    window.addEventListener("unhandledrejection", () => {
      console.log("unhandledrejection 解除监听!!!");
    });
  });
  // return {};
};
