import React from "react";
import "./DashboardCard.css";
const DashboardCard = ({ card }) => {
  const { total, name } = card;
  // style={{backgroundColor:bgColor}}
  const dashboardCard= {
    width: "240px",
    padding: "10px",
    margin:"12px 1px",
    borderRadius: "5px",
    background: "linear-gradient(80deg, #ffb996 20%, #ff7c96)"
  }
  if(card.id===1){
    dashboardCard.background="linear-gradient(80deg, #ffb996 20%, #ff7c96)"
  }
  else if(card.id===2){
    dashboardCard.background="linear-gradient(80deg, #87C5F7 20%, #389BE9)"

  }
  else if(card.id===3){
    dashboardCard.background="linear-gradient(80deg, #43D3BF 20%, #61D6C8)"

  }
  else{
    dashboardCard.background="linear-gradient(80deg, #FFC27C 20%, #FF9020)"
  }
  return (
    <div style={dashboardCard}>
      <div className="cardText flex justify-center items-center">
        <div className="">
          <h2>{total}</h2>
          <h6>{name}</h6>
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