<template>
  <header
    class="header"
    :class="[mount ? 'header--loaded' : '']"
  >
    <v-logo :show="mount" />
    <div class="header__bg" />
  </header>
</template>


<script>
import Logo from '../logo/index.vue';

export default {
  components: {
    'v-logo': Logo,
  },
  data() {
    return {
      mount: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.mount = true;
    }, 5);
  },
};
</script>


<style lang="scss">
.header {
  transition: 2s;
  transform: translateX(-50%);
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10000;
  background-color: #2c4053;
  width: 200px;
  height: 100vh;

  &--loaded {
    transition: left 1.75s 4.25s, transform 1.75s 4.25s;
    transform: translateX(0);
    left: 128px;
  }

  &__bg {
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: url('/img/header/bg.jpg') top left / 200px auto;
    width: 200px;
    height: 100vh;
  }

  .logo {
    transform: scale(0.8);
    position: absolute;
    top: 0px;
    left: -88px;
    z-index: 1;
  }
}
.test {
  position: relative;
  z-index: 99999;
}
</style>
