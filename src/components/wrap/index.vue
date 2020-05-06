<template>
  <div class="wrap">
    <slot />
  </div>
</template>


<script>
</script>


<style lang="scss">
.wrap {
  max-width: 1152px;
  padding-left: 312px;
  padding-right: 32px;
  @media (min-width: 1056px) {
    padding-left: 344px;
  }
}
</style>
