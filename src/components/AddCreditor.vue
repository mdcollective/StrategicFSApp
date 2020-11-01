<template>
  <tr>
    <td class="text-left">
      <div class="add-creditor-cancel">
        <span class="material-icons" @click="closeAddCreditor">cancel_presentation</span>
      </div>
    </td>
    <td>
      <v-select v-model="creditorToAdd.creditorName" :items="creditorNames" label="Creditors" tabindex="10"></v-select>
    </td>
    <td class="text-left">
      <v-text-field v-model="creditorToAdd.firstName" label="First Name" required tabindex="11"></v-text-field>
    </td>
    <td class="text-left">
      <v-text-field v-model="creditorToAdd.lastName" label="Last Name" required tabindex="12"></v-text-field>
    </td>
    <td class="text-left">
      <v-text-field v-model="creditorToAdd.minPaymentPercentage" label="Min Pay%" required tabindex="13"></v-text-field>
    </td>
    <td class="text-left">
      <v-text-field v-model="creditorToAdd.balance" label="Balance" required tabindex="14"></v-text-field>
    </td>
    <td class="text-center">
      <div class="add-creditor">
        <span @click="addCreditorClicked" class="material-icons" tabindex="15">done</span>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddCreditor",
  data() {
    return {
      creditorToAdd: {
        creditorName: null,
        firstName: null,
        lastName: null,
        minPaymentPercentage: null,
        balance: null
      },
      creditorNames: ["AMEX", "CAPITAL ONE", "CBNA", "DISCOVERBANK"]
    };
  },
  methods: {
    async addCreditorClicked() {
      await this.addCreditor(this.creditorToAdd);

      this.creditorToAdd = {
        creditorName: null,
        firstName: null,
        lastName: null,
        minPaymentPercentage: 0,
        balance: 0
      };

      this.setShowAddCreditor(false);
    },
    closeAddCreditor() {
      this.setShowAddCreditor(false);
    },
    ...mapActions(["addCreditor", "setShowAddCreditor"])
  }
};
</script>

<style lang="scss" scoped>
.add-creditor {
  cursor: pointer;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-items: center;
  align-items: center;
}

.add-creditor-cancel {
  cursor: pointer;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-items: center;
  align-items: center;
}

.add-creditor-cancel:hover {
  background-color: gray;
}

.add-creditor-cancel > span {
  padding-left: 5px;
}

.add-creditor:hover {
  background-color: gray;
}

.add-creditor > span {
  padding-left: 5px;
}
</style>
