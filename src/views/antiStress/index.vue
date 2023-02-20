<template>
  <div class="container">
    <div>{{ title }}</div>
    <div>{{ author }}</div>
    <div>
      <div>评论列表</div>
      <div v-for="(item, index) in comment" :key="'comment-cell-' + index">
        <div>{{ item.username }}</div>
        <div>{{ item.content }}</div>
        <div v-for="(image, ind) in item.cover" :key="'image-cell-' + ind">
          <img :src="image" />
        </div>
        <div>{{ item.datetime }}</div>
        <div>{{ item.ipAddress }}</div>
        <div>{{ item.device }}</div>
        <div>{{ item.floor }}</div>
      </div>
    </div>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent } from "vue";
import { useService } from "./service";

export default defineComponent({
  setup() {
    const data = useService();
    return { data };
  },
});
</script> -->

<script lang="ts" setup>
import { useService } from "./service";

const { title, author, comment } = useService();
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 64vw;
  height: 100%;
  background-color: #f5f5f5;
  color: #333;
  padding: 15px;
}
</style>
