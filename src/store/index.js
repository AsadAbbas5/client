import { applyMiddleware, compose, createStore } from "redux";

import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducers";
let middleWares = null;

if (window.__REDUX_DEVTOOLS_EXTENSION__()) {

    middleWares = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())

} else {
    middleWares = applyMiddleware(thunk)

}

const store = createStore(rootReducer, middleWares)

export default store;