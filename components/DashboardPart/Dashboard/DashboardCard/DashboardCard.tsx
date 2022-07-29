import { FaCity, FaUserAlt } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { IoLogoDesignernews } from "react-icons/io";
import style from "../../../../styles/Sass/Components/DashboardPart/_dashboardCard.module.scss";

const DashboardCard = ({ cardValue }: any) => {
  const { totalIncome, totalNewOrder, totalOrder, totalSuccessOrder } =
    cardValue;

  const cardData = [
    {
      id: 1,
      name: "Total Sales",
      icon: "sales",
      iconBackground: "linear-gradient(80deg, #ffb996 20%, #ff7c96)",
      total:
        totalSuccessOrder < 10 ? "0" + totalSuccessOrder : totalSuccessOrder,
    },
    {
      id: 2,
      name: "Total Income",
      iconBackground: "linear-gradient(80deg, #87C5F7 20%, #389BE9)",
      icon: "income",
      total: totalIncome < 10 ? "0" + totalIncome : totalIncome,
    },
    {
      id: 3,
      name: "Total Order",
      iconBackground: "linear-gradient(80deg, #43D3BF 20%, #61D6C8)",
      icon: "order",
      total: totalOrder < 10 ? "0" + totalOrder : totalOrder,
    },
    {
      id: 4,
      name: "Total New Order",
      iconBackground: "linear-gradient(80deg, #FFC27C 20%, #FF9020)",
      icon: "order",
      total: totalNewOrder < 10 ? "0" + totalNewOrder : totalNewOrder,
    },
  ];

  // style={{backgroundColor:bgColor}}

  return (
    <div className={`${style.dashboardCard}`}>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`${style.cardInfo} flex justify-center items-center`}
        >
          <div className="">
            {card.icon === "income" && (
              <HiCurrencyBangladeshi
                style={{ background: card.iconBackground }}
                className={style.cardIcon}
              />
            )}
            {card.icon === "name" && (
              <FaUserAlt
                style={{ background: card.iconBackground }}
                className={style.cardIcon}
              />
            )}
            {card.icon === "sales" && (
              <IoLogoDesignernews
                style={{ background: card.iconBackground }}
                className={style.cardIcon}
              />
            )}
            {card.icon === "order" && (
              <FaCity
                style={{ background: card.iconBackground }}
                className={style.cardIcon}
              />
            )}

            <div>
              <h2>{card.name}</h2>
              <h3>{card.total}</h3>
              <p>Last 24 hours</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;

/* <div>
          <img className="place-self-start"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "20px",
              color: "white",
              //   marginRight: "4px",
              //   marginBottom: "3px"
            }}
            src={image}
            alt={`${name} icon`}
          />

          <div className="cardFooter place-self-end">
            {/* <h6 style={{color:bgColor}}>View Details</h6>
           <span className="text-2xl " style={{ color: bgColor }}>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
             </span>
          </div>
         </div>*/
