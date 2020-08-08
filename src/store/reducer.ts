import { combineReducers } from "@reduxjs/toolkit";

import explorerReducer from "../features/explorer/services/store/reducer";

const rootReducer = combineReducers({
  explorer: explorerReducer,
});

export default rootReducer;
