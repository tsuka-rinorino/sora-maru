<template>
  <div class="logo">
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--usagi"
        src="/img/logo/usagi.svg"
        alt=""
      >
    </transition>
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--so"
        src="/img/logo/so.svg"
        alt=""
      >
    </transition>
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--ra"
        src="/img/logo/ra.svg"
        alt=""
      >
    </transition>
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--ma"
        src="/img/logo/ma.svg"
        alt=""
      >
    </transition>
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--ru"
        src="/img/logo/ru.svg"
        alt=""
      >
    </transition>
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--en"
        src="/img/logo/en.svg"
        alt=""
      >
    </transition>
    <transition>
      <img
        v-show="show"
        class="logo__img logo__img--stamp"
        src="/img/logo/stamp.svg"
        alt=""
      >
    </transition>
  </div>
</template>


<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>


<style lang="scss">
$delay: 0.5;
.logo {
  width: 363px;
  height: 474px;

  &__img {
    position: absolute;
    &.v-enter-active,
    &.v-leave-active {
      transition: 1.25s;
    }
    &.v-enter,
    &.v-leave-to {
      opacity: 0;
    }
    &.v-enter-to,
    &.v-leave {
      opacity: 1;
    }

    &--usagi,
    &--so,
    &--ra,
    &--ma,
    &--ru,
    &--stamp {
      filter: drop-shadow(9px 11px 0 rgba(0, 0, 0, 0.4));
    }

    &--usagi {
      top: 0;
      left: 129px;
      width: 234px;
      height: 260px;
      &.v-enter-active,
      &.v-leave-active {
        transition: opacity 1.25s #{$delay * 1 + 's'}, transform 1.25s #{$delay * 7 + 's'};
      }
      &.v-enter,
      &.v-leave-to {
        transform: rotate(45deg);
      }
      &.v-enter-to,
      &.v-leave {
        transform: rotate(0);
      }
    }
    &--so {
      top: 78.5px;
      left: 131.5px;
      width: 69px;
      height: 82.5px;
      &.v-enter-active,
      &.v-leave-active {
        transition-delay: #{$delay * 2 + 's'};
      }
    }
    &--ra {
      top: 191px;
      left: 211px;
      width: 56px;
      height: 83px;
      &.v-enter-active,
      &.v-leave-active {
        transition-delay: #{$delay * 3 + 's'};
      }
    }
    &--ma {
      top: 272.5px;
      left: 116.5px;
      width: 70px;
      height: 80.5px;
      &.v-enter-active,
      &.v-leave-active {
        transition-delay: #{$delay * 4 + 's'};
      }
    }
    &--ru {
      top: 393.5px;
      left: 158.5px;
      width: 55px;
      height: 80px;
      &.v-enter-active,
      &.v-leave-active {
        transition-delay: #{$delay * 5 + 's'};
      }
    }
    &--stamp {
      top: 329.5px;
      left: 228px;
      width: 47px;
      height: 46.5px;
      &.v-enter-active,
      &.v-leave-active {
        transition-delay: #{$delay * 6 + 's'};
      }
    }
    &--en {
      top: 208px;
      left: 0;
      width: 160.5px;
      height: 17px;
      &.v-enter-active,
      &.v-leave-active {
        transition-delay: #{$delay * 6 + 's'};
      }
    }
  }
}
</style>
