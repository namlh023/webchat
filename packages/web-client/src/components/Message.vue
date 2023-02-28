<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMessageStore } from "@/stores/message";

const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore);
</script>
<template>
  <div class="message">
    <div class="message__list">
      <template v-for="message in messages.data">
        <div class="message__content">
          <p>{{ message.message }}</p>
          <div>
            <p>{{ message.from }}</p>
            <p>{{ message.time }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="message__input">
      <input type="text" />
      <button>Send</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message {
  background-color: var(--clr-very-dark-blue);
  margin-left: 300px;
  min-width: calc(100vw - 300px);
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;

  &__list {
    width: 100%;
    margin-bottom: 50px;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: calc(100vh - 100px);
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    background-color: var(--clr-blue);
    margin: 16px 64px;
    padding-right: 16px;
    border-radius: 10px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }

  &__input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
    position: sticky;
    bottom: 0;

    input {
      flex-basis: 95%;
      height: 100%;
    }

    button {
      flex-basis: 5%;
      height: 100%;
    }
  }
}
</style>
