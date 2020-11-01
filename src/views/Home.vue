<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Creditors msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Creditors from "@/components/Creditors.vue";

export default {
  name: "Home",
  components: {
    Creditors
  }
};
</script>
