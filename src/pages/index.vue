<template>
  <div class="page page-index">
    <v-header />
    <!--<v-profile />
    <v-skills />
    <v-product />-->
  </div>
</template>


<script>
import Header from '../components/header/index.vue';
// import Profile from '../components/profile/index.vue';
// import Skills from '../components/skills/index.vue';
// import Product from '../components/product/index.vue';

export default {
  components: {
    'v-header': Header,
    // 'v-profile': Profile,
    // 'v-skills': Skills,
    // 'v-product': Product,
  },
};
</script>


<style lang="scss">
</style>
