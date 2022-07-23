import { useRouter } from "next/router";
import Meta from "../../../components/common/Meta";
import DataInputAndList from "../../../components/DashboardPart/DataInputAndList/DataInputAndList";
import { DashboardFakeData } from "../../../Database/DashboardFakeData";

const DashboardMenu = () => {
  const router = useRouter();
  const { menu } = router.query;
  console.log(menu);
  const AllData = DashboardFakeData[menu as string];
  const modelView = false;
  // submenu === ("request_new_admission" || "student_list") ? true : false;
  return (
    <div>
      <Meta
        title="MedStart Dashboard"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      {AllData && (
        <DataInputAndList
          modelView={modelView}
          AllData={AllData}
        ></DataInputAndList>
      )}
    </div>
  );
};

export default DashboardMenu;
