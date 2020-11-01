<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="display-2 mb-3">Creditors</h2>
        <v-card class="grid-card" elevation="5">
          <v-simple-table v-if="creditors.length > 0" fixed-header height="800px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <v-checkbox v-model="selectAllSelected" @click="toggleSelected"></v-checkbox>
                  </th>
                  <th class="text-left">Creditor</th>
                  <th class="text-left">First Name</th>
                  <th class="text-left">Last Name</th>
                  <th class="text-right">Min Pay%</th>
                  <th class="text-right">Balance</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="creditor in creditors" :key="creditor.id">
                  <th class="text-left">
                    <v-checkbox
                      @change="itemSelected($event, creditor)"
                      v-model="creditor.selected"
                    ></v-checkbox>
                  </th>
                  <td class="text-left">{{ creditor.creditorName }}</td>
                  <td class="text-left">{{ creditor.firstName }}</td>
                  <td class="text-left">{{ creditor.lastName }}</td>
                  <td class="text-right">{{ creditor.minPaymentPercentage | decimalPercent }}</td>
                  <td class="text-right">{{ creditor.balance | decimal }}</td>
                  <td class="text-center">
                    <button @click="remove(creditor.id)" class="material-icons delete-icon">delete</button>
                  </td>
                </tr>
                <AddCreditor v-if="showAddCreditor" />
              </tbody>
              <v-col>
                <v-btn
                  v-if="!showAddCreditor"
                  color="primary"
                  elevation="2"
                  @click="openAddCreditor"
                >Add</v-btn>
              </v-col>
            </template>
          </v-simple-table>
        </v-card>
        <CreditorSummary
          :selected-item-count="selectedItemCount"
          :row-count="rowCount"
          :total-balance="selectedBalance"
        />
      </v-col>
    </v-row>
    <Notifications v-if="showNotification" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CreditorSummary from "./CreditorSummary";
import AddCreditor from "./AddCreditor";
import Notifications from "./Notifications";

export default {
  name: "Creditors",
  components: {
    AddCreditor,
    CreditorSummary,
    Notifications
  },
  data() {
    return {
      selectAllSelected: false,
      selectedItemCount: 0
    };
  },
  computed: {
    ...mapGetters([
      "creditors",
      "totalBalance",
      "rowCount",
      "showAddCreditor",
      "showNotification",
      "selectedBalance"
    ])
  },
  methods: {
    toggleSelected() {
      if (this.selectAllSelected) {
        this.setSelectedBalance(this.totalBalance);
        this.selectedItemCount = this.rowCount;
      } else {
        this.setSelectedBalance(0);
        this.selectedItemCount = 0;
      }

      this.creditors.forEach(_ => (_.selected = this.selectAllSelected));
    },
    openAddCreditor() {
      this.setShowAddCreditor(true);
    },
    itemSelected(selected, creditor) {
      if (selected) {
        this.setSelectedBalance(this.selectedBalance + creditor.balance);
        this.selectedItemCount++;
      } else {
        this.setSelectedBalance(this.selectedBalance - creditor.balance);
        this.selectedItemCount--;

        if (this.selectedItemCount === 0) {
          this.selectAllSelected = false;
        }
      }
    },
    remove(id) {
      this.removeCreditor(id);
    },
    ...mapActions([
      "getCreditors",
      "removeCreditor",
      "setShowNotification",
      "setShowAddCreditor",
      "setSelectedBalance"
    ])
  },
  created() {
    this.getCreditors();
    this.setShowAddCreditor(false);
    this.setShowNotification(false);
  }
};
</script>
<style lang="scss">
.grid-card {
  margin-top: 20px;
}

.summary-card {
  margin-top: 20px;
  display: grid !important;
  grid-gap: 35px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}

.summary-item {
  min-height: 100px;
  display: flex;
  align-items: center;
}
</style>
