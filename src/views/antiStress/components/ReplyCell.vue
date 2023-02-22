<template>
  <div class="replyInfo">
    <div class="infoContentView">
      <span v-show="!reply.replyUsername">{{ reply.username }}：</span>
      <span v-show="!!reply.replyUsername">{{ reply.username }}&nbsp;</span>
      <span v-show="!!reply.replyUsername"
        >回复 {{ reply.replyUsername }}：</span
      >
      <span>{{ reply.content }}</span>
    </div>
    <div class="flexCenterSpaceBetween">
      <div style="width: 10px; height: 1px"></div>
      <div class="replyDate">{{ reply.datetime }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { PostCommentReplyInfo } from "../type";

defineProps({
  reply: {
    type: Object as PropType<PostCommentReplyInfo>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.flexCenterSpaceBetween {
  @include flexRowFn(space-between);
}

.replyInfo {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;

  .replyDate {
    // font-size: 12px;
    color: #999;
  }
}
</style>
