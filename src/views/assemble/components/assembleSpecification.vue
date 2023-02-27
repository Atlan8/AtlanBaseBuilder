<template>
  <div>
    <div class="specificationView" v-show="!isForm">
      <div>名称：{{ item.name }}</div>
      <div>价格：￥{{ item.price }}</div>
      <div v-if="showCount">数量：x{{ item.count }}</div>
      <div v-if="showTotal">总价：￥{{ item.total }}</div>
      <div>购买链接：{{ item.link }}</div>
    </div>
    <div v-show="!!isForm">
      <div class="formCell">
        <div>名称：</div>
        <el-input v-model="formData.name" @change="handleNameChange"></el-input>
      </div>
      <div class="formCell">
        价格：<el-input
          v-model="formData.price"
          @change="handlePriceChange"
          type="number"
        ></el-input>
      </div>
      <div v-if="showCount" class="formCell">
        数量：<el-input
          v-model="formData.count"
          @change="handleCountChange"
          type="number"
        ></el-input>
      </div>
      <div v-if="showTotal" class="formCell">
        总价：<el-input
          v-model="formData.total"
          @change="handleTotalChange"
          type="number"
        ></el-input>
      </div>
      <div class="formCell">
        购买链接：<el-input v-model="formData.link"></el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, ref, onMounted } from "vue";
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

const showCount = ref(false);
const showTotal = ref(false);

const handleNameChange = (val: string) => {
  emit("update:change", { ...formData, name: val });
};

const handlePriceChange = (val: number) => {
  emit("update:change", { ...formData, price: +val });
};

const handleCountChange = (val: number) => {
  emit("update:change", { ...formData, count: +val });
};

const handleTotalChange = (val: number) => {
  emit("update:change", { ...formData, total: +val });
};

onMounted(() => {
  showCount.value = Reflect.has(props.item, "count");
  showTotal.value = Reflect.has(props.item, "total");
});
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
