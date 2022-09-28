import { useRouter } from "next/router";
import Meta from "../../../../components/common/Meta";
import DataInputAndList from "../../../../components/DashboardPart/DataInputAndList/DataInputAndList";
import useFirebase from "../../../../components/hooks/useFirebase";
import { DashboardFakeData } from "../../../../Database/DashboardFakeData";
const DashboardMenu = () => {
  const router = useRouter();
  const { submenu } = router.query;
  const { user }: any = useFirebase();
  const AllData =
    submenu !== "create_notice" ? DashboardFakeData[submenu as string] : "";
  const modelView = submenu === ("new_order" || "doctor_list") ? true : false;
  return (
    <div>
      <Meta
        title="MedStart Dashboard"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      {AllData ? (
        <DataInputAndList
          modelView={modelView}
          AllData={AllData}
          user={user}
        ></DataInputAndList>
      ) : (
        <h2></h2>
        // <CrateNotice></CrateNotice>
      )}
    </div>
  );
};

export default DashboardMenu;
