import { Action } from "../Actions";
import { ActionType } from "../ActionType";

const CountValue =
  typeof window !== "undefined" && localStorage.getItem("CountCartProduct");

const Reducer = (state: number = Number(CountValue), action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CART: {
      return state + 1;
    }
    case ActionType.DECREMENT_CART: {
      return state - 1;
    }
    case ActionType.RESEAT_CART: {
      return 0;
    }
    default:
      return state;
  }
};
export default Reducer;
