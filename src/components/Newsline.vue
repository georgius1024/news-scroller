<template>
  <div class="m-3">
    <div class="btn-toolbar mb-3" role="toolbar">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" @click="prev">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z"
            />
          </svg>
        </button>
        <button class="btn btn-secondary">
          {{ selected + 1 }} из {{ news.length }}
        </button>

        <button type="button" class="btn btn-secondary" @click="next">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z"
            />
          </svg>
        </button>

        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span v-html="news[selected].NAME"/>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="(item, index) in news" @click="goto(index)" :key="index">
            <a class="dropdown-item" href="#">
              <span v-html="item.NAME" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <button class="btn btn-secondary btn-small" v-for="(item, index) in news" @click="n(index)" :key="index">
      {{ item.NAME }}
    </button> -->
    <tiny-slider ref="slider" v-bind="tinySliderOptions">
      <div
        v-for="item in news"
        :key="item.NEWS_ID"
        class="body"
        v-html="item.BODY"
      />
    </tiny-slider>
  </div>
</template>
<script>
import { newsline, news } from "../news.json";

export default {
  name: "Newsline",
  data() {
    return {
      selected: 0,
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
    goto(index) {
      if (index > this.news.length - 1) {
        index = this.news.length - 1;
      }
      if (index < 0) {
        index = 0;
      }
      this.selected = index;
      this.$refs.slider.goTo(this.selected);
    },
    next() {
      this.goto(this.selected + 1);
    },
    prev() {
      this.goto(this.selected - 1);
    },
  },
};
</script>
