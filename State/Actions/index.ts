import { ActionType } from "../ActionType";

interface totalCart {
  type: ActionType.TOTAL_CART;
  countNumber: number;
}
export type Action = totalCart;
