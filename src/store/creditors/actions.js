import creditorService from "../services/creditor-service";

const actions = {
  async getCreditors(context) {
    const response = await creditorService.get();
    context.commit("SET_CREDITORS", response.data);
  },
  async addCreditor(context, creditor) {
    const response = await creditorService.add(creditor);
    context.commit("ADDED_CREDITOR", response.data);
    
    const updatedCreditorsResponse = await creditorService.get();
    context.commit("SET_CREDITORS", updatedCreditorsResponse.data);
  },
  async removeCreditor(context, id) {
    const response = await creditorService.remove(id);
    context.commit("REMOVED_CREDITOR", response.data);
    
    const updatedCreditorsResponse = await creditorService.get();
    context.commit("SET_CREDITORS", updatedCreditorsResponse.data);
  }
};

export default actions;
