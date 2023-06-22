import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducer";


// Also Apply middleware And We Can Use It Inside 
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const myStore = createStore(reducers, enhancer);

// We Need To Export
export default myStore;
