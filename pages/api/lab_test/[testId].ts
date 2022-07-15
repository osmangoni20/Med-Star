import { NextApiRequest, NextApiResponse } from "next";
import { labTestList } from "../../../Database/LabTestList";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { testId } = req.query;
  if (req.method === "GET") {
    const singleTest = labTestList.find((test) => test.id === Number(testId));
    res.status(200).json(singleTest);
  }
}
