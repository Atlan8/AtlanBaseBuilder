<template>
  <div class="container">
    <div>{{ title }}</div>
    <div>{{ author }}</div>
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
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
