<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Message from "./components/Message.vue";
import IconSend from "@/components/icons/IconSend.vue";
import { useKimi } from "@/hooks/kimi";

const { chat, messageHistoryList } = useKimi();

watch(
  messageHistoryList,
  () => {
    console.log("改变了",messageHistoryList.value)
    if (
      boxRef.value.scrollHeight -
        boxRef.value.scrollTop -
        boxRef.value.clientHeight >
      200
    ) {
      console.log("到底了");
    } else {
      setTimeout(() => {
        chatRef.value.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    }
  },
  {
    deep: true,
  }
);

const textarea2 = ref("");
const chatRef = ref();
const boxRef = ref();
const isWheel = ref(false);

const handleSend = () => {
  chat(textarea2.value);
  textarea2.value = "";
  isWheel.value = false;
  setTimeout(() => {
    chatRef.value.scrollIntoView({ behavior: "smooth", block: "end" });
  });
};
</script>

<template>
  <div class="chat">
    <div class="main">
      <div ref="boxRef" class="chat-box">
        <div ref="chatRef">
          <Message v-for="item in messageHistoryList" :message="item"></Message>
        </div>
      </div>
      <div class="input">
        <el-input
          resize="none"
          v-model="textarea2"
          style="flex: 1"
          :autosize="{ minRows: 1, maxRows: 2 }"
          type="textarea"
          placeholder="在这里输入..."
          @keydown.enter.prevent="handleSend"
        />
        <div class="button" @click="handleSend">
          <IconSend style="height: 50%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat {
  height: 100%;
  width: 100%;
  padding: 35px;
  .main {
    height: 100%;
    width: 60%;
    margin: 0 auto;

    .input {
      min-height: 60px;
      width: 100%;
      border-radius: 50px;
      background-color: rgb(255, 255, 255);
      display: flex;
      align-items: center;
      padding-left: 20px;
      textarea {
        flex: 1;
        max-height: 180px;
        padding: 10px 5px;
        outline: none;
        border: 0;
        resize: none;
        scrollbar-width: thin; /* 细滚动条 */
      }

      textarea::placeholder {
        color: #747cbc;
        font-weight: 600;
      }
      .button {
        height: 58px;
        width: 120px;
        border-radius: 50px;
        background: #273075;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .chat-box {
      height: calc(100% - 60px);
      padding: 0 50px;
      margin-bottom: 20px;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
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
