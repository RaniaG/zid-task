<template>
  <section class="section">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <ImageContainer img="zid.gif" />
      </div>
      <div class="col-md-5 benefits">
        <h1 class="section__title">كل ما تحتاجه لنمو متجرك في مكان واحد</h1>
        <p class="section__body">
          مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول
          سوق التطبيقات لنمو متجرك ومضاعفة ارباحك
        </p>
        <ul class="list">
          <li class="list__item">
            <span> سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك </span>
            <span class="list__item__icon">
              <i class="fas fa-chart-line"></i>
            </span>
          </li>
          <li class="list__item">
            <span> دعم فني و تقني متكامل متوفر علي مدار الساعة </span>
            <span class="list__item__icon">
              <i class="fas fa-chart-line"></i>
            </span>
          </li>
          <li class="list__item">
            <span> اسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة</span>
            <span class="list__item__icon">
              <i class="fas fa-chart-line"></i>
            </span>
          </li>
        </ul>
        <ActionButton />
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";
import ImageContainer from "./shared/ImageContainer.vue";

export default {
  components: {
    ImageContainer,
    ActionButton,
  },
};
</script>

<style lang="scss" scoped>
.section {
  @include flex-box(column, end, end);
  &__title {
    font-size: 2.5rem;
    width: 100%;
  }
  &__body {
    width: 100%;
  }
}
.list {
  list-style-type: none;
  width: 100%;
  &__item {
    margin-top: 1rem;
    @include flex-box(row, end);
    &__icon {
      width: 4rem;
      height: 4rem;
      box-shadow: 1px 2px 2px grey;
      @include flex-box;
      border-radius: 2rem;
      margin-left: 1rem;
      color: $primary;
    }
  }
}
.benefits {
  @include flex-box(column, end, end);
}
</style>