import { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import style from "../../../styles/Sass/common/Header/_header.module.scss";
import Button from "../../Custom/Button/Button";
import Navbar from "./Navbar";
import NavbarModel from "./NavbarModel";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={style.headerComponent}>
        <div
          className={`${style.topHeader}  md:px-5 lg:px-6 py-2 bg-blend-lighten border-bottom`}
        >
          <div className="flex justify-between items-center">
            <ul className="list-none flex items-center gap-4">
              <li className="flex items-center">
                <AiOutlineMail></AiOutlineMail>
                <a href="tell:01878452545">+88018784525</a>
              </li>
              <li className="flex items-center">
                <AiOutlinePhone />
                <a href="mail-to:support@ehostelbd.com">
                  support@ehostelbd.com
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <AiOutlineMobile />
              <a href="/ehostel">Save on our app</a>
            </div>
          </div>
        </div>
        <div className={style.middleHeader}>
          {open && <NavbarModel />}
          <div
            className={`${style.middle_header_body} flex items-center justify-between lg:justify-evenly md:justify-evenly py-2 `}
          >
            <div className={`${style.menuFoldIcon} flex items-center`}>
              <label htmlFor="my-modal-3">
                <AiOutlineMenu className="md:hidden block text-white" />
                <NavbarModel />
              </label>

              {/* <img className="branding" src={logo} alt=""></img> */}
              <h1 className="text-xl font-bold md:text-black text-white">
                MedStar
              </h1>
            </div>
            <label className="relative hidden md:block searchInput ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Medicine Search for anything..."
                type="text"
                name="search"
              />
            </label>
            <ul
              className={` ${style.iconList} flex items-center gap-3  list-unstyled`}
            >
              {/* <li>
                <BsBagCheck />
              </li> */}

              <li>
                <BsFillCartPlusFill />
              </li>
              {/* <li>
                <AiOutlineUser />
              </li> */}
              <span className="md:block lg:block ">
                <Button>Log In</Button>
              </span>
            </ul>
          </div>
        </div>
        <div className={style.lastHeader}>
          <Navbar />
        </div>
        <div className="mx-2">
          <div
            className={`${style.searchInput} md:hidden flex items-center justify-between py-2  `}
          >
            {/* <span className="sr-only">Search</span> */}

            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  py-2 pr-3  focus:outline-none   sm:text-sm"
              placeholder="Medicine Search for anything..."
              type="text"
              name="search"
            />
            <p className="searchIcon">
              <AiOutlineSearch />
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
