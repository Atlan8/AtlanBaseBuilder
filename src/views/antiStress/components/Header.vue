<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ username }}</div>
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
