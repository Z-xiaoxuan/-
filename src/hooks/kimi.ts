import { ref } from "vue";
import axios from "axios";

// API 本身不具有记忆功能 这里手动实现
const messageHistoryList = ref([
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

    axios
      .post(
        "/api/v1/chat/completions",
        {
          messages: messageHistoryList.value,
          model: "moonshot-v1-8k",
          temperature: 0.3,
          stream: true,
        },
        {
          responseType: "stream",
          headers: {
            Authorization:
              "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
          },
        }
      )
      .then((response) => {
        let data = "";
        response.data.on("data", (chunk) => {
          let line = chunk.toString().trim();
          if (line === "") {
            try {
              let chunk = JSON.parse(data);
              // 这里的处理逻辑可以替换成你的业务逻辑，打印仅是为了展示处理流程
              let choice = chunk.choices[0];
              let usage = choice.usage;
              if (usage) {
                console.log("total_tokens:", usage.total_tokens);
              }
              let delta = choice.delta;
              let role = delta.role;
              if (role) {
                console.log("role:", role);
              }
              let content = delta.content;
              if (content) {
                console.log(content);
              }
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
            data = ""; // 重置 data
          } else if (line.startsWith("data: ")) {
            data = line.substring(6);
            // 当数据块内容为 [DONE] 时，则表明所有数据块已发送完毕，可断开网络连接
            if (data === "[DONE]") {
              response.data.destroy();
            }
          } else {
            data += "\n" + line; // 我们仍然在追加内容时，为其添加一个换行符，因为这可能是该数据块有意将数据分行展示
          }
        });
      });
    // fetch("/api/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
    //   },
    //   body: JSON.stringify({
    //     messages: messageHistoryList.value,
    //     model: "moonshot-v1-8k",
    //     temperature: 0.3,
    //     stream: true,
    //   }),
    // })
    //   .then((response: any) => {
    //     console.log("<<<", response);
    //     let data = "";
    //     response.data.on("data", (chunk: any) => {
    //       let line = chunk.toString().trim();

    //       // 接下来我们要处理三种不同的情况：
    //       //   1. 如果当前行是空行，则表明前一个数据块已接收完毕（即前文提到的，通过两个换行符结束数据块传输），我们可以对该数据块进行反序列化，并打印出对应的 content 内容；
    //       //   2. 如果当前行为非空行，且以 data: 开头，则表明这是一个数据块传输的开始，我们去除 data: 前缀后，首先判断是否是结束符 [DONE]，如果不是，将数据内容保存到 data 变量；
    //       //   3. 如果当前行为非空行，但不以 data: 开头，则表明当前行仍然归属上一个正在传输的数据块，我们将当前行的内容追加到 data 变量尾部；

    //       if (line === "") {
    //         try {
    //           let chunk = JSON.parse(data);
    //           // 这里的处理逻辑可以替换成你的业务逻辑，打印仅是为了展示处理流程
    //           let choice = chunk.choices[0];
    //           let usage = choice.usage;
    //           if (usage) {
    //             console.log("total_tokens:", usage.total_tokens);
    //           }
    //           let delta = choice.delta;
    //           let role = delta.role;
    //           if (role) {
    //             console.log("role:", role);
    //           }
    //           let content = delta.content;
    //           if (content) {
    //             console.log(content);
    //           }
    //         } catch (error) {
    //           console.error("Error parsing JSON:", error);
    //         }
    //         data = ""; // 重置 data
    //       } else if (line.startsWith("data: ")) {
    //         data = line.substring(6);
    //         // 当数据块内容为 [DONE] 时，则表明所有数据块已发送完毕，可断开网络连接
    //         if (data === "[DONE]") {
    //           response.data.destroy();
    //         }
    //       } else {
    //         data += "\n" + line; // 我们仍然在追加内容时，为其添加一个换行符，因为这可能是该数据块有意将数据分行展示
    //       }
    //     });
    //   })
    //   .then(async (data) => {
    //     // messageHistoryList.value.push(data.choices[0].message)
    //   })
    //   .catch((error) => console.error("Error:", error));
  }
  return {
    chat,
    messageHistoryList,
  };
};
