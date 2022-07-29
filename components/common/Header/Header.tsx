import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import logo from "../../../assets/image/medicine logo.jpg";
import { State } from "../../../State";
import style from "../../../styles/Sass/common/Header/_header.module.scss";
import Button from "../../Custom/Button/Button";
import useFirebase from "../../hooks/useFirebase";
import Navbar from "./Navbar";
import NavbarModel from "./NavbarModel";
import defaultProfile from "/assets/image/default_profile.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { user }: any = useFirebase();
  const [totalOrderCart, setCartLength] = useState<any>(0);
  const [isAdmin, setAdmin] = useState(false);

  const totalCardNumber = useSelector((state: State) => state.cart);
  console.log(user);
  useEffect(() => {
    {
      const fetchData = async () => {
        // get the data from the api
        const res = await fetch("https://med-star-bd.herokuapp.com/my-cart");
        const adminRes = await fetch(
          `http://localhost:5000/isAdmin/${user.email}`
        );
        // convert data to json

        const data = await res.json();
        setCartLength(data.length);
        setAdmin(Boolean(localStorage?.getItem("isAdmin")));
        // if (typeof window !== "undefined") {
        //   localStorage.setItem("totalCart", data.length);
        // }
      };

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }
  }, [totalCardNumber, user]);
  return (
    <div>
      <div className={`${style.headerComponent} sticky top-0`}>
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
              <a href="/medStart">Save on our app</a>
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
              <Link href={"/"} passHref>
                <a className={style.logo}>
                  <Image src={logo} height={60} width={60} alt="Med Star" />
                </a>
              </Link>
            </div>
            <label className={`${style.searchInput} relative hidden md:block`}>
              <div className={style.inputField}>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Medicine Search for anything..."
                  type="text"
                  name="search"
                />
                <button>Search</button>
              </div>
            </label>
            <ul className={` ${style.iconList}`}>
              {/* <li>
                <BsBagCheck />
              </li> */}

              <Link href={"/order_cart"} passHref>
                <a>
                  <li>
                    <BsFillCartPlusFill />
                    <span className={`${style.totalCartItem}`}>
                      {totalOrderCart}
                    </span>
                  </li>
                </a>
              </Link>
              {/* <li>
                <AiOutlineUser />
              </li> */}
              <span className="md:block lg:block ">
                {user.email ? (
                  <span className={style.profileLogo}>
                    <Link href={"/dashboard"} passHref>
                      <Image
                        src={user.photoURL || defaultProfile}
                        alt={""}
                        height={35}
                        width={35}
                      />
                    </Link>
                  </span>
                ) : (
                  <Link href={"/login"} passHref>
                    <a className={style.loginButton}>
                      <Button>Log In</Button>
                    </a>
                  </Link>
                )}
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
      </div>
    </div>
  );
};

export default Header;
