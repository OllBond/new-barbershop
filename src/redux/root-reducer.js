import { combineReducers } from "@reduxjs/toolkit";

import mastersReducer from "./masters/masters-slice";

const rootReducer = combineReducers({
  masters: mastersReducer,
});
export default rootReducer;
