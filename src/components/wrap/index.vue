<template>
  <div class="wrap">
    <slot />
  </div>
</template>


<script>
</script>


<style lang="scss">
.wrap {
  width: 1056px;
  padding-left: 312px;
  padding-right: 32px;
  @media (min-width: 1216px) {
    width: 1136px;
    padding-left: 392px;
  }
}
</style>
