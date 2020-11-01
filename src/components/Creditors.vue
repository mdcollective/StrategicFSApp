<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="display-2 mb-3">
          Creditors
        </h2>
        <v-card class="grid-card" elevation="5">
          <v-simple-table
            v-if="creditors.length > 0"
            fixed-header
            height="800px"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <v-checkbox
                      v-model="selectAllSelected"
                      @click="toggleSelected"
                    ></v-checkbox>
                  </th>
                  <th class="text-left">Creditor</th>
                  <th class="text-left">First Name</th>
                  <th class="text-left">Last Name</th>
                  <th class="text-left">Min Pay%</th>
                  <th class="text-left">Balance</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="creditor in creditors" :key="creditor.id">
                  <th class="text-left">
                    <v-checkbox
                      @change="itemSelected($event)"
                      v-model="creditor.selected"
                    ></v-checkbox>
                  </th>
                  <td class="text-left">{{ creditor.creditorName }}</td>
                  <td class="text-left">{{ creditor.firstName }}</td>
                  <td class="text-left">{{ creditor.lastName }}</td>
                  <td class="text-left">
                    {{ creditor.minPaymentPercentage.toString() + "%" }}
                  </td>
                  <td class="text-left">{{ creditor.balance | currency }}</td>
                  <td class="text-center">
                    <button @click="remove(creditor.id)" class="material-icons">
                      delete
                    </button>
                  </td>
                </tr>
                <tr v-if="showAddCreditor">
                  <td class="text-left">
                    <span
                      class="material-icons"
                      @click="showAddCreditor = false"
                    >
                      cancel_presentation
                    </span>
                  </td>
                  <td class="text-left">
                    <v-text-field
                      v-model="creditorToAdd.creditorName"
                      label="Creditor"
                      required
                    ></v-text-field>
                  </td>
                  <td class="text-left">
                    <v-text-field
                      v-model="creditorToAdd.firstName"
                      label="F Name"
                      required
                    ></v-text-field>
                  </td>
                  <td class="text-left">
                    <v-text-field
                      v-model="creditorToAdd.lastName"
                      label="L Name"
                      required
                    ></v-text-field>
                  </td>
                  <td class="text-left">
                    <v-text-field
                      v-model="creditorToAdd.minPaymentPercentage"
                      label="%"
                      required
                    ></v-text-field>
                  </td>
                  <td class="text-left">
                    <v-text-field
                      v-model="creditorToAdd.balance"
                      label="Balance"
                      required
                    ></v-text-field>
                  </td>
                  <td class="text-center">
                    <span @click="addCreditorClicked" class="material-icons">
                      done
                    </span>
                  </td>
                </tr>
              </tbody>
              <v-col>
                <v-btn
                  v-if="!showAddCreditor"
                  color="primary"
                  elevation="2"
                  @click="showAddCreditor = true"
                  >Add</v-btn
                >
              </v-col>
            </template>
          </v-simple-table>
        </v-card>
        <v-card class="summary-card" elevation="5">
          <div class="summary-item">
            <div>Total Balance</div>
            <div>{{ totalBalance | currency }}</div>
          </div>
          <div class="summary-item">
            <div>Total Row Count</div>
            <div>{{ rowCount }}</div>
          </div>
          <div class="summary-item">
            <div>Selected Rows</div>
            <div>{{ this.selectedItemCount }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar">
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Creditors",
  data() {
    return {
      selectAllSelected: false,
      selectedItemCount: 0,
      showAddCreditor: false,
      creditorToAdd: {
        creditorName: null,
        firstName: null,
        lastName: null,
        minPaymentPercentage: 0,
        balance: 0
      },
      snackbar: false,
      snackbarText: ""
    };
  },
  computed: {
    ...mapGetters(["creditors", "totalBalance", "rowCount"])
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

      this.showAddCreditor = false;
      this.snackbar = true;
      this.snackbarText = "Creditor added!";
    },
    toggleSelected() {
      if (this.selectAllSelected) {
        this.selectedItemCount = this.rowCount;
      } else {
        this.selectedItemCount = 0;
      }

      this.creditors.forEach(_ => (_.selected = this.selectAllSelected));
    },
    itemSelected(selected) {
      if (selected) {
        this.selectedItemCount++;
      } else {
        this.selectedItemCount--;
      }
    },
    remove(id) {
      this.removeCreditor(id);
      this.snackbar = true;
      this.snackbarText = "Creditor deleted!";
    },
    ...mapActions(["getCreditors", "addCreditor", "removeCreditor"])
  },
  created() {
    this.getCreditors();
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
  align-self: center;
}
</style>
