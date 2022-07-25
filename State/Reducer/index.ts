import { combineReducers } from "redux";
import OrderCartReducer from "./OrderCartReducer";

const reducers = combineReducers({
  cart: OrderCartReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
