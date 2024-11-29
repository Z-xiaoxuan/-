<script lang="ts" setup>
import { onMounted, ref } from "vue";
import homeUrl from "@/assets/homeBg.jpg";
import homeUrl3 from "@/assets/homeBg3.jpg";
import font from "@/assets/image1.png";
import font2 from "@/assets/image2.png";
import font3 from "@/assets/image3.png";
import one from "@/assets/1.png";
import two from "@/assets/2.png";
import three from "@/assets/3.png";
import four from "@/assets/4.png";
import { useRouter } from "vue-router";

const router = useRouter();

const imageFlag = ref(1);

const handleClick = () => {
  let anchorElement = document.getElementById("a");
  /*如果对应id的锚点存在，就跳转到锚点*/
  if (anchorElement) {
    anchorElement.scrollIntoView({
      behavior: "smooth",
    });
  }

  // router.push({ name: "writer" });
};

onMounted(() => {
  setInterval(() => {
    imageFlag.value = (imageFlag.value % 4) + 1;
  }, 200);
});
</script>

<template>
  <div class="home">
    <div style="position: relative; height: 100%; width: 100%">
      <img :src="homeUrl" alt="首页背景" />
      <div class="title">空天AI</div>
      <div class="slide" @click="handleClick">
        <img v-show="imageFlag === 1" :src="one" />
        <img v-show="imageFlag === 2" :src="two" />
        <img v-show="imageFlag === 3" :src="three" />
        <img v-show="imageFlag === 4" :src="four" />
      </div>
    </div>
    <div style="position: relative; height: 100%; width: 100%">
      <div
        style="
          height: 400px;
          background-color: rgb(39, 48, 117);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: large;
          letter-spacing: 4px;
          color: #fff;
        "
      >
        <div id="a" style="margin-bottom: 30px"><img :src="font" alt="" /></div>
        <div>探索无人机技术的无限可能</div>
        <div>空天产业AI交互平台为您提供全面的</div>
        <div>文献资源、实时问题解答、市场数据分析以及法规咨询</div>
        <div>无论您是行业专家还是技术爱好者</div>
        <div>这里都是您获取最新无人机资讯、交流创新思想的理想之地</div>
        <div>加入我们，共同推动无人机行业的未来</div>
      </div>
      <div class="title" style="top: 90%">空天AI</div>
      <img :src="homeUrl3" alt="首页背景" />
      <div
        style="
          position: relative;
          top: -4px;
          height: 152px;
          width: 100%;
          background-color: rgb(39, 48, 117);
          display: flex;
          justify-content: center;
          gap: 50px;
        "
      >
        <div class="footerItem" @click="$router.push({ name: 'writer' })">
          <img style="height: 60px; width: 60px" :src="font2" />
          <span>空天AI.Writer</span>
        </div>
        <div class="footerItem" @click="$router.push({ name: 'chat' })">
          <img style="height: 60px; width: 60px" :src="font3" />
          <span>空天AI.Chat</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: auto;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 128px;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 10px;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .slide {
    // background-color: #8f4242;
    height: 200px;
    width: 150px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .footerItem {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }
}
</style>
