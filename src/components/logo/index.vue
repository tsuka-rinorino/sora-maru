<template>
  <div class="logo">
    <img
      class="logo__img"
      src="/img/logo/logo.png"
      alt="そらまる"
    >
    <img
      class="logo__cloud logo__cloud--1"
      src="/img/logo/cloud-solid.svg"
      alt=""
    >
    <img
      class="logo__cloud logo__cloud--2"
      src="/img/logo/cloud-solid.svg"
      alt=""
    >
    <img
      class="logo__cloud logo__cloud--3"
      src="/img/logo/cloud-border.svg"
      alt=""
    >
  </div>
</template>


<script>
</script>


<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 90vh;

  &__img {
    position: relative;
    z-index: 2;
    display: block;
    height: 25rem;
  }

  &__cloud {
    position: absolute;
    z-index: 1;
    width: 256px;
    &--1 {
      top: 10%;
      right: -3rem;
    }
    &--2 {
      transform: rotate(180deg) scale(1, -1);
      bottom: 0;
      left: -3rem;
    }
    &--3 {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(-1, 1);
      top: 50%;
      left: 50%;
      margin-top: -5rem;
      margin-left: 4.5rem;
    }
  }
}
</style>
