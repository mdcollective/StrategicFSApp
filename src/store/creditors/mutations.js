const mutations = {
  SET_CREDITORS(state, creditors) {
    state.creditors = creditors;
  },
  ADDED_CREDITOR(state, creditor) {
    state.addedCreditor = creditor;
  },
  REMOVED_CREDITOR(state, creditor) {
    state.removedCreditor = creditor;
  },
  SET_SHOWADDCREDITOR(state, showAddCreditor) {
    state.showAddCreditor = showAddCreditor;
  },
  SET_SHOWNOTIFICATION(state, showNotification) {
    state.showNotification = showNotification;
  },
  SET_NOTIFICATIONTEXT(state, notificationText) {
    state.notificationText = notificationText;
  },
  SET_SELECTEDBALANCE(state, selectedBalance) {
    state.selectedBalance = selectedBalance;
  }
};

export default mutations;
