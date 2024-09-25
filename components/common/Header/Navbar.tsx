// import logo from '../../../aseets/images/ehostel';
// import Button from "../../custom/Button/Button";
import Link from "next/link";
import style from "../../../styles/Sass/common/Header/_navbar.module.scss";

const Navbar = () => {
  const Links = [
    { name: "Baby & Mom", link: "/medicine?category=baby_mom" },
    { name: "Personal Care", link: "/medicine?category=personal" },
    { name: "Drinks", link: "/medicine?category=nutrition_and_drinks" },
  ];
  const medicalLinks = [
    { name: "Call To Doctor", link: "/doctor" },
    { name: "Lab Test", link: "/lab_test" },
    { name: "Ambulance", link: "/ambulance" },
    { name: "Find Blood", link: "/find_blood" },
  ];

  return (
    <div>
      <nav>
        <div className="shadow-md w-full  top-0 left-0 ">
          <div className="md:flex items-center md:pr-4 justify-between  ">
            <div className="md:flex gap-2">
              <Link href={"/medicine"} passHref>
                <a>
                  <h2
                    className={`${style.navbarHeader} hidden md:block text-white`}
                  >
                    Medicine
                  </h2>
                </a>
              </Link>

              <ul
                className={`lg:flex hidden absolute  md:items-center md:pb-0 pb-12  md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in `}
              >
                {Links.map((link, index) => (
                  <li key={index} className="md:ml-8 text-base md:my-0 py-2">
                    <Link href={link.link} passHref>
                      <a className="text-white  duration-500">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex gap-2 md:pr-4  md:text-left">
              <ul
                className={`flex items-center justify-between md:pb-0   md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 pr-0 transition-all duration-500 ease-in `}
              >
                {medicalLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      index === medicalLinks.length - 1 &&
                      "text-center md:text-left"
                    } md:ml-8 text-base md:my-0 p-2 pr-0`}
                  >
                    <Link href={link.link} passHref>
                      <a className="text-white md:text-xl font-bold duration-500">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
