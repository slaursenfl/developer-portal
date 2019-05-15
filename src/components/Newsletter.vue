<template>
  <div class="newsletter" id="mc_embed_signup">
    <p class="lead mb">Want to keep up with the latest news, tips & tricks from Gridsome? Subscribe to the
      newsletter!</p>
    <form action="https://gridsome.us19.list-manage.com/subscribe/post?u=960a357f3405a688ff935a10e&amp;id=42bbd30818"
          class="newsletter__form validate" id="mc-embedded-subscribe-form" method="post"
          name="mc-embedded-subscribe-form" novalidate target="_blank">
      <div class="flex" id="mc_embed_signup_scroll">

        <div class="newsletter__field mc-field-group flex-fit" style="margin-right: 15px">
          <input aria-label="Email" class="required email" id="mce-EMAIL" name="EMAIL" placeholder="your@email.com"
                 type="email" value="">
        </div>

        <div class="newsletter__button">
          <button class="button primary" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe">
            Subscribe
          </button>
        </div>

        <div class="clear" id="mce-responses">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
          <input name="b_960a357f3405a688ff935a10e_42bbd30818" tabindex="-1" type="text" value="">
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  .newsletter {
    width: 100%;

    &__form {
      margin-bottom: 0;
    }

    &__field {
      min-width: 200px;
      margin-bottom: 1rem;
    }

    &__button {
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: .5rem;
    }
  }
</style>
