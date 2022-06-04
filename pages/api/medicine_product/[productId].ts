import { NextApiRequest, NextApiResponse } from "next";
import { productList } from "../../../Database/productList";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;
  if (req.method === "GET") {
    const singleProduct = productList.find(
      (product) => product.id === Number(productId)
    );
    res.status(200).json(singleProduct);
  }
}
