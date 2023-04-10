import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
}

export const useChatStore = defineStore("chatStore", () => {
  const chats: Chat[] = reactive([
    {
      id: "1000",
      name: "Harry Kane",
      lastMessage: "What are you doing",
      time: "10:10 AM",
    },
    {
      id: "1001",
      name: "Eric Dier",
      lastMessage: "I was looking at the mirror and realize that",
      time: "12:00 PM",
    },
    {
      id: "1002",
      name: "Ben Davies",
      lastMessage: "When will you came to the center?",
      time: "8:03 AM",
    },
  ]);

  return { chats };
});
