<script setup lang="ts">
interface Props {
  name: string;
  id: string;
  photoURL: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="me">
    <div class="me__avatar"><img :src="props.photoURL" /></div>
    <div class="me__info">
      <div class="me__name">{{ props.name }}</div>
      <div class="me__id">{{ props.id }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.me {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 16px;
  background-color: var(--clr-dark-blue);
  padding: 10px;
  border-bottom: 2px solid var(--clr-very-grey);

  &__avatar {
    background-color: var(--clr-orange);
    width: 40px;
    height: 40px;
    border-radius: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  &__name {
    font-size: var(--fs-m);
    font-weight: var(--fw-600);
    line-height: var(--lh-m);
  }

  &__id {
    font-size: var(--fs-s);
    font-weight: var(--fw-300);
    line-height: var(--lh-s);
    color: var(--clr-light-grey);
  }
}
</style>
