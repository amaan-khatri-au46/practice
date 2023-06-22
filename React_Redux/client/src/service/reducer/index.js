// store accept only one reducer and we can have multiple reducer so we need to combine the reducer and can use that reducer inside the store
// Here We Only Need To Combine The Reducer

import { combineReducers } from "redux";
import { updatecounter } from "./counter.js";

export const reducers = combineReducers({
  count: updatecounter,
});
