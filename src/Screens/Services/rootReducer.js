import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import channelReducer from "./reducer";

const store = createStore(channelReducer, applyMiddleware(thunk));

export default store;
