import Image from "next/image";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import ambulanceImage from "../../assets/image/ambulance-dir.png";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/Components/Home/Ambulance.module.scss";

const AmbulanceService = ({ data }: any) => {
  return (
    <div>
      <Header />
      <div className={`${style.ambulance}`}>
        <div
          className={` grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-6`}
        >
          {data.map(
            (Amb: {
              id: Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              location_name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              location_details:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              contact1:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              contact2:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => {
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
                    </div>
                    <div className="card-actions justify-center">
                      {/* className={`${style.map_button}`} */}
                      <SimpleButton>Show on Map</SimpleButton>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(ctx: { params: { doctorId: any } }) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/ambulance/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default AmbulanceService;
