<script lang="ts" setup>
import { useRouter } from "vue-router";
import homeIcon from "@/assets/home.png";
import writerIcon from "@/assets/writer.png";
import ChatIcon from "@/assets/chat.png";
import IconSystem from "@/components/icons/IconSystem.vue";

const router = useRouter();
const menu = [
  {
    label: "Writer",
    value: "writer",
    icon: writerIcon,
  },
  {
    label: "首页",
    value: "home",
    icon: homeIcon,
  },
  {
    label: "Chat",
    value: "chat",
    icon: ChatIcon,
  },
];
const handleClick = (routerName: string) => {
  router.push({ name: routerName });
};
</script>

<template>
  <nav>
    <div class="title">
      <IconSystem style="height: 40px"></IconSystem
      ><span style="position: relative; left: -10px">空天产业AI交互平台</span>
    </div>
    <div class="menu">
      <div class="item" @click="handleClick(item.value)" v-for="item in menu">
        <template v-if="$route.name === item.value">
          {{ item.label }}
        </template>
        <template v-else>
          <img :src="item.icon" alt="menu icon" />
        </template>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100vw;
  height: 80px;
  background: #273075;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    position: absolute;
    left: 0;
    color: #fff;
    font-weight: 600;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    margin: 0 auto;
    color: #fff;
    font-size: larger;
    font-weight: bolder;
    .item {
      height: 30px;
      width: 152px;
      letter-spacing: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        height: 100%;
      }
      &:nth-child(2) {
        border-left: 1px solid white;
        border-right: 1px solid white;
      }
    }
  }
}
</style>
