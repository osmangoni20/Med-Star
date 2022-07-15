import React from "react";
import "./MenuOptionheader.css";
const MenuOptionsHeader = ({ AllHeaders }) => {
  // console.log(AllHeaders)
  return (
    <div className="optionsHeader flex items-center justify-between">
     
      <div className=" flex items-center">
      <ion-icon name={AllHeaders?.menuOptionHeader.icon}></ion-icon>
      <h6 className="text-base px-2">{AllHeaders?.menuOptionHeader.name}</h6>
      </div>
      <p>
        {AllHeaders?.sidebarMenuHeader}
      </p>
    </div>
  );
};

export default MenuOptionsHeader;
