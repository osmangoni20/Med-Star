import { Action } from "../Actions";
import { ActionType } from "../ActionType";

const CountValue =
  typeof window !== "undefined" && localStorage.getItem("CountCartProduct");

const Reducer = (state: number = Number(CountValue), action: Action) => {
  switch (action.type) {
    case ActionType.TOTAL_CART: {
      return state + 1;
    }
    default:
      return state;
  }
};
export default Reducer;
