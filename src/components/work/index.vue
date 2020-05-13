<template>
  <div class="work">
    <div class="work__list">
      <div class="work__item work__item--right">
        <div class="work__img-outer">
          <img
            class="work__img"
            src="/img/work/01.jpg"
            alt=""
          >
        </div>
        <div class="work__body">
          body
        </div>
      </div>

      <div class="work__item work__item--left">
        <div class="work__img-outer">
          <img
            class="work__img"
            src="/img/work/01.jpg"
            alt=""
          >
        </div>
        <div class="work__body">
          body
        </div>
      </div>
    </div>
  </div>
</template>


<script>
</script>


<style lang="scss">
.work {
  $e: &;

  &__list {
  }

  &__item {
    display: flex;
    position: relative;
    &--right {
      #{$e}__body {
        right: 0;
      }
    }
    &--left {
      justify-content: flex-end;
      #{$e}__body {
        left: 0;
      }
    }
  }

  &__img-outer {
    width: 448px;
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__body {
    position: absolute;
    bottom: 32px;
    box-shadow: 4px 4px 0 rgba(#000, 0.4);
    background-color: #fff;
    width: calc(100% - 128px);
  }
}
</style>
