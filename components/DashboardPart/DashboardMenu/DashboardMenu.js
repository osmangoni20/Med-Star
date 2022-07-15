import React from "react";
import { useParams } from "react-router-dom";
import { DashboardFakeData } from "../../../DashboardFakeData";
import DataInputAndList from "../DataInputAndList/DataInputAndList";

const DashboardMenu = () => {
  const { route } = useParams();
  const AllData = DashboardFakeData[route];
  const modelView=(route===("request_new_admission"||"student_list"))?true:false;
  return (
    <div>
      <DataInputAndList modelView={modelView} AllData={AllData}></DataInputAndList>
    </div>
  );
};

export default DashboardMenu;
