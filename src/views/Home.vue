<script lang="ts" setup>
import { onMounted, ref } from "vue";
import homeUrl from "@/assets/homeBg.png";
import one from "@/assets/1.png";
import two from "@/assets/2.png";
import three from "@/assets/3.png";
import four from "@/assets/4.png";
import { useRouter } from "vue-router";

const router = useRouter();

const imageFlag = ref(1);

const handleClick = () => {
  router.push({ name: "writer" });
};

onMounted(() => {
  setInterval(() => {
    imageFlag.value = (imageFlag.value % 4) + 1;
  }, 200);
});
</script>

<template>
  <div class="home">
    <img :src="homeUrl" alt="首页背景" />
    <div class="title">空天AI</div>
    <div class="slide" @click="handleClick">
      <img v-show="imageFlag === 1" :src="one" />
      <img v-show="imageFlag === 2" :src="two" />
      <img v-show="imageFlag === 3" :src="three" />
      <img v-show="imageFlag === 4" :src="four" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  position: relative;
  //   background-image: url("@/assets/home.png");
  //   background-size: 100% 100%;
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
}
</style>
