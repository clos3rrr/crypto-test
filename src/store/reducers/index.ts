import { combineReducers } from "redux";
import { portfolioReducer } from "./portfolioReducer";
import { tokenReducer } from "./tokenReducer";
import { chartReducer } from "./chartReducer";

export const rootReducer = combineReducers({
  token: tokenReducer,
  portfolio: portfolioReducer,
  chart: chartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
