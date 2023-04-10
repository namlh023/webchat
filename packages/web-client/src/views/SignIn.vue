<script lang="ts" setup>
import { useAuth } from "@/composables/auth/auth.composable";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const userStore = useUserStore();

const auth = useAuth();

async function GoogleSignIn() {
  console.log("SIGN IN GOOGLE");
  await auth.loginInWithGoogle(userStore);
  router.push({ name: "Home" });
}
</script>
<template>
  <div class="signin">
    <button @click="GoogleSignIn">Sign In With Google</button>
  </div>
</template>
<style lang="scss" scoped>
.signin {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
