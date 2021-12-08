<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-md-10">
        <nav class="nav-bar">
          <div class="nav-bar__logo"><img src="@/assets/logo.png" /></div>
          <div class="nav-bar__link">الرئيسية</div>
          <div class="nav-bar__link">التصنيف</div>
          <div class="nav-bar__link">التطبيقات</div>
          <div class="nav-bar__link">طور تطبيق</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-bar {
  margin: 0 4rem;
  @include flex-box($direction: row-reverse, $justify-content: space-around);
  &__logo {
  }
  &__link {
    color: $black;
    padding: 5px 3rem;
    font-size: 1.6rem;
  }
}
</style>