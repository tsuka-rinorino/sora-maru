<template>
  <div class="page page-index">
    <v-header @loaded="headerLoaded()" />
    <transition>
      <v-wrap
        v-show="loaded"
        class="page__body"
      >
        <v-profile v-if="componentsShow" />
        <v-skill v-if="componentsShow" />
        <v-product v-if="componentsShow" />
      </v-wrap>
    </transition>
  </div>
</template>


<script>
import Header from '../components/header/index.vue';
import Wrap from '../components/wrap/index.vue';
import Profile from '../components/profile/index.vue';
import Skill from '../components/skill/index.vue';
import Product from '../components/product/index.vue';

export default {
  components: {
    'v-header': Header,
    'v-wrap': Wrap,
    'v-profile': Profile,
    'v-skill': Skill,
    'v-product': Product,
  },
  data() {
    return {
      loaded: false,
      componentsShow: false,
    };
  },
  methods: {
    headerLoaded() {
      this.loaded = true;
      setTimeout(() => {
        this.componentsShow = true;
      }, 126);
    },
  },
};
</script>


<style lang="scss">
.page {

  &__body {
    padding-top: 128px;
    &.v-enter-active,
    &.v-leave-active {
      transition: 1.25s 5.3s;
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

  .profile,
  .skill,
  .product {
    margin-bottom: 128px;
  }
}
</style>
