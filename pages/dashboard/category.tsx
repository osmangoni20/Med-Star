import { useRouter } from "next/router";
import DataInputAndList from "../../components/DashboardPart/DataInputAndList/DataInputAndList";
import { DashboardFakeData } from "../../Database/DashboardFakeData";

const DashboardMenu = () => {
  const { category } = useRouter().query;
  const AllData = DashboardFakeData["admin"];
  const modelView =
    category === ("request_new_admission" || "student_list") ? true : false;
  return (
    <div>
      <DataInputAndList
        modelView={modelView}
        AllData={AllData}
      ></DataInputAndList>
    </div>
  );
};

export default DashboardMenu;
