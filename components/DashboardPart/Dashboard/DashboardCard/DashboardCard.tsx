import { FaCity, FaUserAlt } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { IoLogoDesignernews } from "react-icons/io";
import style from "../../../../styles/Sass/Components/DashboardPart/_dashboardCard.module.scss";
const DashboardCard = ({ card }: any) => {
  const { total, name, icon } = card;
  // style={{backgroundColor:bgColor}}
  const cardIcon = {
    background: "linear-gradient(80deg, #ffb996 20%, #ff7c96)",
  };
  if (card.id === 1) {
    cardIcon.background = "linear-gradient(80deg, #ffb996 20%, #ff7c96)";
  } else if (card.id === 2) {
    cardIcon.background = "linear-gradient(80deg, #87C5F7 20%, #389BE9)";
  } else if (card.id === 3) {
    cardIcon.background = "linear-gradient(80deg, #43D3BF 20%, #61D6C8)";
  } else {
    cardIcon.background = "linear-gradient(80deg, #FFC27C 20%, #FF9020)";
  }
  return (
    <div>
      <div className={`${style.cardInfo} flex justify-center items-center`}>
        <div className="">
          {icon === "income" && (
            <HiCurrencyBangladeshi
              style={cardIcon}
              className={style.cardIcon}
            />
          )}
          {icon === "name" && (
            <FaUserAlt style={cardIcon} className={style.cardIcon} />
          )}
          {icon === "sales" && (
            <IoLogoDesignernews style={cardIcon} className={style.cardIcon} />
          )}
          {icon === "order" && (
            <FaCity style={cardIcon} className={style.cardIcon} />
          )}

          <h2>{name}</h2>
          <h3>{total}</h3>
          <p>Last 24 hours</p>
        </div>
      </div>
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
