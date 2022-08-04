import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../../../styles/Sass/Components/DashboardPart/_sidebar.module.scss";
import useFirebase from "../../hooks/useFirebase";
import { adminSidebarMenu, userSidebarMenu } from "./SidebarData";
import SubMenu from "./SubMenu";
import activePerson from "/assets/image/default_profile.png";
const Sidebar = () => {
  const { user }: any = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(Boolean(localStorage.getItem("isAdmin") === "true"));
  }, [user]);
  console.log(isAdmin);
  const sidebarMenu = isAdmin ? adminSidebarMenu : userSidebarMenu;
  return (
    <div className={`${style.sidebar} h-screen`}>
      <div className={`${style.dashboardLogo} pl-3  flex justify-between`}>
        <div className=" flex items-center ">
          <Image
            style={{
              borderRadius: "20px",
              marginRight: "4px",
              marginBottom: "3px",
            }}
            height={30}
            width={30}
            src={user.photoURL || activePerson}
            alt="personLogo"
          />

          <div className="pl-2">
            <h2>
              {user.email ? user.displayName.slice(0, 14) + "." : "User Name"}
            </h2>
            <p>{isAdmin ? "Admin" : "Customer"}</p>
          </div>
        </div>
        <div className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#007ACC"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
