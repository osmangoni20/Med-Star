import { NextApiRequest, NextApiResponse } from "next";
import { doctorList } from "../../../Database/doctorList";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { doctorId } = req.query;
  if (req.method === "GET") {
    const singleDoctor = doctorList.find(
      (doctor) => doctor.id === Number(doctorId)
    );
    res.status(200).json(singleDoctor);
  }
}
