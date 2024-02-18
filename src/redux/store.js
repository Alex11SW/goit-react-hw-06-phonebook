import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [],
};

const reducer = (state = initialState) => {
  return state;
};
const enchancer = devToolsEnhancer();
const store = createStore(reducer, initialState, enchancer);

export default store;
