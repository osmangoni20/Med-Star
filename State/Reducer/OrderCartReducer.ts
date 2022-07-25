import { Action } from "../Actions";
import { ActionType } from "../ActionType";

const initialState =
  typeof window !== "undefined" ? Number(localStorage.getItem("totalCart")) : 0;
const Reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.TOTAL_CART: {
      return state + action.countNumber;
    }
    default:
      return state;
  }
};
export default Reducer;
