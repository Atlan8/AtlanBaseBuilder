<template>
  <div class="commentCell">
    <div class="userView" :style="{ width: userWidth }">
      {{ comment.username }}
    </div>
    <div class="commentView">
      <div>{{ comment.content }}</div>
      <div v-for="(image, ind) in comment.cover" :key="'image-cell-' + ind">
        <img :src="image" :style="{ width: imageWidth }" class="coverCell" />
      </div>
      <div>{{ comment.datetime }}</div>
      <div>{{ comment.ipAddress }}</div>
      <div>{{ comment.device }}</div>
      <div>{{ comment.floor }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceStore } from "@/stores/device";
import { DeviceType } from "@/stores/type";
import { storeToRefs } from "pinia";
import { computed, type PropType } from "vue";
import type { PostCommentInfo } from "../type";
defineProps({
  comment: {
    type: Object as PropType<PostCommentInfo>,
    required: true,
  },
});

const store = useDeviceStore();

const { deviceType } = storeToRefs(store);

const imageWidth = computed(() => {
  console.log("缓存属性", deviceType.value);
  if (deviceType.value === DeviceType.DESKTOP) {
    return "30vw";
  } else {
    return "100%";
  }
});
const userWidth = computed(() => {
  if (deviceType.value === DeviceType.DESKTOP) {
    return "85px";
  } else {
    return "50px";
  }
});
</script>

<style lang="scss" scoped>
.commentCell {
  display: flex;
  align-items: flex-start;

  .userView {
    color: #409eff;
    word-break: break-all;
    margin-right: 15px;
  }

  .commentView {
    flex: 1;
  }

  .coverCell {
    transition: width 500ms linear;
  }
}
</style>
