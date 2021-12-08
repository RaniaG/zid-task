<template>
  <button class="action-button">
    <i class="fas fa-chevron-left"></i>
    تصفح التطبيقات
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.action-button {
  padding: 1rem 5rem;
  border: none;
  background-color: $primary;
  color: #fed14a;
  font-size: 1.6rem;
  font-family: $font;
  font-weight: 600;
  border-radius: 1rem;
  min-width: 25rem;
  .fas {
    @include animation(flickerAnimation, 0.5s);
  }
}
</style>