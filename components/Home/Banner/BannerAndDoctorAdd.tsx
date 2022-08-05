import Image from "next/image";
import AdImag2 from "../../../assets/image/Ad.jpg";
import AdImag1 from "../../../assets/image/ads 1.jpg";

import style from "../../../styles/Sass/Components/Home/banner/_bannerAndDoctorAdd.module.scss";
import Banner from "./Banner";
const BannerAndDoctorAdd = () => {
  return (
    <div>
      <div className={`${style.bannerAndDoctorAdd}`}>
        <div className={`${style.doctorAdd}`}>
          <Image src={AdImag1} alt="" />
          <Image src={AdImag2} alt="" />
        </div>
        <div className={`${style.banner}`}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default BannerAndDoctorAdd;
