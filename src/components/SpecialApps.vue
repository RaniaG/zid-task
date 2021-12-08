<template>
  <section>
    <div class="row">
      <div class="col-md-12">
        <h2>التطبيقات المميزة</h2>
      </div>
      <div class="col-md-3" v-for="app in apps" :key="app.id">
        <AppCard :app="app" />
      </div>
    </div>
  </section>
</template>

<script>
import AppCard from "./AppCard.vue";
export default {
  components: {
    AppCard,
  },
  data: function () {
    return {
      apps: [
        {
          id: 1,
          name: "قمرة",
          logo: "product logo.png",
          rating: 5,
          author: "عمر برهوم",
          description: "نظام الولاء الامثل الذي يمكنك من رفع مبيعاتك",
        },
        {
          id: 1,
          name: "قمرة",
          logo: "product logo.png",
          rating: 5,
          author: "عمر برهوم",
          description: "نظام الولاء الامثل الذي يمكنك من رفع مبيعاتك",
        },
        {
          id: 1,
          name: "قمرة",
          logo: "product logo.png",
          rating: 5,
          author: "عمر برهوم",
          description: "نظام الولاء الامثل الذي يمكنك من رفع مبيعاتك",
        },
        {
          id: 1,
          name: "قمرة",
          logo: "product logo.png",
          rating: 5,
          author: "عمر برهوم",
          description: "نظام الولاء الامثل الذي يمكنك من رفع مبيعاتك",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin: 4rem 0;
  h2 {
    text-align: center;
    font-weight: 400;
  }
}
</style>