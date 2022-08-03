import { Dispatch } from "react";
import { Action } from "../Actions";
import { ActionType } from "../ActionType";

export const IncrementOderCart = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOTAL_CART,
    });
  };
};
