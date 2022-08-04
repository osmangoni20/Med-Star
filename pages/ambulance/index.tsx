import Image from "next/image";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import ambulanceImage from "../../assets/image/ambulance-dir.png";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import MapModel from "../../components/common/Model/MapModel";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/pages/ambulance/_ambulance.module.scss";

const AmbulanceService = ({ data }: any) => {
  const [mapModel, setModel] = useState(false);
  return (
    <div>
      <Meta
        title="Ambulance Service MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.ambulance} my-10`}>
        {mapModel && <MapModel showModel={mapModel} setModel={setModel} />}

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
                    <Image
                      height={180}
                      width={320}
                      src={ambulanceImage}
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
                    <div
                      onClick={() => setModel(!mapModel)}
                      className="card-actions justify-center"
                    >
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
  const res = await fetch(`https://med-star-bd.herokuapp.com/ambulance`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default AmbulanceService;
