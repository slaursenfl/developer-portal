<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

      <div class="intro__message mb" hidden></div>

      <h1 class="intro__title post">
        Integrate with Frontline Education
      </h1>

      <p class="intro__lead lead post mb">
        Gridsome helps developers build modern websites & PWAs that are
        <g-link to="/docs/fast-by-default">fast by default</g-link>
        for any Headless CMS, Content APIs or Markdown files.
      </p>

      <p class="intro__links">
        <g-link class="button primary button--large" to="/docs">
          <span>Get started</span>
        </g-link>
      </p>

      <p class="intro__info">
        <span>Frontline API </span>
        <g-link to="/apis">
          <span>v{{ $static.metaData.apiVersion }}</span>
        </g-link>
      </p>
    </div>
  </Section>
</template>

<static-query>
query HomeIntro {
  metaData {
    apiVersion
  }
}
</static-query>

<style lang="scss">
  .intro {
    @media screen and (max-width: 850px) {
      & {
        text-align: center;
      }
    }

    &__title {
      font-size: 3rem;
      color: var(--primary-color);
      letter-spacing: -1px;
      font-weight: 600;
      margin-left: auto;
      margin-right: auto;

      @media screen and (max-width: 850px) {
        & {
          font-size: 2rem;
        }
      }
    }

    &__lead {
      font-size: 1.4rem;
      max-width: 890px;
      margin-left: auto;
      margin-right: auto;


      @media screen and (max-width: 550px) {
        & {
          font-size: 1.2rem;
        }
      }
    }

    &__info {
      font-size: .9rem;
      color: rgba(0, 0, 0, .7);
    }

    &__message {
      margin-bottom: 1.5rem;

      a {
        display: inline-block;
        background-color: var(--primary-color-dark);
        text-decoration: none;
        padding: 4px 15px;
        border-radius: 99px;

        &:hover {
          background-color: rgba(0, 0, 0, .3);
        }
      }
    }
  }
</style>
