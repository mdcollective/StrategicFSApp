import creditorService from "../services/creditor-service";

const actions = {
  async getCreditors(context) {
    const response = await creditorService.get();
    context.commit("SET_CREDITORS", response.data);
  },
  async addCreditor(context, creditor) {
    const response = await creditorService.add(creditor);
    context.commit("ADDED_CREDITOR", response.data);

    context.commit("SET_NOTIFICATIONTEXT", "Creditor successfully added!");
    context.commit("SET_SHOWNOTIFICATION", true);

    const updatedCreditorsResponse = await creditorService.get();
    context.commit("SET_CREDITORS", updatedCreditorsResponse.data);
  },
  async removeCreditor(context, id) {
    const response = await creditorService.remove(id);
    context.commit("REMOVED_CREDITOR", response.data);

    context.commit("SET_NOTIFICATIONTEXT", "Creditor successfully deleted!");
    context.commit("SET_SHOWNOTIFICATION", true);

    const updatedCreditorsResponse = await creditorService.get();
    context.commit("SET_CREDITORS", updatedCreditorsResponse.data);
  },
  async setShowAddCreditor(context, showAddCreditor) {
    context.commit("SET_SHOWADDCREDITOR", showAddCreditor);
  },
  async setShowNotification(context, showNotification) {
    context.commit("SET_SHOWNOTIFICATION", showNotification);
  },
  async setSelectedBalance(context, selectedBalance) {
    context.commit("SET_SELECTEDBALANCE", selectedBalance);
  }
};

export default actions;