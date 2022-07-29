import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import style from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import demoImage from "/assets/image/2doctor.png";
// interface Data {
//   id: number;
//   img: any;
//   name: string;
//   designation: string;
//   education: string;
//   jobTitle: string;
// }
const DashboardInfoModel = ({
  data,
  setModel,
  showModel,
}: {
  data: any;
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(data);
  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.inner_popup}`}>
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <h2 className="text-center mb-5">Details</h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(data).map((property, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <h5 className=" text-2xl bold capitalize">{property}: </h5>
                    {property === "img" ? (
                      <Image
                        src={data[property] || demoImage}
                        height={200}
                        width={150}
                        alt={""}
                      />
                    ) : (
                      <h6 className="text-xl pl-2">{data[property]}</h6>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardInfoModel;
