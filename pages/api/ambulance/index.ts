// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ambulanceList } from "../../../Database/AmbulanceList";
type Data = {
  id: number;
  name: string;
  location_name: string;
  location_details: string;
  contact1: string;
  contact2: string;
  hotline: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(ambulanceList);
}
