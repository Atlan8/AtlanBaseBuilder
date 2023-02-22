<template>
  <div class="commentCell">
    <div class="userView" :style="{ width: userWidth }">
      {{ comment.username }}
    </div>
    <div class="commentView">
      <div class="content">{{ comment.content }}</div>
      <div v-for="(image, ind) in comment.cover" :key="'image-cell-' + ind">
        <img :src="image" :style="{ width: imageWidth }" class="coverCell" />
      </div>
      <div class="bottom">
        <div style="width: 10px; height: 1px"></div>
        <div class="bottomDataView">
          <div>ip属地：{{ comment.ipAddress }} &nbsp;&nbsp;</div>
          <div>来自：{{ comment.device }} &nbsp;&nbsp;</div>
          <div>{{ comment.floor }} &nbsp;&nbsp;</div>
          <div>{{ comment.datetime }}</div>
        </div>
      </div>
      <div v-for="(item, index) in comment.reply" :key="'reply-cell-' + index">
        <ReplyCell :reply="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceStore } from "@/stores/device";
import { DeviceType } from "@/stores/type";
import { storeToRefs } from "pinia";
import { computed, type PropType } from "vue";
import type { PostCommentInfo } from "../type";
import ReplyCell from "./ReplyCell.vue";
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
    return "500px";
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
  margin-bottom: 15px;

  .userView {
    color: #409eff;
    word-break: break-all;
    margin-right: 15px;
  }

  .commentView {
    flex: 1;

    .content {
      margin-bottom: 15px;
    }
    .bottom {
      @include flexRowFn(space-between);
      margin-top: 15px;

      .bottomDataView {
        @include flexRowFn(flex-start);
        font-size: 14px;
        color: #999;
      }
    }
  }

  .coverCell {
    transition: width 500ms linear;
  }
}
</style>
