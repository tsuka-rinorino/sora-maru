<template>
  <div class="page page-index">
    <v-logo />
    <v-profile />
    <v-skills />
    <v-product />
  </div>
</template>


<script>
import Logo from '../components/logo/index.vue';
import Profile from '../components/profile/index.vue';
import Skills from '../components/skills/index.vue';
import Product from '../components/product/index.vue';

export default {
  components: {
    'v-logo': Logo,
    'v-profile': Profile,
    'v-skills': Skills,
    'v-product': Product,
  },
};
</script>


<style lang="scss">
</style>
