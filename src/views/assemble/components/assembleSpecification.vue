<template>
  <div>
    <div class="specificationView" v-if="!isForm && !!item">
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
        价格：
        <el-input v-model="formData.price" @change="handlePriceChange" type="number"></el-input>
      </div>
      <div v-if="showCount" class="formCell">
        数量：
        <el-input v-model="formData.count" @change="handleCountChange" type="number"></el-input>
      </div>
      <div v-if="showTotal" class="formCell">
        <!-- 总价：<el-input
          v-model="formData.total"
          @change="handleTotalChange"
          type="number"
        ></el-input> -->
        总价：{{ (formData?.count ?? 0) * formData.price }}
      </div>
      <div class="formCell">
        购买链接：
        <el-input v-model="formData.link"></el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { type PropType, ref, onMounted, watch } from 'vue';
  import type { AccessoriesInfoExt } from '../service';

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

  const emit = defineEmits(['update:item']);

  const formData = ref<AccessoriesInfoExt>({ ...props.item });

  const showCount = ref(false);
  const showTotal = ref(false);

  const handleNameChange = (val: string) => {
    emit('update:item', { ...formData.value, name: val });
  };

  const handlePriceChange = (val: number) => {
    console.log('价格发生了变化！');
    // 更新总价
    if (showTotal.value === true) {
      formData.value.total = (formData.value?.count ?? 0) * formData.value.price;
    }
    emit('update:item', { ...formData.value, price: +val });
  };

  const handleCountChange = (val: number) => {
    // 更新总价
    if (showTotal.value === true) {
      formData.value.total = (formData.value?.count ?? 0) * formData.value.price;
    }
    emit('update:item', { ...formData.value, count: +val });
  };

  // const handleTotalChange = (val: number) => {
  //   emit("update:item", { ...formData.value, total: +val });
  // };

  watch(
    () => props.item,
    (newVal: AccessoriesInfoExt) => {
      console.log('父组件的传参更新了！！', { ...newVal });
      if (!newVal) return;
      showCount.value = Reflect.has(newVal, 'count');
      showTotal.value = Reflect.has(newVal, 'total');
      // console.log("父组件的传参更新了！！", { ...newVal });
      formData.value = { ...newVal };
    },
  );

  onMounted(() => {
    if (typeof props.item !== 'object') return;
    showCount.value = Reflect.has(props.item, 'count');
    showTotal.value = Reflect.has(props.item, 'total');
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
