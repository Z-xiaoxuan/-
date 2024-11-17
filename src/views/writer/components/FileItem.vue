<script setup lang="ts">
import { onMounted, ref } from "vue";
import { type FileInfo } from "@/type";
interface Props {
  file: FileInfo;
}
const props = defineProps<Props>();
const percentage = ref(0);
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
        {{ (file.size / 1024).toFixed(0) }} KB
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
  }
}
</style>
