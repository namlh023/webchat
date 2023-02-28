import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const user = reactive({ name: "namlh023", id: "1299" });

  return { user };
});
