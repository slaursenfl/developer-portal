<template>
  <div class="connect">

    <transition name="fade">
      <div class="connect__slide" key=1 v-if="activeSlide == 0">
        <g-image alt="The Modern Web Logos" blur="10" class="connect__logos" retina="true"
                 src="~/assets/images/connect-logos.png"
                 width="1180"/>
      </div>
      <div class="connect__slide" key=2 v-else-if="activeSlide == 1">
        <g-image alt="The Modern Web Logos 2" blur="10" class="connect__logos" retina="true"
                 src="~/assets/images/connect-logos-2.png"
                 width="1180"/>
      </div>
      <div class="connect__slide" key=3 v-else-if="activeSlide == 2">
        <g-image alt="The Modern Web Logos 3" blur="10" class="connect__logos" retina="true"
                 src="~/assets/images/connect-logos-3.png"
                 width="1180"/>
      </div>
    </transition>

    <g-image alt="The Modern Web Background" blur="10" class="connect__main" retina="true"
             src="~/assets/images/connect-bg.png"
             width="1180"/>

    <connect-dots/>

  </div>
</template>

<script>
import ConnectDots from '~/assets/images/connect-dots.svg';

export default {
  components: {
    ConnectDots,
  },

  data() {
    return {
      activeSlide: 0,
    };
  },

  mounted() {
    this.counter = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % 3;
    }, 1500);
  },

  destroyed() {
    clearTimeout(this.counter);
  },
};
</script>

<style lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s, transform 1s;
    transform: translateY(0);
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(5px);
  }

  .connect {
    position: relative;

    img {
      margin: 0;
    }

    svg,
    &__slide,
    &__logos {
      width: 100%;
      left: 0;
      top: 0;
      height: 100%;
      position: absolute;
    }

    svg,
    path {
      stroke: var(--primary-color-dark);
      opacity: .6;
    }

  }
</style>
