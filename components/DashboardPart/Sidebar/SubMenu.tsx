import Link from "next/link";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import {
  AiFillContacts,
  AiOutlineHistory,
  AiOutlineShop,
} from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaAmbulance } from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";
import {
  MdDashboard,
  MdOutlineProductionQuantityLimits,
  MdOutlineSick,
  MdReviews,
} from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import style from "../../../styles/Sass/Components/DashboardPart/_sidebar.module.scss";

const SubMenu = ({ item }: any) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const ShowSubNav = () => {
    console.log(showOptions);
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <button
        id="dropdownSmallButton"
        data-dropdown-toggle="dropdownSmall"
        className="inline-flex justify-between items-center py-2 my-3 px-3 mr-3 mb-3  text-center text-white  rounded md:mb-0 hover:bg-gray-100 "
        type="button"
        style={{
          width: "100%",
          color: "black",
          fontSize: "17px", //important
        }}
        onClick={item.subOptions && ShowSubNav}
      >
        <div className=" items-center flex ">
          {/* <ion-icon name={item.icon}></ion-icon> */}
          {item.icon === "dashboard" && <MdDashboard />}
          {item.icon === "order" && <AiOutlineShop />}
          {item.icon === "patient" && <MdOutlineSick />}
          {item.icon === "product" && <MdOutlineProductionQuantityLimits />}
          {item.icon === "doctor" && <GiDoctorFace />}
          {item.icon === "ambulance" && <FaAmbulance />}
          {item.icon === "blood" && <BiDonateBlood />}
          {item.icon === "ad" && <RiAdvertisementFill />}
          {item.icon === "admin" && <GrUserAdmin />}
          {item.icon === "notice" && <IoNotifications />}
          {item.icon === "contact" && <AiFillContacts />}

          {item.icon === "profile" && <CgProfile />}
          {item.icon === "review" && <MdReviews />}
          {item.icon === "history" && <AiOutlineHistory />}

          {item.subOptions ? (
            <span className="pl-1">{item.name}</span>
          ) : (
            <Link href={item.link} passHref>
              <a className="pl-1">{item.name}</a>
            </Link>
          )}
        </div>
        {!item.subOptions && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 w-3 h-3"
            viewBox="0 0 20 20"
            fill="#000000"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        )}
        {item.subOptions &&
          (showOptions ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-3 h-3"
              fill="#000000"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ))}
      </button>
      {showOptions &&
        item.subOptions.map(
          (
            item: {
              link: any;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              countNumber: any;
            },
            index: any
          ) => {
            return (
              <li
                key={index}
                style={{
                  height: "40px",
                  width: "100%",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "17px", //important
                }}
                className="block hover:bg-gray-200 hover:text-black p-0 text-lg text-gray hover:#261e1e dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <Link href={item.link} passHref>
                  <a className="block px-10 pr-1"> {item.name}</a>
                </Link>

                {item.countNumber && (
                  <span className={`${style.new_order}`}>1</span>
                )}
              </li>
            );
          }
        )}
    </div>
  );
};

export default SubMenu;
