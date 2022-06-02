import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { doctorList } from "../../Database/doctorList";
import style from "../../styles/Sass/Components/Home/Doctor.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#c1c1c1" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#c1c1c1",
      }}
      onClick={onClick}
    />
  );
}
const Doctor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`${style.carousel} transition-all duration-500 ease-in`}>
      <div
        className={`${style.titlePart} flex justify-between items-center my-6`}
      >
        <h1 className={`${style.title}`}>Doctor Service</h1>
        <Link href={"/"}>
          <p>View All</p>
        </Link>
      </div>

      <div className={`${style.DoctorCarousel_inner} `}>
        <Slider {...settings}>
          {doctorList.map((doctor) => {
            return (
              <div
                key={doctor.id}
                className={`${style.doctorCard} card w-84  shadow`}
              >
                <figure>
                  <Image src={doctor.img} alt={doctor.name} />
                </figure>
                <div className={`${style.doctorCardBody} card-body `}>
                  <h2 className="text-center">{doctor.name}</h2>
                  <p>{doctor.designation}</p>
                  <p>{doctor.education}</p>
                  <p>{doctor.jobTitle}</p>
                  <div className="card-actions justify-center">
                    <SimpleButton>Appointment Now</SimpleButton>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Doctor;
