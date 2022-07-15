import { NextApiRequest, NextApiResponse } from "next";
import { bloodMemberList } from "../../../Database/bloodGroupList";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { bloodMemberId } = req.query;
  if (req.method === "GET") {
    const singleBloodMember = bloodMemberList.find(
      (member) => member.id === Number(bloodMemberId)
    );
    res.status(200).json(singleBloodMember);
  }
}
