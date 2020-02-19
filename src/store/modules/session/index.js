import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

const initialState = {};

export default {
  strict: true,
  namespaced: true,

  state: initialState,

  getters: getters,

  actions: actions,

  mutations: mutations
};
