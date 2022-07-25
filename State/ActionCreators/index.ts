import { Dispatch } from "react";
import { Action } from "../Actions";
import { ActionType } from "../ActionType";

export const countTotalCart = (totalCartNumber: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOTAL_CART,
      countNumber: totalCartNumber,
    });
  };
};
