import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueTinySlider from "vue-tiny-slider";
import "tiny-slider/src/tiny-slider.scss";
Vue.component("tiny-slider", VueTinySlider);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
