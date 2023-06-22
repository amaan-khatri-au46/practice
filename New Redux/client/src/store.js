import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducer";
import logger from "redux-logger";


// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       })
//     : compose;
// const enhancer = composeEnhancers(
//   applyMiddleware(logger, thunk)
// );
const myStore = createStore(reducers, compose(applyMiddleware(logger,thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// We Need To Export
export default myStore;