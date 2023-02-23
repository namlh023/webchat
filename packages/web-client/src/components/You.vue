<script lang="ts" setup>
interface Props {
  name: string;
  lastMessage: string;
  time: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="you">
    <div class="you__avatar"></div>
    <div class="you__info">
      <div class="you__name">{{ props.name }}</div>
      <div class="you__last-message">{{ props.lastMessage }}</div>
    </div>
    <div class="you__time">{{ props.time }}</div>
  </div>
</template>
<style lang="scss" scoped>
.you {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 12px 10px;

  &__avatar {
    background-color: violet;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    flex-basis: 60%;
    text-align: start;
  }

  &__name {
    font-size: var(--fs-m);
    font-weight: var(--fw-600);
    line-height: var(--lh-m);
  }

  &__last-message,
  &__time {
    font-size: var(--fs-s);
    font-weight: var(--fw-500);
    line-height: var(--lh-s);
    color: var(--clr-light-grey);
    display: inline-block; // This is what you're missing
    max-width: 170px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--clr-blue);
  }
}
</style>
