import { ActionType } from "../ActionType";

interface increaseCart {
  type: ActionType.INCREMENT_CART;
}
interface decreesCart {
  type: ActionType.DECREMENT_CART;
}
interface reseatCart {
  type: ActionType.RESEAT_CART;
}
export type Action = increaseCart | decreesCart | reseatCart;
