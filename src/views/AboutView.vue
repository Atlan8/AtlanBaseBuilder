<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <p>{{ userInfo.name }}</p>
    <el-button type="primary" round @click="handleChangeName">按钮</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const store = useUserStore();

// 使用pinia的钩子函数才能保持响应式
const { userInfo } = storeToRefs(store);

const handleChangeName = () => {
  // store.changeName("hhhh");
  store.$patch((state) => {
    state.userInfo.name = "hhhh";
  });
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="scss" scoped>
.title {
  color: #000;
}
</style>
