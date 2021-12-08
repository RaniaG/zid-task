<template>
  <div class="image-container">
    <img :src="imgSrc" />
  </div>
</template>

<script>
export default {
  props: ["img"],
  data: function () {
    return {
      imgSrc: require(`../../assets/${this.img}`),
    };
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  height: 60rem;
  width: 100%;
  @include flex-box;
  &:before {
    content: "";
    position: absolute;
    width: 20rem;
    height: 20rem;
    top: 0;
    left: 0;
    background-image: radial-gradient($green 20%, transparent 25%);
    background-size: 2rem 2rem;
    background-repeat: repeat;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    width: 40rem;
    height: 40rem;
    right: -5rem;
    bottom: -5rem;
    background-image: radial-gradient($secondary 50%, transparent 51%);
    z-index: -1;
  }
  img {
    border-radius: 5rem;
    height: 80%;
    width: 80%;
  }
}
</style>