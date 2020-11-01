import state from "./state";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

const creditors = {
  state,
  mutations,
  actions,
  getters
};

export default creditors;
