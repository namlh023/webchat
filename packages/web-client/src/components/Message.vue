<script setup lang="ts">
let data = [
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "NamLH023",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
  {
    message: "How are you?",
    time: "2023/02/23 10:10AM",
    from: "Harry Kane",
    to: "NamLH023",
  },
];
</script>
<template>
  <div class="message">
    <div class="message__list">
      <template v-for="message in data">
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
    display: inline-block;
    align-self: flex-end;
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
