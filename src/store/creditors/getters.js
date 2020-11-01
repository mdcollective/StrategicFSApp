const getters = {
  creditors: state => state.creditors,
  totalBalance: state => {
    if (!state.creditors) {
      return 0;
    }
    let totalBalance = 0;
    for (let creditor of state.creditors) {
      totalBalance += creditor.balance;
    }
    return totalBalance;
  },
  rowCount: state => (state.creditors ? state.creditors.length : 0)
};

export default getters;
