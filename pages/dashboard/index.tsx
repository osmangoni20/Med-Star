// import { DashboardFakeData } from '../../../DashboardFakeData';
// import CostChart from "../CostChart/CostChart";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProgressModel from "../../components/common/Model/ProgressModel";
import RecentMessage from "../../components/DashboardPart/Dashboard/RecentMessage/RecentMessage";
import RecentOrder from "../../components/DashboardPart/Dashboard/RecentOrder/RecentOrder";
import SalesAnalytics from "../../components/DashboardPart/Dashboard/SalesAnalytics/SalesAnalytics";
import DashboardHeader from "../../components/DashboardPart/DashboardHeader/DashboardHeader";
import Sidebar from "../../components/DashboardPart/Sidebar/Sidebar";
import UserProfile from "../../components/DashboardPart/UserDashboard/UserProfile";
const Meta = dynamic(import("../../components/common/Meta"));
const DashboardCard = dynamic(
  import("../../components/DashboardPart/Dashboard/DashboardCard/DashboardCard")
);
// import "./Dashboard.css";

import style from "../../styles/Sass/pages/dashboard/dashboard.module.scss";

interface Message {
  _id: string;
  img: string;
  name: string;
  seen: boolean;
  message: string;
  date: string;
}
[];
const Dashboard = () => {
  // setNewNotice()
  const route = useRouter();
  const [dashboardData, setDashboardData] = useState<any>({});
  const [isAdmin, setIsAdmin] = useState<Boolean>();

  const { menu, submenu } = useRouter().query;

  useEffect(() => {
    setIsAdmin(Boolean(localStorage.getItem("isAdmin") === "true"));
    async function fetchData() {
      const res = await fetch(`https://med-star-bd.herokuapp.com/dashboard`);
      // convert data to json/
      const userData = await res.json();
      setDashboardData(userData);
    }

    // call the function

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  console.log(isAdmin);
  return (
    <div className={style.dashboard}>
      <Meta
        title="MedStart Dashboard"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <DashboardHeader></DashboardHeader>
      {isAdmin ? (
        <div className="flex">
          <aside className="h-screen">
            <Sidebar></Sidebar>
          </aside>

          <main className="py-5">
            {Object.keys(dashboardData).length === 0 && <ProgressModel />}
            <div>
              <DashboardCard
                cardValue={{
                  totalNewOrder: dashboardData?.newOrderList,
                  totalOrder: dashboardData?.orderList?.length,
                  totalSuccessOrder: dashboardData?.successOrderList,
                  totalIncome: dashboardData?.totalIncome,
                }}
              ></DashboardCard>
            </div>
            <div className={style.rightBody}>
              {/* <CostChart /> */}
              <RecentMessage messageData={dashboardData?.messageList} />
            </div>
            <div className={style.dashboardBody}>
              <RecentOrder orderData={dashboardData?.orderList} />

              <SalesAnalytics
                analytics={{
                  offline: dashboardData?.offlineSalesList,
                  online: dashboardData?.onlineSalesList,
                  pendingOrder: dashboardData?.newOrderList,
                }}
              />
            </div>
          </main>
        </div>
      ) : (
        <div className="flex">
          <aside className="h-screen">
            <Sidebar></Sidebar>
          </aside>

          <main className="py-5">
            <UserProfile />
          </main>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
