import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import ambulanceImage from "../../assets/image/ambulance-dir.png";
import { ambulanceList } from "../../Database/AmbulanceList.js";
import style from "../../styles/Sass/Components/Home/Ambulance.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
const Ambulance = () => {
  return (
    <div className={`${style.ambulance}`}>
      <div
        className={`${style.titlePart} flex justify-between items-center my-6`}
      >
        <h1 className={`${style.title}`}>Ambulance Service</h1>
        <Link href={"/"}>
          <p>View All</p>
        </Link>
      </div>
      <div className={` grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-6`}>
        {ambulanceList.slice(0, 4).map((Amb) => {
          return (
            <div
              key={Amb.id}
              className={`${style.ambulanceCard} card card-compact w-84 bg-base-100 shadow-xl`}
            >
              <figure>
                <Image src={ambulanceImage} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-center text-xl">
                  <div>
                    <h2 className="card-title ">{Amb.name}</h2>
                    <div className="flex gap-1 ">
                      <GrLocation className="mt-1" />
                      <p>{Amb.location_name}</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={`${style.ambulanceBody} text-base mt-5 `}>
                  <div className="flex gap-2 items-center py-1">
                    <div className={`${style.icon}`}>
                      <TiLocation />
                    </div>
                    <p className="">{Amb.location_details}</p>
                  </div>

                  <div className="flex gap-2 py-1 items-center">
                    <div className={`${style.icon}`}>
                      <IoIosCall />
                    </div>
                    <div className="flex gap-1">
                      <p>{Amb.contact1}</p>
                      <p>{Amb.contact2}</p>
                    </div>
                  </div>
                  {/* <span className="flex gap-2 items-center py-1">
                    <MdLocationOn className={`${style.icon}`} />
                    <p>{Amb.hotline}</p>
                  </span> */}
                </div>
                <div className="card-actions justify-center">
                  {/* className={`${style.map_button}`} */}
                  <SimpleButton>Show on Map</SimpleButton>
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default Ambulance;
