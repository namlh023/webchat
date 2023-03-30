import {
  User,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Ref, ref } from "vue";

const localUser: Ref<User | null> = ref(null);

export const useAuth = () => {
  const auth = getAuth();
  const loginInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    isLoading.value = true;
    hasFailed.value = false;
    localError.value = null;

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("result", result);

      localUser.value = result.user;
    } catch (error) {
      hasFailed.value = true;
      localError.value = error;
    } finally {
      isLoading.value = false;
    }
  };
  const isLoading = ref(false);
  const hasFailed = ref(false);
  const localError: Ref<unknown> = ref(null);

  return {
    isLoading,
    hasFailed,
    user: localError,
    error: localError,
    loginInWithGoogle,
  };
};
