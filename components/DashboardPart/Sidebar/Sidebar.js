import React from "react";
import useAuth from "../../../Authentication/Hooks/useAuth";
import activePerson from "../../../image/logo.jpg";
import "./Sidebar.css";
import { adminSidebarMenu, userSidebarMenu } from "./SidebarData";
import SubMenu from "./SubMenu";

const Sidebar = () => {

  const{user}=useAuth();
  const admin=true;
  const sidebarMenu=admin?adminSidebarMenu:userSidebarMenu;
  return (
    <div className="sidebar h-screen">
      <div className="pl-3 dashboardLogo flex justify-between">
        <div className=" flex items-center ">
          <img
            style={{
              height: "35px",
              width: "35px",
              borderRadius: "20px",
              marginRight: "4px",
              marginBottom: "3px",
            }}
            src={activePerson}
            alt="personLogo"
          />

          <div>
            <h2>{user.email?user.displayName.slice(0,14) +'.':"User Name"}</h2>
            <p>{admin?"Admin":"Student"}</p>
          </div>
        </div>
        <div className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="#007ACC"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
      </div>

      {sidebarMenu.map((menu, index) => (
        <SubMenu item={menu} key={index}></SubMenu>
      ))}
    </div>
  );
};

export default Sidebar;
