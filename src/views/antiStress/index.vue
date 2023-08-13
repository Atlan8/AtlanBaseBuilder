<template>
  <div class="container">
    <Header :title="title" :username="author" />
    <div style="margin-top: 20px">
      <div>评论列表</div>
      <div v-for="(item, index) in comment" :key="'comment-cell-' + index">
        <CommentCell :comment="item" />
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
  import { useService } from './service';
  import Header from './components/Header.vue';
  import CommentCell from './components/CommentCell.vue';

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

  @media (min-width: 1024px) {
    .container {
      width: 750px;
    }
  }
</style>
