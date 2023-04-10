import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import socket from "@/socket";

export const useUserStore = defineStore("userStore", () => {
  const user: { data: null } | { data: any } = reactive({ data: null });

  async function setCurrentUser(currentUser: any) {
    user.data = currentUser;
    socket.auth = {
      token: currentUser.accessToken,
    };
    socket.connect();
  }

  return { user, setCurrentUser };
});
