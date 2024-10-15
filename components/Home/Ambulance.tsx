import Image from "next/image";
import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import ambulanceImage from "../../assets/image/ambulance-dir.png";
import style from "../../styles/Sass/Components/Home/Ambulance.module.scss";
import MapModel from "../common/Model/MapModel";
import SimpleButton from "../Custom/Button/SimpleButton";
interface ambulanceData {
  id: number;
  name: string;
  img:any;
  location_name: string;
  location_details: string;
  contact1: string;
  contact2: string;
  hotline: string;
}
[];
const Ambulance = () => {
  const [progress, setProgress] = useState(false);
  const [mapModel, setModel] = useState(false);
  const [ambulance, setAmbulance] = useState<ambulanceData[]>([]);

  const HandleMapButton = () => {
    setModel(!mapModel);
  };
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const res = await fetch("https://medstar-backend.onrender.com/ambulance");
      // convert data to json
      const data = await res.json();
      setAmbulance(data);
    };
    if (ambulance.length === 0) {
      setProgress(!progress);
    } else {
      setProgress(!progress);
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [ambulance.length]);
  console.log(ambulance);
  return (
    <div className={`${style.ambulance}`}>
      {mapModel && <MapModel showModel={mapModel} setModel={setModel} />}
      {/* {!ambulance.length && <ProgressModel />} */}
      <div
        className={`${style.titlePart} md:flex justify-center items-center my-6`}
      >
        <h2>Ambulance Service</h2>
      </div>
      <div
        className={` md:grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-6`}
      >
        {ambulance.slice(0, 4).map((Amb) => {
          return (
            <div
              key={Amb.id}
              className={`${style.ambulanceCard} card card-compact w-84 bg-base-100 shadow-xl`}
            >
              <figure>
                <Image
                  height={180}
                  width={320}
                  src={Amb?.img||ambulanceImage}
                  alt="Shoes"
                />
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
                    <p className="">{Amb.location_details.slice(0,30)}</p>
                  </div>

                  <div className="flex gap-2 py-1 items-center">
                    <div className={`${style.icon}`}>
                      <IoIosCall />
                    </div>
                    <div className="">
                      <p>{Amb.contact1}</p>
                      <p>{Amb.contact2}</p>
                    </div>
                  </div>
                  {/* <span className="flex gap-2 items-center py-1">
                    <MdLocationOn className={`${style.icon}`} />
                    <p>{Amb.hotline}</p>
                  </span> */}
                </div>
                <div
                  onClick={HandleMapButton}
                  className="card-actions justify-center"
                >
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
