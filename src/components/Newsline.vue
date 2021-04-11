<template>
  <div>
    <button v-for="(item, index) in news" @click="n(index)" :key="index">
      {{ item.NAME }}
    </button>
    <tiny-slider ref="slider" v-bind="tinySliderOptions">
      <div
        v-for="item in news"
        :key="item.NEWS_ID"
        class="body"
        v-html="item.BODY"
      />
    </tiny-slider>
    <!-- <Slider
      animation="fade"
      v-model="selectedIndex"
      :duration="5000"
      :speed="1000"
      :height="'100vh'"
      :autoplay="false"
      :indicators="false"
    >
      <SliderItem v-for="item in news" :key="item.NEWS_ID">
        <div class="body" v-html="item.BODY" />
      </SliderItem>
    </Slider> -->
  </div>
</template>
<script>
import { newsline, news } from "../news.json";
//import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "Newsline",
  // components: {
  //   Slider,
  //   SliderItem,
  // },
  data() {
    return {
      selectedIndex: 0,
      selected: null,
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 1,
        gutter: 20,
        swipeAngle: 45,
        controls: false,
        nav: false,
      },
    };
  },
  computed: {
    news() {
      return news;
    },
    newsline() {
      return newsline;
    },
  },
  methods: {
    n(i) {
      this.$refs.slider.goTo(i);
    },
  },
};
</script>
