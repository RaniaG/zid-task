<template>
  <div class="app-card">
    <div class="app-card__info">
      <div class="app-card__logo">
        <img :src="logo" />
      </div>
      <div class="app-card__title">
        <div class="app-card__name">
          <span>{{ app?.name }}</span>
          <div class="app-card__rating">
            {{ app?.rating }}
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="app-card__author">
          تطوير:
          <span>
            {{ app?.author }}
          </span>
        </div>
      </div>
    </div>
    <div class="app-card__description">
      {{ app?.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["app"],
  data: function () {
    return {
      logo: require(`../assets/${this.app.logo}`),
    };
  },
};
</script>

<style lang="scss" scoped>
.app-card {
  background-color: $gray;
  border-radius: 3px;
  padding: 1rem;
  &__info {
    @include flex-box(row-reverse, flex-start);
    margin-bottom: 1rem;
  }
  &__logo img {
    width: 5rem;
  }
  &__name {
    @include flex-box(row-reverse);
    color: $green;
    span {
      color: $primary;
      margin-left: 1rem;
    }
  }
  &__rating {
    .fas {
      color: gold;
    }
  }
  &__title {
    @include flex-box(column, start, end);
    margin-right: 1rem;
  }
  &__author {
    span {
      color: grey;
    }
  }
}
</style>