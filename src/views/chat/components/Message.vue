<script setup lang="ts">
import IconSystem from "@/components/icons/IconSystem.vue";
import IconUser from "@/components/icons/IconUser.vue";
import { type Message } from "@/type";
import { onMounted, watch } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

interface Props {
  message: Message;
}

defineProps<Props>();

const scrollElement = document.documentElement;
</script>

<template>
  <div class="message" :class="[{ self: message.role === 'user' }]">
    <div class="avatar">
      <IconSystem
        v-if="message.role === 'assistant'"
        style="height: 100%"
      /><IconUser v-else style="height: 100%" />
    </div>
    <div class="content">
      <div class="text" style="max-width: 100%; word-wrap: break-all">
        <span v-if="message.role === 'user'">{{ message.content }}</span>
        <MdPreview
          v-if="message.role !== 'user'"
          editorId="preview-only"
          :modelValue="message.content"
        />
        <!-- <MdCatalog
          v-if="message.role !== 'user'"
          editorId="preview-only"
          :scrollElement="scrollElement"
        /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  width: 100%;
  min-height: 60px;
  display: flex;
  //   background-color: burlywood;
  margin: 20px 0;

  .avatar {
    height: 60px;
    aspect-ratio: 1 / 1;
  }
  .content {
    max-width: 80%;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    .text {
      width: 100%;
      text-wrap: wrap;
      overflow-wrap: break-word;
    }
  }
}
.self {
  flex-direction: row-reverse;
  .content {
    background: #273075;
    color: white;
  }
}
</style>
