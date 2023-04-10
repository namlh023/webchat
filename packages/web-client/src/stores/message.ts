import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

interface Message {
  message: string;
  time: string;
  from: string;
  to: string;
}

export const useMessageStore = defineStore("messageStore", () => {
  const messages: { data: Message[] } = reactive({
    data: [
      {
        message: "How are you?",
        time: "2023/02/23 10:10AM",
        from: "NamLH023",
        to: "NamLH023",
      },
      {
        message: "How are you?",
        time: "2023/02/23 10:10AM",
        from: "NamLH023",
        to: "NamLH023",
      },
      {
        message: "How are you?",
        time: "2023/02/23 10:10AM",
        from: "NamLH023",
        to: "NamLH023",
      },
      {
        message: "How are you?",
        time: "2023/02/23 10:10AM",
        from: "NamLH023",
        to: "NamLH023",
      },
    ],
  });

  function getMessages(id: string) {
    switch (id) {
      case "1000":
        messages.data = [
          {
            message: "How are you?",
            time: "2023/02/23 10:10AM",
            from: "Kane",
            to: "NamLH023",
          },
          {
            message: "How are you?",
            time: "2023/02/23 10:10AM",
            from: "Kane",
            to: "NamLH023",
          },
        ];
        break;
      case "1001":
        messages.data = [
          {
            message: "How are you?",
            time: "2023/02/23 10:10AM",
            from: "Dier",
            to: "NamLH023",
          },
          {
            message: "How are you?",
            time: "2023/02/23 10:10AM",
            from: "Dier",
            to: "NamLH023",
          },
        ];
        break;
      case "1002":
        messages.data = [
          {
            message: "How are you?",
            time: "2023/02/23 10:10AM",
            from: "Davies",
            to: "NamLH023",
          },
          {
            message: "How are you?",
            time: "2023/02/23 10:10AM",
            from: "Davies",
            to: "NamLH023",
          },
        ];
        break;
    }
  }

  return { messages, getMessages };
});
