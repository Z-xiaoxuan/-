<script lang="ts" setup>
import IconMenu from "@/components/icons/IconMenu.vue";
import IconMenuActive from "@/components/icons/MenuActive.vue";
import IconHistory from "@/components/icons/IconHistory.vue";
import IconHistoryActive from "@/components/icons/IconHistoryActive.vue";
import IconTry from "@/assets/reTry.svg";
import IconEnter from "@/assets/enter.svg";
import IconSystem from "@/assets/system.svg";
import List from "./components/List.vue";
import { ref, computed, markRaw, onMounted } from "vue";
import { useKimi } from "@/hooks/kimi";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const {
  fileChat,
  filesAnsly,
  generateFilesAnalyze,
  generateLoading,
  digaoText,
} = useKimi();

const selectList = ref([
  {
    value: "menu",
    isActive: true,
    icon: markRaw(IconMenu),
    activeIcon: markRaw(IconMenuActive),
  },
  {
    value: "history",
    isActive: false,
    icon: markRaw(IconHistory),
    activeIcon: markRaw(IconHistoryActive),
  },
]);
const value = ref("");
const activeItem = computed(() => {
  return selectList.value.find((item) => item.isActive);
});

const chatRef = ref();
const isWheel = ref(false);

function autoScroll() {
  // if (
  //   boxRef.value.scrollHeight - boxRef.value.scrollTop ===
  //   boxRef.value.clientHeight
  // ) {
  //   isWheel.value = false; // 已经滚动到底部，无需继续滚动
  // }
  if (isWheel.value) return;
  chatRef.value.scrollIntoView({ behavior: "smooth", block: "end" });
  // 请求下一帧动画
  requestAnimationFrame(autoScroll);
}
const handleScroll = () => {
  isWheel.value = true;
};

const handleClick = (value: string) => {
  selectList.value.forEach((item) => {
    if (item.value === value) {
      item.isActive = true;
    } else {
      item.isActive = false;
    }
  });
};
const scrollElement = document.documentElement;

const handleGenerate = () => {
  if ((filesAnsly.value = "")) {
    generateFilesAnalyze();
  } else {
    filesAnsly.value = "";
    generateFilesAnalyze();
  }
};

onMounted(() => {
  autoScroll();
});
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
    <div class="item" style="position: relative">
      <List :active="activeItem?.value" />
    </div>
    <div
      class="item ai"
      style="overflow: auto; position: relative"
      @wheel="handleScroll"
    >
      <div class="input">
        <img :src="IconSystem" />
        <el-input
          @keydown.enter.prevent="generateFilesAnalyze"
          v-model="digaoText"
          type="textarea"
          resize="none"
          rows="1"
        />
        <el-button
          @click="handleGenerate"
          style="height: 40px; width: 45px; padding: 0"
          color="#273075"
        >
          <img v-if="!filesAnsly" style="height: 20px" :src="IconEnter" />
          <img v-else style="height: 30px" :src="IconTry" />
        </el-button>
      </div>
      <div v-loading="generateLoading" ref="chatRef">
        <MdPreview editorId="preview-only" :modelValue="filesAnsly" />
        <MdCatalog editorId="preview-only" :scrollElement="scrollElement" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-editor-catalog {
  display: none;
}
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
  .input {
    position: relative;
    margin: 20px auto;
    border-radius: 10px;
    width: 90%;
    height: 60px;
    color: #273075;
    padding: 4px;
    background-color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 2px 0 5px #5c66b2, -2px 0 5px #acece8;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1; /* 放置在元素后面 */
      background: linear-gradient(to right, #a8ff78, #78ffd6);
      transform: scale(1.2);
    }
  }
}
.active {
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #273075;
}
.ai {
  // &::-webkit-scrollbar {
  //   display: block;
  // }
  scrollbar-width: thin;
}
:deep(.el-textarea__inner) {
  box-shadow: 0 0 0 transparent;
}
:deep(.el-textarea__inner:hover) {
  box-shadow: 0 0 0 transparent;
}
:deep(.el-textarea__inner:focus) {
  box-shadow: 0 0 0 transparent;
}
.el-textarea {
  box-shadow: 0 0 0 transparent;
  border: 0;
}
</style>
