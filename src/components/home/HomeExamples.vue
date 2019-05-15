<template>
  <Section dots="true">
    <h2 class="container text-center">
      Integrating with Frontline Educations K12 Platform
    </h2>
    <p class="lead text-center container-md">
      Our simple REST APIs makes it simple and fast to integrate with us.
    </p>

    <div class="home-examples mb-x2">
      <Examples/>
    </div>

    <p class="home-links text-center ">
      <g-link class="button primary button--large" to="/docs">
        Get started
      </g-link>
    </p>
  </Section>
</template>

<script>
import Examples from '~/components/Examples.vue';

export default {
  components: {
    Examples,
  },
};
</script>

<style>
  .home-examples {
    margin: 0 auto;
    max-width: 960px;
  }
</style>
