<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { type FileInfo } from "@/type";
interface Props {
  file: FileInfo;
}

const props = defineProps<Props>();
const percentage = ref(0);
const size = computed(() => {
  return props.file.size < 1024
    ? `${props.file.size} B`
    : props.file.size < 1048576
    ? `${(props.file.size / 1024).toFixed(2)} KB`
    : props.file.size < 1073741824
    ? `${(props.file.size / 1048576).toFixed(2)} MB`
    : `${(props.file.size / 1073741824).toFixed(2)} GB`;
});
onMounted(() => {
  setInterval(() => {
    if (props.file.id) {
      percentage.value = 100;
      return;
    }
    percentage.value += 2;
  }, 800);
});
</script>

<template>
  <div class="file-item">
    <div style="position: relative" v-if="!file.id">
      <el-progress
        :show-text="false"
        style="position: relative; top: 10px"
        :text-inside="true"
        :percentage="percentage"
      />
    </div>
    <div v-else class="item">
      <div class="name" :style="{ flex: 2 }">{{ file.name }}</div>
      <div class="date" :style="{ flex: 2 }">
        {{ new Date().toDateString() }}
      </div>
      <div class="type" :style="{ flex: 1 }">
        {{ file.type.split("/").pop() }}
      </div>
      <div class="size" :style="{ flex: 1 }">
        {{ size }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-item {
  position: relative;
  height: 22px;
  width: 100%;
  .item {
    display: flex;
    font-size: 14px;
    align-items: center;
    letter-spacing: 1px;
    gap: 10px;
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .date {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .type {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .size {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
