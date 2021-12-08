<template>
  <footer class="footer">
    <div class="row justify-content-center">
      <div class="col-md-2">
        <img src="@/assets/logo-footer.png" />
        <div class="footer__social-media">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $primary;
  padding: 3rem;
  &__social-media {
    @include flex-box(row, space-between);
    color: white;
  }
}
</style>