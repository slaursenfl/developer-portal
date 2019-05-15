<template>
  <Section class="works">
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md">

      <Card title="Bring your use case">
        <h4>Data Integration</h4>
        <p>Synchronize the districts data with the Frontline Education K12 Platform</p>
        <h4>Partner Integrations</h4>
        <p>Create standardized integrations for school districts on our K12 Platform</p>
        <h4>Applications</h4>
        <p>Extend the capabilities of the platform with your niche applications</p>

        <template slot="outer">
          <Dots class="hide-for-small"/>
          <Dots class="dots--vertical show-for-small"/>
        </template>
      </Card>

      <Card class="text-center flex-align-middle" title="Build">

        <div class="works__logo">
          <frontline-symbol/>
          <div class="works__pulse-bg"></div>
          <div class="works__pulse-bg"></div>
        </div>

        <p class="works__powered-by">
          Powered by <br/><strong>Frontline APIs </strong>
        </p>

        <ul class="works__tools flex gap-15 text-center flex--center">
          <li>REST</li>
          <li>WebHooks</li>
          <li>JSON</li>
        </ul>

        <template slot="outer">
          <Dots class="hide-for-small"/>
          <Dots class="dots--vertical show-for-small"/>
        </template>
      </Card>

      <Card title="Deploy">
        <h4>Add value</h4>
        <p>
          <g-link to="/docs/deploy-to-netlify">Netlify</g-link>
          ,
          <g-link to="/docs/deploy-to-amplify">AWS Amplify</g-link>
          ,
          <g-link to="/docs/deploy-to-zeit-now">Zeit Now</g-link>
          ,
          <g-link to="/docs/deploy-to-amazon-s3">Amazon S3</g-link>
          , Surge.sh, Aerobatic, Now.sh & many more.
        </p>

        <ul class="bullet-list mb">
          <li>
            <Bullet/>
            <g-link to="/docs/fast-by-default#pre-rendered-html">Pre-rendered HTML</g-link>
          </li>
          <li>
            <Bullet/>
            <g-link to="/docs/fast-by-default#the-prpl-pattern">PRPL-pattern</g-link>
          </li>
          <li>
            <Bullet/>
            <g-link to="/docs/fast-by-default#smart-link-prefetching">Smart link prefetching</g-link>
          </li>
          <li>
            <Bullet/>
            <g-link to="/docs/fast-by-default#progressive-images">Progressive Images</g-link>
          </li>
          <li>
            <Bullet/>
            <g-link to="/docs/fast-by-default#vuejs-spa">Vue.js SPA</g-link>
          </li>
        </ul>
      </Card>

    </div>
  </Section>
</template>

<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg';
import VueLogo from '~/assets/images/vue-logo.svg';
import WebpackLogo from '~/assets/images/webpack-logo.svg';
import FrontlineSymbol from '~/assets/images/frontline-symbol.svg';
import Bullet from '~/assets/images/bullet.svg';
import Dots from '~/components/Dots.vue';

export default {
  components: {
    Bullet,
    VueLogo,
    FrontlineSymbol,
    WebpackLogo,
    GraphQlLogo,
    Dots,
  },
};
</script>

<style lang="scss">
  .works {

    .bullet-list li {
      margin-bottom: .3rem;
    }

    .card__inner {
      padding: 30px 40px;
    }

    @media screen and (max-width: 850px) {
      .card {
        margin-bottom: 40px;
      }
    }


    &__tools {
      font-weight: 500;
      background-color: rgba(255, 255, 255, .9);
      border: 1px solid rgba(0, 0, 0, .1);
      max-width: 230px;
      border-radius: 4px;
      z-index: 9;
      margin: 0 auto !important;
      padding: 10px;

      li {
        margin-bottom: 0;
      }
    }

    &__logo {
      background-color: #733878;
      width: 100px;
      z-index: 1;
      position: relative;
      height: 100px;
      margin: 0 auto;
      margin-top: 18%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 100%;
      z-index: 0;
      margin-bottom: 1rem;
      animation: bounce 2s infinite;

      svg {
        width: 70px;
        height: 70px;
      }
    }

    &__logo svg {
      fill: white;
    }

    &__pulse-bg {
      animation: pulse 2s infinite;
      border: 3px solid #733878;
      width: 100px;
      height: 100px;
      position: absolute;
      border-radius: 100%;
      opacity: .3;
      z-index: -1;

      + .works__pulse-bg {
        width: 95px;
        height: 95px;
        animation-delay: .3s;
      }
    }

    &__powered-by {
      opacity: .8;
      line-height: 1.3;
      padding-bottom: 1.2rem;
    }
  }
</style>
