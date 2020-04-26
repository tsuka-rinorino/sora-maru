<template>
  <div class="page page-index">
    <v-logo />
    <v-profile />
  </div>
</template>


<script>
import Logo from '../components/logo/index.vue';
import Profile from '../components/profile/index.vue';

export default {
  components: {
    'v-logo': Logo,
    'v-profile': Profile,
  },
};
</script>


<style lang="scss">
</style>
