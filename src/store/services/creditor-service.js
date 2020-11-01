import axios from "axios";

const api = axios.create({});

export default {
  get() {
    return api.get("https://creditor-fn.azurewebsites.net/api/get-creditors");
  },
  add(creditor) {
    try {
      return api.post(
        "https://creditor-fn.azurewebsites.net/api/add-creditor",
        creditor
      );
    } catch (error) {
      console.log(error);
    }
  },
  remove(id) {
    return api.delete(
      `https://creditor-fn.azurewebsites.net/api/remove-creditor?id=${id}`
    );
  }
};