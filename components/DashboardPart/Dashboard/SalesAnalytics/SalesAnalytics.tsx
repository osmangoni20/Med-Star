import { FaUserAlt } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { IoLogoDesignernews } from "react-icons/io";
import style from "../../../../styles/Sass/Components/DashboardPart/Dashboard/_salesAnalytics.module.scss";

interface SalesAnalytics {
  offline: number;
  online: number;
  pendingOrder: number;
}
const SalesAnalytics = ({ analytics }: any) => {
  const { offline, online, pendingOrder } = analytics;
  return (
    <div className={style.salesAnalytics}>
      <h3>Sales Analytics</h3>
      <div className={style.analyticsCard}>
        <div className="flex  gap-3">
          <FaUserAlt
            style={{
              background: "linear-gradient(80deg, #43D3BF 20%, #61D6C8)",
            }}
            className={style.cardIcon}
          />

          <div>
            <h4>Online Orders</h4>
            <p className={style.time}>last 24 hours</p>
          </div>
        </div>
        <p className={`${style.total}`}>
          {online < 10 ? "0" + online : online}
        </p>
      </div>

      <div className={style.analyticsCard}>
        <div className="flex  gap-3">
          <IoLogoDesignernews
            style={{
              background: "linear-gradient(80deg, #ffb996 20%, #ff7c96)",
            }}
            className={style.cardIcon}
          />

          <div>
            <h4>Offline Orders</h4>
            <p className={style.time}>last 24 hours</p>
          </div>
        </div>
        <p className={`${style.total}`}>
          {offline < 10 ? "0" + offline : offline}
        </p>
      </div>

      <div className={style.analyticsCard}>
        <div className="flex  gap-3">
          <HiCurrencyBangladeshi
            style={{
              background: "linear-gradient(80deg, #87C5F7 20%, #389BE9)",
            }}
            className={style.cardIcon}
          />

          <div>
            <h4>Pending Orders</h4>
            <p className={style.time}>last 24 hours</p>
          </div>
        </div>
        <p className={`${style.total}`}>
          {pendingOrder < 10 ? "0" + pendingOrder : pendingOrder}
        </p>
      </div>
    </div>
  );
};

export default SalesAnalytics;
