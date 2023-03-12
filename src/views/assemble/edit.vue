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

// import jsonFileOperator from "@/utils/jsonFileOperator";

const route = useRoute();
const { formData,getData } = useAssembleEdit();

onMounted(() => {
  // console.log(route.query.info);
  // formData.value = JSON.parse(route.query?.info as string);
  // jsonFileOperator("./data.json").then((res) => {
  //   console.log("---> json 文件操作", res);
  // });
  getData({id: +(route.query?.assembleId ?? 0)})
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
