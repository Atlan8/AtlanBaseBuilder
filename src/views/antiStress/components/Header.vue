<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="username">{{ username }}</div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .title {
    font-size: 28px;
    font-weight: 600;
  }

  .username {
    color: #409eff;
  }
</style>
