<template>
  <div class="container">
    <div>
      <AssembleInfo v-if="!!formData" :info="formData" :is-form="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAssembleEdit } from "./hooks/useAssembleEdit";
import AssembleInfo from "./components/assembleInfo.vue";

const route = useRoute();
const { formData } = useAssembleEdit();

onMounted(() => {
  console.log(route.query.info);
  formData.value = JSON.parse(route.query?.info as string);
});
</script>

<style lang="scss" scoped>
.container {
  width: 60vw;
  margin: 0 auto;
  color: #333;
  padding: 15px 0;

  .header {
    @include flexRowFn(flex-start);
    padding: 15px 0;
  }
}
</style>
