import { ref } from "vue";
import axios from "axios";
import { type Message } from "@/type";

// API 本身不具有记忆功能 这里手动实现
const messageHistoryList = ref<Message[]>([
  //   {
  //     role: "system",
  //     content:
  //       "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",
  //   },
]);

export const useKimi = () => {
  async function chat(input: string) {
    // 我们将用户最新的问题构造成一个 message（role=user），并添加到 messages 的尾部
    messageHistoryList.value.push({
      role: "user",
      content: input,
    });

    fetch("/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
      },
      body: JSON.stringify({
        messages: messageHistoryList.value,
        model: "moonshot-v1-8k",
        temperature: 0.3,
        stream: true,
      }),
    }).then(async (response: any) => {
      messageHistoryList.value.push({
        role: "assistant",
        content: "",
      });
      console.log(
        "dsadas",
        messageHistoryList.value[messageHistoryList.value.length - 1]
      );
      const res = messageHistoryList.value[messageHistoryList.value.length - 1];
      const reader = response.body
        .pipeThrough(new TextDecoderStream())
        .getReader();
      while (true) {
        var { value, done } = await reader.read();
        if (done) break;
        // value = value?.replace("undefined", "");
        console.log("received data -", value);
        const objects = value
          .split("\n")
          .filter((line: any) => line.startsWith("data: {")) // 只处理以 'data:' 开头的行
          .map((line: any) => {
            const jsonString = line.replace("data: ", ""); // 去掉 'data: ' 前缀
            return JSON.parse(jsonString); // 解析为对象
          });
        console.log("dsa", objects);

        objects.forEach((item: any) => {
          res.content += item.choices[0].delta.content;
        });
        console.log("res", messageHistoryList.value);

        // output += value?.replace("undefined", "");
      }
    });
    // })
    // .then(async (data) => {
    //   // messageHistoryList.value.push(data.choices[0].message)
    // })
    // .catch((error) => console.error("Error:", error));
  }
  return {
    chat,
    messageHistoryList,
  };
};
