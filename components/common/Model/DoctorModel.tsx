import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import style from "../../../styles/Sass/common/model/_doctorModel.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
interface Data {
  _id: string;
  img: any;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
}
const DoctorModel = ({
  data,
  setModel,
  showModel,
}: {
  data: Data;
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
            <div className="flex justify-center">
              <div className={`${style.singleDoctor} p-5 my-5`}>
                <div className="">
                  <div className={`flex justify-between gap-12`}>
                    <figure>
                      <Image
                        src={data.img}
                        width={200}
                        height={200}
                        alt={data.name}
                      />
                    </figure>
                    <div className={`${style.productDetails}`}>
                      <h3 className="text-xl pb-3 text-bold">{data.name}</h3>
                      <p className="text-sm py-4">{data.designation}</p>
                      <p className="text-sm py-4">{data.education}</p>
                      <p className="text-sm py-4">{data.jobTitle}</p>
                    </div>
                  </div>

                  <div className={`${style.buttonCard} flex `}>
                    <div>
                      <h3>{data.name}</h3>
                      <div className="mt-5 flex justify-evenly items-center gap-5">
                        <Link href={`/doctorAppointment/${data._id}`} passHref>
                          <a>
                            <SimpleButton>Chamber</SimpleButton>
                          </a>
                        </Link>

                        <SimpleButton>Video Call</SimpleButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DoctorModel;
