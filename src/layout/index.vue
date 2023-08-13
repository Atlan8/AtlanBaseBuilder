<template>
  <div class="layoutView">
    <nav-menu ref="navRef"></nav-menu>
    <div :style="{ width: '100%', height: navHeight + 'px' }"></div>
    <router-view></router-view>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script> -->

<script lang="ts" setup>
  import { useResize } from '@/hooks/resize/useResize';
  import { useDeviceStore } from '@/stores/device';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import NavMenu from './components/Header.vue';

  // 监听屏幕尺寸变化
  useResize();

  const navRef = ref();
  const store = useDeviceStore();
  const { navHeight } = storeToRefs(store);
</script>

<style lang="scss" scoped>
  @mixin flexRowCenter {
    display: flex;
    align-items: center;
  }
  @mixin flexCenterSpaceBetween {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .layoutView {
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;

    .layoutNav {
      background-color: rgb(244 244 245 / var(--tw-bg-opacity));
      color: #333;
      padding: 10px 30px;
      @include flexRowCenter();

      .logoView {
        @include flexRowCenter();
        .splitVertical {
          width: 1px;
          height: 24px;
          background: rgb(229 231 235 / var(--tw-bg-opacity));
          margin: 0 15px;
        }
      }

      .menuView {
        flex: 1;
        @include flexCenterSpaceBetween();

        .routerButton {
          @include flexRowCenter();
        }
      }

      .titleView {
        @include flexRowCenter;

        .title {
          font-weight: 700;
          font-size: 1.125rem;
          margin-right: 3px;
        }
      }
    }
    .shadow {
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
</style>
