import Vue from "vue";
import App from "./App.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("currency", function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  vuetify,
  icons: {
    iconfont: "md"
  },
  render: h => h(App)
}).$mount("#app");