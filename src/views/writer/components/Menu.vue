<script setup lang="ts">
import { ref, onMounted } from "vue";
import FileItem from "./FileItem.vue";
import { type FileInfo } from "@/type";
const tableHeaderList = [
  { label: "素材名称", width: 2 },
  { label: "上传日期", width: 2 },
  { label: "素材类型", width: 1 },
  { label: "大小", width: 1 },
];

interface Props {
  files: FileInfo[];
}
defineProps<Props>();
</script>

<template>
  <div class="menu">
    <div class="tableHeader">
      <div
        class="item"
        v-for="item in tableHeaderList"
        :style="{ flex: item.width }"
      >
        {{ item.label }}
      </div>
    </div>

    <div class="tableBody">
      <FileItem v-for="item in files" :key="item.name" :file="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;

  .tableHeader {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 15px 0;
    .item {
      height: 40px;
      line-height: 40px;
      font-size: 17px;
      font-weight: 400;
      color: #7c7c7c;
      border-right: 2px solid #f1f1f1;
    }
  }
  .tableBody {
    width: 100%;
  }
}
</style>
