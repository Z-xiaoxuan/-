<script setup lang="ts">
import IconM from "@/components/icons/IconM.vue";
import IconH from "@/components/icons/IconH.vue";
import IconUpload from "@/components/icons/IconUpload.vue";
import IconUploadActive from "@/components/icons/IconUploadActive.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import IconDownloadActive from "@/components/icons/IconDownloadActive.vue";
import Menu from "./Menu.vue";
import DiGao from "./DiGao.vue";
import { ref } from "vue";
import { useKimi } from "@/hooks/kimi";
// import type { UploadProgressEvent } from "element-plus";

defineProps({
  active: {
    type: String,
  },
});

const { uploadFileList, fileList } = useKimi();

const isMouseDown = ref(false);
const handleUpload = (event: Event) => {
  const uploadDom = event.target;
  const selectFileList = (uploadDom as any).files;
  uploadFileList(selectFileList);
};
</script>

<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <IconM v-if="active === 'menu'" /><span v-if="active === 'menu'"
          >目录</span
        >
        <IconH v-if="active === 'history'" /><span
          v-if="active === 'history'"
          style="margin-left: 3px"
          >底稿</span
        >
      </div>
      <label
        @mouseover="isMouseDown = true"
        @mouseout="isMouseDown = false"
        class="right"
        v-if="active === 'menu'"
      >
        <IconUpload v-show="!isMouseDown" /><IconUploadActive
          v-show="isMouseDown"
        /><span :style="{ color: isMouseDown ? '#273075' : '#7c7c7c' }"
          >上传素材</span
        >

        <input
          type="file"
          style="display: none"
          multiple
          @change="handleUpload"
        />
      </label>
      <div
        @mouseover="isMouseDown = true"
        @mouseout="isMouseDown = false"
        class="right"
        v-if="active === 'history'"
      >
        <IconDownload v-show="!isMouseDown" /><IconDownloadActive
          v-show="isMouseDown"
        /><span :style="{ color: isMouseDown ? '#273075' : '#7c7c7c' }"
          >一键下载数据</span
        >
      </div>
    </div>
    <div class="body">
      <Menu v-if="active === 'menu'" :files="fileList" />
      <DiGao v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  height: 100%;
  width: 100%;
  padding: 20px;
  .header {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 2px solid #f1f1f1;
    .left {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #273075;
      span {
        font-size: 22px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      font-weight: bolder;
      letter-spacing: 2px;
      span {
        margin-left: 5px;
      }
    }
  }
  .body {
    height: calc(100% - 40px);
    width: 100%;
    overflow: auto;
    //   scrollbar-width: thin;
    &::-webkit-scrollbar {
      display: block;
    }
  }
}
</style>
