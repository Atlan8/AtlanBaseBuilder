<template>
  <div style="position: fixed; z-index: 99; width: 100vw" ref="viewRef">
    <nav class="layoutNav shadow">
      <div class="logoView" @click="handleToHome">
        <div class="titleView">
          <div class="title">MAA Copilot</div>
          <el-tag color="rgba(200, 118, 25, 0.1)" style="color: var(--vt-t-logo-dark)">Beta</el-tag>
        </div>
        <div class="splitVertical"></div>
      </div>
      <div class="menuView">
        <el-menu mode="horizontal" :router="true" class="menuList" te @select="handleSelect">
          <div v-for="(item, index) in customRoutes" :key="'route-list-' + index">
            <div v-if="item.children && item.children.length > 0 && !item.meta?.hideChildrenInMenu">
              <el-sub-menu :index="'' + index">
                <template #title>{{ item.meta?.title }}</template>
                <div v-for="(route, idx) in item.children" :key="'route-cell-' + idx">
                  <el-menu-item v-if="!route.meta?.hidden" :index="index + '-' + idx" :route="route">{{ route.meta?.title }}</el-menu-item>
                </div>
              </el-sub-menu>
            </div>
            <el-menu-item :index="'' + index" :route="item" v-else>
              {{ item.meta?.title }}
            </el-menu-item>
          </div>
        </el-menu>
      </div>
      <div>
        <el-button>登录/注册</el-button>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
  import { PageEnum } from '@/enum/pageEnum';
  import { customRoutes } from '@/router';
  import { useDeviceStore } from '@/stores/device';
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const store = useDeviceStore();

  const router = useRouter();

  const viewRef = ref();
  const navRect = ref<DOMRect>();

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };

  const handleToHome = () => {
    router.push({
      path: PageEnum.HOME,
    });
  };

  onMounted(() => {
    console.log(viewRef.value.getBoundingClientRect());
    store.navHeight = viewRef.value.getBoundingClientRect().height;
    navRect.value = viewRef.value.getBoundingClientRect();
  });

  defineExpose({
    navRect,
  });
</script>

<style lang="scss" scoped>
  .el-menu-item {
    color: var(--them-nav-text);
  }
  .el-menu-item.is-active {
    color: var(--them-nav-select);
  }

  .el-sub-menu {
    // 深度选择器 Vue3只能使用这种写法，其他写法会报错
    :deep(.el-sub-menu__title) {
      color: var(--them-nav-text);
    }
  }

  .el-sub-menu.is-active {
    :deep(.el-sub-menu__title) {
      color: var(--them-nav-select) !important;
    }
  }

  @mixin flexRowCenter {
    display: flex;
    align-items: center;
  }
  @mixin flexCenterSpaceBetween {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .layoutNav {
    background-color: var(--them-nav-background);
    color: var(--them-nav-title);
    padding: 10px 30px;
    @include flexRowCenter();

    .logoView {
      @include flexRowCenter();
      cursor: pointer;
      user-select: none;

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
      .menuList {
        width: 100%;
        color: var(--them-nav-text);
        background-color: transparent;
        border: none;
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
</style>
