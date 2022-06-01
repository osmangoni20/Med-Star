import Image from "next/image";
import AdImag from "../../../assets/image/Ad.jpg";
import style from "../../../styles/Sass/Components/Home/banner/_bannerAndDoctorAdd.module.scss";
import Banner from "./Banner";
const BannerAndDoctorAdd = () => {
  return (
    <div>
      <div className={`${style.bannerAndDoctorAdd}`}>
        <div className={`${style.doctorAdd}`}>
          <Image src={AdImag} alt="" />
        </div>
        <div className={`${style.banner}`}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default BannerAndDoctorAdd;
