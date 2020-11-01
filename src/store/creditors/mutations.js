const mutations = {
    SET_CREDITORS(state, creditors) {
        state.creditors = creditors;
    },
    ADDED_CREDITOR(state, creditor) {
        state.addedCreditor = creditor;
    },
    REMOVED_CREDITOR(state, creditor) {
        state.removedCreditor = creditor;
    }
};

export default mutations;