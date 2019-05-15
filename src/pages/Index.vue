<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro-simple />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-how-it-work-simple />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-features />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-examples />
    </LazyHydrate>

  </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue';
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue';
import HomeFeatures from '@/components/home/HomeFeatures.vue';
import HomeExamples from '@/components/home/HomeExamples.vue';

export default {
  components: {
    LazyHydrate,
    HomeIntroSimple,
    HomeHowItWorkSimple,
    HomeExamples,
    HomeFeatures,
  },

  metaInfo: {
    title: 'Welcome',
  },
};
</script>

<style>
.layout-homepage header {
  border-color: transparent;
}
</style>
