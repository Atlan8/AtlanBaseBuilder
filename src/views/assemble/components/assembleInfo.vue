<template>
  <div>
    <div v-if="formData">
      <el-form :model="props.info" label-width="150px" label-position="right">
        <el-form-item label="方案名称">
          <el-input v-model="formData.name" style="width: 250px" v-show="props.isForm"></el-input>
          <div v-show="!props.isForm">{{ formData.name }}</div>
        </el-form-item>
        <el-form-item label="CPU">
          <div>
            <AssembleSpecification v-model:item="formData.cpu" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="主板">
          <div>
            <AssembleSpecification v-model:item="formData.motherboard" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="内存">
          <div>
            <AssembleSpecification v-model:item="formData.memory" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="散热器">
          <div>
            <AssembleSpecification v-model:item="formData.radiator" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="硬盘">
          <div>
            <div v-for="(item, index) in formData.hardDiskList" :key="'hard-cell-' + index">
              <AssembleSpecification v-model:item="formData.hardDiskList[index]" :is-form="props.isForm" />
            </div>
          </div>
        </el-form-item>
        <el-form-item label="显卡">
          <div>
            <AssembleSpecification v-model:item="formData.graphicsCard" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="电源">
          <div>
            <AssembleSpecification v-model:item="formData.powerSupply" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="机箱">
          <div>
            <AssembleSpecification v-model:item="formData.chassis" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="风扇">
          <div>
            <AssembleSpecification v-model:item="formData.fan" :is-form="props.isForm" />
          </div>
        </el-form-item>
        <el-form-item label="总价">
          <div v-show="!props.isForm">￥{{ formData.total }}</div>
          <div v-show="!!props.isForm">￥{{ totalPrice }}</div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
          <el-button @click="handleGoBack">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAssembleInfo } from '../hooks/useAssembleInfo';
  import AssembleSpecification from './assembleSpecification.vue';
  import type { PropType } from 'vue';
  import type { AssembleInfo } from '../service';

  const props = defineProps({
    info: {
      type: Object as PropType<AssembleInfo>,
      required: true,
    },
    isForm: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['confirm']);

  const { formData, totalPrice, handleConfirm, handleGoBack } = useAssembleInfo({
    props,
    emit,
  });
</script>

<style lang="scss" scoped></style>
