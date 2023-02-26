<template>
  <div>
    <div>名称：{{ item.name }}</div>
    <div>价格：￥{{ item.price }}</div>
    <div v-if="item.count">数量：x{{ item.count }}</div>
    <div v-if="item.total">总价：￥{{ item.total }}</div>
    <div>购买链接：{{ item.link }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { AccessoriesInfo, AccessoriesInfoExt } from "../service";

defineProps({
  item: {
    type: Object as PropType<AccessoriesInfo | AccessoriesInfoExt>,
    required: true,
  },
});
</script>
