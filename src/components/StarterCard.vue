<template>
  <Card :image="node.screenshot" :link="node.path" class="starter">
    <h4 class="starter__title">
      {{ node.title }}
    </h4>
    <p class="starter__desc" v-if="node.description"> {{ node.description }} </p>
    <div class="starter__footer">
      <div class="starter__actions flex gap-15">
        By {{ node.author.title }}
      </div>
      <div class="starter__platform">
        <g-image :src="node.platforms.logo" v-if="node.platforms"/>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .starter {

    .card__inner {
      padding: 1rem;
    }

    &:hover {
      .card__image img {

      }
    }

    &__title {
      font-size: .9rem;
      font-weight: 500;
      white-space: nowrap;
      max-width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__desc {
      font-size: .85rem;
      margin-bottom: .5rem !important;
      opacity: .8;
      white-space: nowrap;
      max-width: 220px;
      text-overflow: ellipsis;
      overflow-x: hidden;
    }

    &__footer {
      display: flex;
      background-color: #FFF;
      align-items: center;
      justify-content: space-between;
      font-size: .85rem;
      position: relative;
    }

    &__actions {
      opacity: .6;
    }

    &__platform {
      img {
        width: 25px;
        max-height: 25px;
        margin: 0;
      }
    }

    &:hover {
      .starter__footer {
        transform: translateY(0);
      }
    }
  }
</style>
</style>
