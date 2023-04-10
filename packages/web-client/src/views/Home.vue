<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import Drawer from "@/components/Drawer.vue";
import Message from "@/components/Message.vue";
import socket from "@/socket";

onMounted(() => {
  socket.on("connect", () => {
    console.log("connect to server");
  });
});

onUnmounted(() => {
  socket.off("connect_error");
});

socket.on("connect_error", (err) => {
  if (err.message === "invalid username") {
    console.log("USER ERROR");
  }
});
</script>

<template>
  <div class="main">
    <Drawer />
    <Message />
  </div>
</template>

<style lang="scss" scoped></style>
