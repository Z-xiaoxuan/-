<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <Navbar />
    <div class="router">
      <router-view v-slot="{ Component }">
        <transition appear mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .router {
    height: calc(100% - 80px);
    width: 100vw;
    overflow: hidden;
    background: linear-gradient(180deg, #acece8 0%, #5c66b2 100%);
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
