import { ref } from "vue";
import axios from "axios";
import { type Message, type FileInfo } from "@/type";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
  baseURL: "https://api.moonshot.cn/v1",
  dangerouslyAllowBrowser: true,
});

interface FileUploadResponse {
  id: string; //String;
  object: "file";
  bytes: number; //291730;
  created_at: number; // 1730385813;
  filename: string; //"result_xvvmXK (1).jpg";
  purpose: string; //"file-extract";
  status: string; //"ok";
  status_details: string; // string "";
}

// API 本身不具有记忆功能 这里手动实现
const messageHistoryList = ref<Message[]>([
  {
    role: "assistant",
    content:
      "Hi,我是空天AI~。<br> 很高兴遇见你！你可以问我一切有关无人机领域的问题，我来帮你解答。",
  },
]);

const filesAnsly = ref("");
const fileList = ref<FileInfo[]>([]);
const fileContentMessage = ref<{ role: "system"; content: any }[]>([]);
const generateLoading = ref(false);

export const useKimi = () => {
  // 我们将用户最新的问题构造成一个 message（role=user），并添加到 messages 的尾部

  async function chat(input: string) {
    messageHistoryList.value.push({
      role: "user",
      content: input,
    });
    fetch("https://api.fastgpt.in/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer fastgpt-qDxClbMzQYZCR0QcwusKFmGNHvKfGtI5pDjK4uHEkSMsFTr89f4kc",
      },
      body: JSON.stringify({
        chatId: new Date().getTime().toString(),
        stream: true,
        detail: false,
        messages: [
          {
            content: `${input}（答案结尾显示信息来源）`,
            role: "user",
          },
        ],
      }),
    }).then(async (response: any) => {
      messageHistoryList.value.push({
        role: "assistant",
        content: "",
      });

      const res = messageHistoryList.value[messageHistoryList.value.length - 1];
      const reader = response.body
        .pipeThrough(new TextDecoderStream())
        .getReader();
      while (true) {
        var { value, done } = await reader.read();
        if (done) break;
        const objects = value
          .split("\n")
          .filter((line: any) => line.startsWith("data: {")) // 只处理以 'data:' 开头的行
          .map((line: any) => {
            const jsonString = line.replace("data: ", ""); // 去掉 'data: ' 前缀
            return JSON.parse(jsonString); // 解析为对象
          });
        objects.forEach((item: any) => {
          if (!item.choices) return;
          if (item.choices[0].finish_reason) return;
          res.content += item.choices[0].delta.content;
        });
      }
    });
  }

  async function uploadFileList(files: any) {
    // 循环上传文件
    for (let i = 0; i < files.length; i++) {
      fileList.value.push({
        name: files[i].name,
        type: files[i].type,
        size: files[i].size,
        id: "",
        fn: function () {
          console.log("this", this);
          const randomNum = Math.floor(Math.random() * 10) + 1;
          setTimeout(() => {
            this.id = new Date().getTime().toString();
          }, randomNum * 1000);
        },
      });
      fileList.value[fileList.value.length - 1].fn();
      const formData = new FormData();
      formData.append("file", files[i]);

      // fetch("/api/v1/files", {
      //   method: "POST",
      //   headers: {
      //     Authorization:
      //       "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
      //   },
      //   body: formData,
      // }).then(async (res: any) => {
      //   const reader = res.body
      //     .pipeThrough(new TextDecoderStream())
      //     .getReader();
      //   let resRes: FileUploadResponse;
      //   while (true) {
      //     const { value, done } = await reader.read();
      //     if (done) break;
      //     console.log("aaaa", JSON.parse(value));
      //     resRes = JSON.parse(value);
      //     // 拿到上传的ID
      //     fileList.value[i].id = resRes.id;
      //   }
      // });
    }
  }

  function generateFilesAnalyze() {
    // 循环拿到上传后对齐的文件
    // generateLoading.value = true;
    // for (let i = 0; i < fileList.value.length; i++) {
    //   if (fileList.value[i].id) {
    //     fetch(`/api/v1/files/${fileList.value[i].id}/content`, {
    //       method: "GET",
    //       headers: {
    //         Authorization:
    //           "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
    //       },
    //     }).then(async (res: any) => {
    //       const reader = res.body
    //         .pipeThrough(new TextDecoderStream())
    //         .getReader();
    //       while (true) {
    //         var { value, done } = await reader.read();
    //         if (done) break;
    //         fileContentMessage.value.push({
    //           role: "system",
    //           content: JSON.parse(value).content,
    //         });
    //         // 最后一个文件对气后，开始问答
    //         if (fileList.value.length - 1 === i) {
    //           fetch("/api/v1/chat/completions", {
    //             method: "POST",
    //             headers: {
    //               "Content-Type": "application/json",
    //               Authorization:
    //                 "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
    //             },
    //             body: JSON.stringify({
    //               messages: [
    //                 ...fileContentMessage.value,
    //                 {
    //                   role: "user",
    //                   content: "帮我总结以上的文件内容",
    //                 },
    //               ],
    //               model: "moonshot-v1-8k",
    //               temperature: 0.3,
    //               stream: true,
    //             }),
    //           }).then(async (res: any) => {
    //             const reader = res.body
    //               .pipeThrough(new TextDecoderStream())
    //               .getReader();
    //             while (true) {
    //               generateLoading.value = false;
    //               var { value, done } = await reader.read();
    //               if (done) break;
    //               const objects = value
    //                 .split("\n")
    //                 .filter((line: any) => line.startsWith("data: {")) // 只处理以 'data:' 开头的行
    //                 .map((line: any) => {
    //                   const jsonString = line.replace("data: ", ""); // 去掉 'data: ' 前缀
    //                   return JSON.parse(jsonString); // 解析为对象
    //                 });
    //               objects.forEach((item: any) => {
    //                 if (item.choices[0].finish_reason) return;
    //                 filesAnsly.value += item.choices[0].delta.content;
    //               });
    //             }
    //           });
    //         }
    //       }
    //     });
    //   }
    // }
    generateLoading.value = true;
    fetch("https://api.fastgpt.in/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer fastgpt-qDxClbMzQYZCR0QcwusKFmGNHvKfGtI5pDjK4uHEkSMsFTr89f4kc",
      },
      body: JSON.stringify({
        chatId: "412412",
        stream: true,
        detail: false,
        messages: [
          {
            content:
              "请基于所提供的文献，撰写一篇关于无人机行业前景分析的专业报告。报告应包含：\n\n行业现状：无人机行业的市场规模、主 要应用领域和关键参与者。\n市场趋势：技术创新、市场需求变化和新兴应用场景。\n技术发展 ：无人机相关的新技术和研发方向。\n政策法规：影响行业 发展的政策、法规和标准。\n竞争格局：主要企业的竞争策略和市场份额分析。\n机会与挑战：行业面临的机遇、风险和挑战。\n未来展望：对无人机行业 未来发展的预测和建议。\n\n请提取并整合文献中的专业信息，用丰富的论据支持报告中的论点和数据，每个副标题下内容不少于 100 字。在报告末尾附上所有引用的参考文献列表。",
            role: "user",
          },
        ],
      }),
    }).then(async (response: any) => {
      const reader = response.body
        .pipeThrough(new TextDecoderStream())
        .getReader();
      while (true) {
        generateLoading.value = false;
        var { value, done } = await reader.read();
        if (done) break;
        const objects = value
          .split("\n")
          .filter((line: any) => line.startsWith("data: {")) // 只处理以 'data:' 开头的行
          .map((line: any) => {
            const jsonString = line.replace("data: ", ""); // 去掉 'data: ' 前缀
            return JSON.parse(jsonString); // 解析为对象
          });
        objects.forEach((item: any) => {
          if (!item.choices) return;
          if (item.choices[0].finish_reason) return;
          filesAnsly.value += item.choices[0].delta.content;
        });
      }
    });
  }

  async function fileChat(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    fetch("/api/v1/files", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
      },
      body: formData,
    }).then(async (res: any) => {
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let resRes: any;
      while (true) {
        var { value, done } = await reader.read();
        if (done) break;
        console.log("aaaa", JSON.parse(value));
        resRes = JSON.parse(value);
      }
      const fileUploadRes: FileUploadResponse = res as any;

      console.log("file", res);

      // let file_content = await (await client.files.content(resRes.id)).text();
      // console.log("000", file_content);
      fetch(`/api/v1/files/${resRes.id}/content`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
        },
      }).then(async (res: any) => {
        const reader = res.body
          .pipeThrough(new TextDecoderStream())
          .getReader();
        while (true) {
          var { value, done } = await reader.read();
          if (done) break;
          console.log("bbbb", JSON.parse(value));
          fetch("/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer sk-q1Ms3FRgsg1SwxaH8Z7t0DZ0mc9kIncoGqqmCcmab4w2hjS9",
            },
            body: JSON.stringify({
              messages: [
                {
                  role: "system",
                  content: JSON.parse(value).content,
                },
                {
                  role: "user",
                  content: "帮我分析一下，多大的概率可以找到工作？",
                },
              ],
              model: "moonshot-v1-8k",
              temperature: 0.3,
            }),
          }).then(async (res: any) => {
            const reader = res.body
              .pipeThrough(new TextDecoderStream())
              .getReader();
            while (true) {
              var { value, done } = await reader.read();
              if (done) break;
              console.log("最后的结果", JSON.parse(value));
              console.log(
                "最后的结果lalala",
                JSON.parse(value).choices[0].message.content
              );
              filesAnsly.value = JSON.parse(value).choices[0].message.content;
            }
          });
        }
      });
    });
  }
  return {
    chat,
    fileChat,
    uploadFileList,
    generateFilesAnalyze,
    generateLoading,
    fileList,
    filesAnsly,
    messageHistoryList,
  };
};
