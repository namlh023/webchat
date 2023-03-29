<script lang="ts" setup>
import { useAuth } from "@/composables/auth/auth.composable";

const auth = useAuth();

function GoogleSignIn() {
  console.log("SIGN IN GOOGLE");
  auth.loginInWithGoogle();
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
