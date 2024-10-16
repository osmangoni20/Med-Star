import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "../../styles/Sass/Components/Home/doctorCarousel.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
import useFirebase from "../hooks/useFirebase";

interface doctorData {
  _id: any;
  id: number;
  img: StaticImageData;
  category: string;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
}
[];
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
 

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
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
      }}
      onClick={onClick}
    />
  );
}
const Doctor = () => {
  const [doctor, setDoctor] = useState<doctorData[]>([]);
  const { user }: any = useFirebase();
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const res = await fetch("https://medstar-backend.onrender.com/doctor");
      // convert data to json
      const data = await res.json();
      setDoctor(data);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  console.log(doctor);
  return (
    <div className={`${style.carousel} transition-all duration-500 ease-in`}>
      {/* <div
        className={`${style.titlePart} md:flex justify-between items-center my-6`}
      >
        <h2 className={`${style.title}`}>Our Doctor</h2>
        <Link href={"/"}>
          <p>View All</p>
        </Link>
      </div> */}

      <div className={`${style.DoctorCarousel_inner} `}>
        <Slider {...settings}>
          {doctor.map((doctor, index) => {
            return (
              <div
                key={index}
                className={`${style.doctorCard} card lg:w-84 md:w-84  shadow rounded-lg`}
              >
                <figure className="h-[200px]">
                  <Image
                    src={doctor.img}
                    alt={doctor.name}
                    height={200}
                    width={200}
                  />
                </figure>
                <div className={`${style.doctorCardBody} card-body `}>
                  <h2 className="text-center">{doctor.name}</h2>
                  <p>{doctor.designation}</p>
                  <p>{doctor.education}</p>
                  <p>{doctor.jobTitle}</p>
                  <div className="card-actions justify-center">
                    <Link href={ user.email?`/doctor/${doctor._id}`:'/login'} passHref>
                      <a>
                        <SimpleButton>Appointment</SimpleButton>
                      </a>
                    </Link>
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
