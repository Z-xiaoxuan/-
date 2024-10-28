<script setup lang="ts">
const tableHeaderList = [
  { label: "素材名称", width: 2 },
  { label: "上传日期", width: 2 },
  { label: "素材类型", width: 1 },
  { label: "大小", width: 1 },
];
defineProps({
  fileList: {
    type: Array,
  },
});
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
      <div class="table-item" v-for="item in fileList">
        <div class="name" :style="{ flex: 2 }">{{ item.name }}</div>
        <div class="date" :style="{ flex: 2 }">24/10/45</div>
        <div class="type" :style="{ flex: 1 }">{{ item.type }}</div>
        <div class="size" :style="{ flex: 1 }">
          {{ (item.size / 1024).toFixed(0) }} KB
        </div>
      </div>
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
    .table-item {
      display: flex;
      height: 22px;
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
}
</style>
