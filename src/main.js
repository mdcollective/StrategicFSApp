import Vue from "vue";
import App from "./App.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("currency", function(value) {
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

Vue.filter("decimal", function(value) {
  if (!value) {
    value = 0;
  }
  return parseFloat(value).toFixed(2);
});

Vue.filter("decimalDollars", value => {
  if (!value) {
    value = 0;
  }
  return `$${parseFloat(Math.abs(value))
    .toFixed(2)
    .toString()}`;
});

Vue.filter("decimalPercent", function(value) {
  if (!value) {
    value = 0;
  }
  return (
    parseFloat(value)
      .toFixed(2)
      .toString() + "%"
  );
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