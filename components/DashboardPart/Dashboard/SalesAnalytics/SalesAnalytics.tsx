import { FaUserAlt } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { IoLogoDesignernews } from "react-icons/io";
import style from "../../../../styles/Sass/Components/DashboardPart/Dashboard/_salesAnalytics.module.scss";
const SalesAnalytics = () => {
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
        <p className={`${style.parentage} text-blue-500`}>27%</p>
        <p className={`${style.total}`}>2250 </p>
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
        <p className={`${style.parentage} text-red-500`}>27%</p>
        <p className={`${style.total}`}>3650 </p>
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
        <p className={`${style.parentage} text-green-500`}>27%</p>
        <p className={`${style.total}`}>1840 </p>
      </div>
    </div>
  );
};

export default SalesAnalytics;
