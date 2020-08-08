import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { DispatchExt, RootState } from "../store/types";

const middleware = [thunk];
export const mockStore = configureStore<Partial<RootState>, DispatchExt>(
  middleware
);
