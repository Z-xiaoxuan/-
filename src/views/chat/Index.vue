<script setup lang="ts">
import { onMounted, ref } from "vue";
import Message from "./components/Message.vue";
import IconSend from "@/components/icons/IconSend.vue";
import { useKimi } from "@/hooks/kimi";

const { chat, messageHistoryList } = useKimi();
const messageList = ref([
  {
    role: "assistant",
    content:
      "Hi，我是空天AI～ /n 很高兴遇见你！你可以问我一切有关无人机领域的问题，我来帮你解答！",
  },
  {
    role: "user",
    content:
      "Hi，我是空天AI～ /n 很高兴遇见你！你可以问我一切有关无人机领域的问题，我来帮你解答！",
  },
]);

const textarea2 = ref("");

const handleSend = () => {
  console.log("dsadsa", textarea2.value);
  //   messageList.value.push({
  //     type: "self",
  //     value: textarea2.value,
  //   });
  //   textarea2.value = "";chat
  chat(textarea2.value);
  textarea2.value = "";
};
</script>

<template>
  <div class="chat">
    <div class="main">
      <div class="chat-box">
        <Message v-for="item in messageHistoryList" :message="item"></Message>
      </div>
      <div class="input">
        <!-- <textarea
          resize="none"
          :value="textarea2"
          placeholder="在这里输入..."
          rows="1"
        ></textarea> -->
        <el-input
          resize="none"
          v-model="textarea2"
          style="flex: 1"
          autosize
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
    // background: pink;

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
      overflow: auto;
      //   background-color: black;
    }
  }
}
</style>
