<template>
  <Section class="post" dots="true" primary="true">
    <div class="homepage-features grid-cols">

      <Feature>
        <h3>Use cases</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore <g-link to="/docs">magna aliqua</g-link>. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Feature>

      <Feature>
        <h3>Getting started</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint <g-link to="/docs">occaecat cupidatat non proident</g-link>
          , sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Feature>

      <Feature>
        <h3>API Reference</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore <g-link to="/docs">magna aliqua</g-link>. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Feature>

      <Feature>
        <h3>SDKs</h3>
        <p>
          Orci eleifend taciti dui lorem sodales ullamcorper aenean cras mollis.
          Ultrices dis. Porttitor tristique netus litora hac sociis integer, dui vivamus primis
          metus egestas, mattis <g-link to="/docs">hymenaeos</g-link> rutrum phasellus.
        </p>
      </Feature>


      <Feature>
        <h3>Release Notes</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore <g-link to="/docs">magna aliqua</g-link>. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </Feature>

      <Feature>
        <h3>Billing Plans</h3>
        <p>
          Laoreet donec habitant. Malesuada duis tempor mattis nec proin hymenaeos risus dictumst eleifend semper senectus tortor mollis dui nostra consectetuer urna morbi luctus. Egestas, pretium. Faucibus. Mi elementum sem tempor.
        </p>
      </Feature>

    </div>

  </Section>
</template>

<script>
import VueLogo from '~/assets/images/vue-logo.svg';
import GraphQlLogo from '~/assets/images/graphql-logo.svg';

export default {
  props: ['icon'],
  components: {
    VueLogo,
    GraphQlLogo,
  },
  computed: {
    iconClasses() {
      const classes = [];
      return classes;
    },
  },
};
</script>
