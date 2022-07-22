import Image from "next/image";
import Link from "next/link";
import style from "../../../styles/Sass/Components/DashboardPart/_dashboardHeader.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import useFirebase from "../../hooks/useFirebase";
import logo from "/assets/image/medicine logo.jpg";
const DashboardHeader = () => {
  const { user, Logout }: any = useFirebase();
  const HandleLogout = () => {
    Logout();
    console.log("logout");
  };
  return (
    <div className="shadow-md w-full bg-white ">
      <div className="md:flex flex items-center justify-between bg-white py-2  ">
        <div className={`${style.logopart} flex justify-between items-center`}>
          <div className="pl-3 cursor-pointer">
            <Link href={"/"} passHref>
              <Image src={logo} height={50} width={50} />
            </Link>
          </div>
          <h2 className="text-2xl">Dashboard</h2>
        </div>
        <div className="pr-3" onClick={HandleLogout}>
          <SimpleButton>Logout</SimpleButton>
        </div>
        {/* <div className="flex items-center userName">
           <h2 className="text-sm pr-2">
            {" "}
            {user.email ? user.displayName : ""}
          </h2>
          <Image
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "20px",
              marginRight: "4px",
              marginBottom: "3px",
            }}
            height={30}
            width={30}
            src={activePerson}
            alt="personLogo"
          /> 
        </div> */}
      </div>
      <hr className="md:hidden sm:hidden"></hr>
    </div>
  );
};

export default DashboardHeader;
