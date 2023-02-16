<template>
  <div class="homeView">
    <el-card class="card"> 我是卡片 </el-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.homeView {
  margin: 0 auto;
  @include flexCenter;
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
