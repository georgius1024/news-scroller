import Vue from "vue";
import App from "./App.vue";
import "@fontsource/roboto";
import "bootstrap";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";

import VueTinySlider from "vue-tiny-slider";
import "tiny-slider/src/tiny-slider.scss";
Vue.config.productionTip = false;

Vue.component("tiny-slider", VueTinySlider);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
