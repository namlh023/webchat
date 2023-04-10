<script lang="ts" setup>
import { storeToRefs } from "pinia";
import Me from "./Me.vue";
import You from "./You.vue";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { useMessageStore } from "@/stores/message";

const chatStore = useChatStore();
const userStore = useUserStore();
const messageStore = useMessageStore();

const { user } = storeToRefs(userStore);
const { chats } = storeToRefs(chatStore);
</script>
<template>
  <div class="drawer">
    <Me
      :name="user.data?.displayName"
      :id="'#' + user.data?.uid"
      :photoURL="user.data?.photoURL"
    />
    <div class="messages">
      <You
        v-for="chat in chats"
        :name="chat.name"
        :last-message="chat.lastMessage"
        :time="chat.time"
        @click="messageStore.getMessages(chat.id)"
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
