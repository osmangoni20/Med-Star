import { Dispatch } from "react";
import { Action } from "../Actions";
import { ActionType } from "../ActionType";

// Increment Order Cart
export const IncrementOderCart = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREMENT_CART,
    });
  };
};

// Decrement Order Cart

export const DecrementOderCart = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DECREMENT_CART,
    });
  };
};

// Reseat Order Cart

export const ResetOrderCart = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESEAT_CART,
    });
  };
};
