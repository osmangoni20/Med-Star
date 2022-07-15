// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";
import { doctorList } from "../../../Database/doctorList";
type Data = {
  id: number;
  img: StaticImageData;
  category: string;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(doctorList);
}
