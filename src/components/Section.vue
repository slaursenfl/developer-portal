<template>
  <section :class="sectionClass" class="section">
    <div :class="sectionClassInner" class="section--inner container">
      <slot/>
    </div>
    <div class="section__dots-bg dots-bg" v-if="dots"/>
    <slot name="outer"/>
  </section>
</template>

<script>
export default {
  props: ['dark', 'dots', 'container', 'framed', 'primary', 'sway'],
  computed: {
    sectionClass() {
      const classes = [];
      // if(this.primary) classes.push('section--primary')
      // if(this.dark) classes.push('section--dark')
      return classes;
    },
    sectionClassInner() {
      const classes = [];
      if (this.framed) {
        classes.push('container--framed');
      }
      if (this.container) {
        classes.push(`container-${this.container}`);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
  .section {
    padding: calc(2% + var(--space)) 0;
    position: relative;
    width: 100%;
    flex: 1;

    &--primary {
      background-color: var(--primary-bg);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);

      + .section--primary {
        border-top-color: transparent;
        margin-top: -1px;
      }
    }


    &__dots-bg {
      height: 700px;
      max-width: 1500px;
      max-height: 100%;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      opacity: 1;
    }


    &--inner {
      position: relative;
      z-index: 2;
    }

    &--dark {
      color: #FFF;
      background: var(--dark-bg);

      p {
        color: currentColor;
      }

      h1, h2, h3, h4, a {
        color: #FFF;
      }
    }
  }
</style>
