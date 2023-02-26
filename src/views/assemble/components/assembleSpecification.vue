<template>
  <div>
    <div class="specificationView" v-show="!isForm">
      <div>名称：{{ item.name }}</div>
      <div>价格：￥{{ item.price }}</div>
      <div v-if="item.count">数量：x{{ item.count }}</div>
      <div v-if="item.total">总价：￥{{ item.total }}</div>
      <div>购买链接：{{ item.link }}</div>
    </div>
    <div v-show="!!isForm">
      <div class="formCell">
        <div>名称：</div>
        <el-input v-model="formData.name" @change="handleNameChange"></el-input>
      </div>
      <div class="formCell">
        价格：<el-input v-model="formData.price"></el-input>
      </div>
      <div class="formCell">
        购买链接：<el-input v-model="formData.link"></el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, ref } from "vue";
import type { AccessoriesInfoExt } from "../service";

const props = defineProps({
  item: {
    type: Object as PropType<AccessoriesInfoExt>,
    required: true,
  },
  isForm: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:change"]);

const formData = ref<AccessoriesInfoExt>(props.item);

const handleNameChange = (val: string) => {
  emit("update:change", { ...formData, name: val });
};
</script>

<style lang="scss" scoped>
.specificationView {
  text-align: left;
}
.formCell {
  @include flexRowFn(flex-start);
  white-space: nowrap;
}
</style>
