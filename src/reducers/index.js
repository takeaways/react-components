import { combineReducers, createStore } from "redux";
import post from "./post";

const rootReducer = combineReducers({
  post
});

const initialState = window.__INITIAL_STATE__;
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, initialState, enhancer);
export default store;
