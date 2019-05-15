<template>
  <nav class="main-nav flex gap-15">
    <g-link to="/docs">
      <span class="main-nav__label">Docs</span>
    </g-link>

    <g-link to="/apis">
      <span class="main-nav__label">API explore</span>
    </g-link>

    <g-link to="/support">
      <span class="main-nav__label">Support</span>
    </g-link>
  </nav>
</template>


<style lang="scss">
  @media screen and (max-width: 850px) {
    .main-nav {
      order: 10;
      min-width: 100%;

      a {
        padding-top: 5px;
        padding-bottom: 10px;
      }
    }
  }
</style>
