import { useRouter } from "next/router";
import CrateNotice from "../../../../components/DashboardPart/Create Notice/CreateNotice";
import DataInputAndList from "../../../../components/DashboardPart/DataInputAndList/DataInputAndList";
import { DashboardFakeData } from "../../../../Database/DashboardFakeData";
const DashboardMenu = () => {
  const router = useRouter();
  const { submenu } = router.query;
  console.log(submenu);
  const AllData =
    submenu !== "create_notice" ? DashboardFakeData[submenu as string] : "";
  const modelView = submenu === ("new_order" || "doctor_list") ? true : false;
  return (
    <div>
      {AllData ? (
        <DataInputAndList
          modelView={modelView}
          AllData={AllData}
        ></DataInputAndList>
      ) : (
        <CrateNotice></CrateNotice>
      )}
    </div>
  );
};

export default DashboardMenu;
