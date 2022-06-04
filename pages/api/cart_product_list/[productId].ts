import { NextApiRequest, NextApiResponse } from "next";
import { cartProductList } from "../../../Database/orderCartProductList";

// interface singleProduct{
//   id: number;
//   quantity: number;
//   category: string;
//   name: string;
//   img: string;
//   price: number;
//   description: {
//       productType: string;
//       capacity: string;
//       used: string;
//       sideEffect: string;
//   };
// }[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;
  if (req.method === "GET") {
    const singleProduct = cartProductList.find(
      (product) => product.id === Number(productId)
    );
    res.status(200).json(singleProduct);
  } else if (req.method === "PATCH") {
    const singleProduct: any = cartProductList.find(
      (product) => product.id === Number(productId)
    );

    const updateId = req.body.id;
    singleProduct.quantity = req.body.quantity;
    cartProductList[updateId] = singleProduct;

    res.status(200).json(cartProductList);
  }
}
