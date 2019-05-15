<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">

      <LazyHydrate on-idle>
        <Logo/>
      </LazyHydrate>

      <LazyHydrate on-idle>
        <Nav class="flex-fit"/>
      </LazyHydrate>

      <SearchForm/>

      <LazyHydrate ssr-only>
        <nav class="header-actions flex">

          <div class="has-dropdown">
            <a
              aria-label="github"
              rel="noopener noreferrer"
              title="Developer Dashboard"
            >
              <span class="hide-for-small" style="margin-left:5px;">Dashboard</span>
            </a>
            <div class="dropdown">
              <a href="//github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md"
                 rel="noopener noreferrer" target="_blank">
                Changelog
              </a>
              <a href="//github.com/gridsome/gridsome" rel="noopener noreferrer" target="_blank">
                Core repository
              </a>
              <a href="//github.com/gridsome/gridsome.org" rel="noopener noreferrer"
                 target="_blank">
                Website repository
              </a>
              <a href="//github.com/gridsome/gridsome/issues" rel="noopener noreferrer"
                 target="_blank">
                GitHub Issues
              </a>
            </div>
          </div>
        </nav>
      </LazyHydrate>
    </div>
  </header>
</template>

<static-query>
query Header {
  metaData {
    apiVersion
  }
}
</static-query>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Logo from './Logo';
import Nav from './Nav';
import SearchForm from '~/components/SearchForm.vue';

export default {
  components: {
    Logo,
    SearchForm,
    Nav,
    LazyHydrate,
  },
};
</script>

<style lang="scss">
  header {
    z-index: 20;
    position: relative;
    top: 0;
    background-color: var(--light-bg-transparent);
    border-bottom: 1px solid var(--border-color);
    flex-wrap: nowrap;
    position: sticky;

    .header-bar {
      background-color: var(--primary-color);
      padding: 2px;
      text-align: center;
      color: #FFF;
      font-size: 1rem;

      a {
        color: currentColor;
      }
    }

    .header-inner {
      padding: 0 var(--space);
      min-height: var(--header-height);
    }
  }
</style>
