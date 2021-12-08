<template>
  <Navbar />
  <div class="container-fluid">
    <LandingPage />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/core/NavBar.vue";
import LandingPage from "./components/LandingPage.vue";
import Footer from "./components/core/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    LandingPage,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;700&display=swap");

html,
body {
  font-family: $font;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.4rem;
}
</style>
