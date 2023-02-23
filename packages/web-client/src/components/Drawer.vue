<script lang="ts" setup>
import Me from "./Me.vue";
import You from "./You.vue";

interface Chat {
  name: string;
  lastMessage: string;
  time: string;
}

const chats: Chat[] = [
  {
    name: "Harry Kane",
    lastMessage: "What are you doing",
    time: "10:10 AM",
  },
  {
    name: "Eric Dier",
    lastMessage: "I was looking at the mirror and realize that",
    time: "12:00 PM",
  },
  {
    name: "Ben Davies",
    lastMessage: "When will you came to the center?",
    time: "8:03 AM",
  },
];
</script>
<template>
  <div class="drawer">
    <Me name="NamLe023" id="#1028" />
    <div class="messages">
      <You
        v-for="chat in chats"
        :name="chat.name"
        :last-message="chat.lastMessage"
        :time="chat.time"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--clr-very-dark-blue);
  border-right: 1px solid var(--clr-very-grey);
  min-height: 100vh;
  width: 300px;
}
</style>
