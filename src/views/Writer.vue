<script lang="ts" setup>
import IconMenu from "@/components/icons/IconMenu.vue";
import IconMenuActive from "@/components/icons/MenuActive.vue";
import IconHistory from "@/components/icons/IconHistory.vue";
import IconHistoryActive from "@/components/icons/IconHistoryActive.vue";
import { ref } from "vue";

const selectList = ref([
  {
    value: "menu",
    isActive: true,
    icon: IconMenu,
    activeIcon: IconMenuActive,
  },
  {
    value: "history",
    isActive: false,
    icon: IconHistory,
    activeIcon: IconHistoryActive,
  },
]);

const handleClick = (value: string) => {
  selectList.value.forEach((item) => {
    if (item.value === value) {
      item.isActive = true;
    } else {
      item.isActive = false;
    }
  });
};
</script>

<template>
  <div class="writer">
    <div class="item">
      <div
        @click="handleClick(item.value)"
        :class="[item.isActive ? 'active' : '']"
        v-for="item in selectList"
      >
        <component v-show="item.isActive" :is="item.activeIcon" />
        <component v-show="!item.isActive" :is="item.icon" />
      </div>
    </div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="scss" scoped>
.writer {
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  gap: 0px 10px;
  .item {
    background-color: white;
    border-radius: 20px;
    &:nth-child(1) {
      height: 100%;
      width: 147px;
      padding: 3px;
      div {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &:nth-child(2) {
      height: 100%;
      width: 684px;
    }
    &:nth-child(3) {
      height: 100%;
      flex: 1;
    }
  }
}
.active {
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #273075;
}
</style>
