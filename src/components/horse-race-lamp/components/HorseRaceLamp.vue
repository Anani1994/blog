<template lang="pug">
    .horse-race-lamp-container
        .horse-race-lamp(
            ref="horseRaceLamp"
            style="styles"
        )
            slot
</template>

<script>
import dom from "../../../libs/utils/dom";
export default {
  data() {
    return {
      styles: null,
    }
  },
  methods: {
    setSlideWidth() {
      const slideContainerWidth = dom.getStyle(this.$el, 'width');
      const slideWidth = dom.getStyle(this.$refs.horseRaceLamp, 'width');
      slideWidth > slideContainerWidth ? this.$el.style.width = slideWidth : this.$refs.horseRaceLamp.style.display = "block";
    },
    move() {
      this.$refs.horseRaceLamp.style.animation = 'HorseRaceLamp 5s linear 0s infinite';
    },
  },
  mounted() {
    this.setSlideWidth();
    this.move();
  },
}
</script>
