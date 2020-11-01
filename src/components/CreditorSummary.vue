<template>
  <v-card class="summary-card" elevation="5">
    <div class="summary-item">
      <div>
        <div class="summary-item-title">Total Balance</div>
        <div class="summary-item-total">{{ totalBalance | decimalDollars }}</div>
      </div>
    </div>
    <div class="summary-item">
      <div>
        <div class="summary-item-title">Total Row Count</div>
        <div class="summary-item-total">{{ rowCount }}</div>
      </div>
    </div>
    <div class="summary-item">
      <div>
        <div class="summary-item-title">Selected Rows</div>
        <div class="summary-item-total">{{ this.selectedItemCount }}</div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
    name: "CreditorSummary",
    props: [
        "selectedItemCount",
        "rowCount",
        "totalBalance"
    ]
};
</script>

<style lang="scss" scoped>
    .summary-item-title {
        font-size: 0.8rem;
        opacity: 0.75;
    }

    .summary-item-total {
        font-size: 1.4rem;
    }
</style>