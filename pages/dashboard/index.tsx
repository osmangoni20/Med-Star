// import { DashboardFakeData } from '../../../DashboardFakeData';
// import CostChart from "../CostChart/CostChart";
import { useRouter } from "next/router";
import DashboardCard from "../../components/DashboardPart/Dashboard/DashboardCard/DashboardCard";
import RecentMessage from "../../components/DashboardPart/Dashboard/RecentMessage/RecentMessage";
import RecentOrder from "../../components/DashboardPart/Dashboard/RecentOrder/RecentOrder";
import SalesAnalytics from "../../components/DashboardPart/Dashboard/SalesAnalytics/SalesAnalytics";
import DashboardHeader from "../../components/DashboardPart/DashboardHeader/DashboardHeader";
import Sidebar from "../../components/DashboardPart/Sidebar/Sidebar";
// import "./Dashboard.css";
import style from "../../styles/Sass/pages/dashboard/dashboard.module.scss";

const cardData = [
  {
    id: 1,
    name: "Total Sales",
    icon: "sales",
    total: 2500,
  },
  {
    id: 2,
    name: "Total Income",
    icon: "income",
    total: 2500,
  },
  {
    id: 3,
    name: "Total Order",
    icon: "order",
    total: 15,
  },
  {
    id: 4,
    name: "Total Patient",
    icon: "name",
    total: 15,
  },
];
const Dashboard = () => {
  // setNewNotice()
  const route = useRouter();
  const admin = false;
  if (!admin) {
    route.push("dashboard/my_order");
  }
  return (
    <div className={style.dashboard}>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen">
          <Sidebar></Sidebar>
        </aside>

        <main className="py-5">
          <div>
            <div className={`flex flex-wrap justify-between mt-5  mb-2`}>
              {cardData.map((cardData) => (
                <DashboardCard
                  key={cardData.id}
                  card={cardData}
                ></DashboardCard>
              ))}
            </div>
          </div>
          <div className={style.rightBody}>
            {/* <CostChart /> */}
            <RecentMessage />
          </div>
          <div className={style.dashboardBody}>
            <RecentOrder />

            <SalesAnalytics />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
