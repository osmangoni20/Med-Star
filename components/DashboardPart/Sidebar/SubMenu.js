import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
const SubMenu = ({ item }) => {
  const [showOptions, setShowOptions] = useState(false);
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
        <div className=" items-center flex">
          <ion-icon name={item.icon}></ion-icon>

          {item.subOptions ? (
          
             <span className="pl-1">{item.name}</span>
               
          ) : (
            <Link to={item.link} className="pl-1 ">
              {item.name}
            </Link>

            
          )}
        </div>
        {!item.subOptions && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 w-3 h-3"
            viewBox="0 0 20 20"
            fill="#000000"
            stroke="currentColor"
          >
            <path
           
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        )}
        {item.subOptions &&
          (showOptions ? (
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 w-3 h-3"
              fill="#000000"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ))}
      </button>
      {showOptions &&
        item.subOptions.map((item, index) => {
          return (
            <li
              style={{
                height:"40px",
                width: "100%",
                color: "black",
                display:"flex",
                justifyContent:"space-between",
                fontSize: "17px", //important
              }}
              className="block hover:bg-gray-200 hover:text-black p-0 text-lg text-gray hover:#261e1e dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              <Link to={item.link} className="block px-10 pr-1">
                {item.name}
               
              </Link>
              {item.countNumber&& <span className="request-number">1</span>
            }
            </li>
          );
        })}
    </div>
  );
};

export default SubMenu;
