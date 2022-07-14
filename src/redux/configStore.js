import {createStore,combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import lists from "./modules/lists";

const middlewares =[thunk];
const rootReducer =combineReducers({lists});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;