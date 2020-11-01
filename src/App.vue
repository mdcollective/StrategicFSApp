<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://s3.amazonaws.com/stratfs/sfs-logo-dark-2x.png"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Creditors />
    </v-main>
  </v-app>
</template>

<script>
import Creditors from "./components/Creditors";

export default {
  name: "App",
  components: {
    Creditors
  }
};
</script>
