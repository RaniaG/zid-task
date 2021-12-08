<template>
  <div>
    <section class="section">
      <h1 class="section__title">
        طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد
      </h1>
      <p class="section__body">
        طور تجارتك من خلال تطبيقات و حلول سوق تطبيقات زد التي تساعدك في نمو
        أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
      </p>
      <ActionButton />
    </section>
    <section>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <ImageContainer img="zid.gif" />
        </div>
      </div>
    </section>
    <BenefitsSection />
    <SpecialApps />
  </div>
</template>

<script>
import ImageContainer from "./shared/ImageContainer.vue";
import BenefitsSection from "./BenefitsSection.vue";
import SpecialApps from "./SpecialApps.vue";
import ActionButton from "./shared/ActionButton.vue";

export default {
  components: {
    ImageContainer,
    BenefitsSection,
    SpecialApps,
    ActionButton,
  },
};
</script>

<style lang="scss" scoped>
</style>