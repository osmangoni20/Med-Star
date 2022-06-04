// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { productList } from "../../../Database/productList";
type Data = {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  description: {
    productType: string;
    capacity: string;
    used: string;
    sideEffect: string;
  };
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productList);
}
