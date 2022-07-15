// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { labTestList } from "../../../Database/LabTestList";
type Data = {
  id: number;
  testName: string;
  link: string;
  price: number;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(labTestList);
}
