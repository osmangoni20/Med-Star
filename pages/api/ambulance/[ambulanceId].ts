import { NextApiRequest, NextApiResponse } from "next";
import { ambulanceList } from "../../../Database/AmbulanceList";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ambulanceId } = req.query;
  if (req.method === "GET") {
    const singleService = ambulanceList.find(
      (ambulance) => ambulance.id === Number(ambulanceId)
    );
    res.status(200).json(singleService);
  }
}
