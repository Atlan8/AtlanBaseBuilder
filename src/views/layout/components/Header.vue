<template>
  <div style="position: fixed; z-index: 9999; width: 100vw" ref="viewRef">
    <nav class="layoutNav shadow">
      <div class="logoView">
        <div class="titleView">
          <div class="title">MAA Copilot</div>
          <el-tag color="rgba(200, 118, 25, 0.1)" style="color: #935610"
            >Beta</el-tag
          >
        </div>
        <div class="splitVertical"></div>
      </div>
      <div class="menuView">
        <div class="routerButton">
          <div style="margin-right: 5px">
            <el-button text :bg="true">首页</el-button>
          </div>
          <div style="margin-right: 5px">
            <el-button text :bg="true" @click="handleToAnti"
              >评论列表</el-button
            >
          </div>
          <div>
            <el-button text :bg="false">创建作业</el-button>
          </div>
        </div>
        <div>
          <el-button>登录/注册</el-button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
import { useDeviceStore } from "@/stores/device";
import { onMounted, ref } from "vue";

const store = useDeviceStore();

const viewRef = ref();
const navRect = ref<DOMRect>();

const handleToAnti = () => {
  router.push({
    path: "/antiStress",
  });
};

onMounted(() => {
  console.log(viewRef.value.getBoundingClientRect());
  store.navHeight = viewRef.value.getBoundingClientRect().height;
});

defineExpose({
  navRect,
});
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
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
