<template>
  <div class="homeView">
    <el-card class="card"> 我是卡片{{ deviceType }} </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useResize } from "@/hooks/resize/useResize";
import { useDeviceStore } from "@/stores/device";
import { storeToRefs } from "pinia";
import { getData } from "./data";
import { useErrorCatch } from "@/hooks/errorCatch/useErrorCatch";
const store = useDeviceStore();
const { deviceType } = storeToRefs(store);
useResize();
useErrorCatch();
getData();
</script>

<style lang="scss" scoped>
@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.homeView {
  margin: 0 auto;
  @include flexCenter;
  background-color: #0c5ba9;
  height: 100%;
  .card {
    width: 20rem;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 0 0 1px rgb(17 20 24 / 15%);
    padding: 20px;
    transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
      box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  }
}
</style>
