<template>
  <div class="layoutView">
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
          <div>
            <el-button text :bg="false">创建作业</el-button>
          </div>
        </div>
        <div>
          <el-button>登录/注册</el-button>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script> -->

<script lang="ts" setup></script>

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
  height: 100vh;
  box-sizing: border-box;

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
}
</style>
