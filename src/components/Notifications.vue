<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="showNotification">
      {{ notificationText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="closeSnackBar">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Notifications",
  methods: {
      closeSnackBar() {
          this.setShowNotification(false);
      },
      ...mapActions(["setShowNotification"])
  },
  computed: {
      ...mapGetters(["notificationText", "showNotification"])
  }
};
</script>