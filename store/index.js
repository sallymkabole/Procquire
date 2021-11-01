import Vuex from "vuex";
import tender from "./modules/tender";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      tender
    },
    state: {
     
    }
  });
};
export default createStore;
