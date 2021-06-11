import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reduser from "./reducer";
import { createLogger } from "redux-logger";

const logger = createLogger({
  diff: true,
  collapsed: true,
});
export const store = createStore(reduser, applyMiddleware(thunk, logger));
export default store;
