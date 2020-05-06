<template>
  <div class="page page-index">
    <v-header @loaded="headerLoaded()" />
    <transition>
      <v-wrap
        v-show="loaded"
        class="page__body"
      >
        <v-profile />
        <v-skill />
        <v-product />
      </v-wrap>
    </transition>
  </div>
</template>


<script>
import Header from '../components/header/index.vue';

export default {
  components: {
    'v-header': Header,
    'v-wrap': () => import('../components/wrap/index.vue'),
    'v-profile': () => import('../components/profile/index.vue'),
    'v-skill': () => import('../components/skill/index.vue'),
    'v-product': () => import('../components/product/index.vue'),
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    headerLoaded() {
      this.loaded = true;
    },
  },
};
</script>


<style lang="scss">
.page {

  &__body {
    &.v-enter-active,
    &.v-leave-active {
      transition: 1.25s 6.25s;
    }
    &.v-enter,
    &.v-leave-to {
      opacity: 0;
    }
    &.v-enter-to,
    &.v-leave {
      opacity: 1;
    }
  }
}
</style>
