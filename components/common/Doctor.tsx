import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Sass/pages/doctor/doctor.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
import DoctorModel from "./Model/DoctorModel";
interface Iprops {
  id: number;
  img: any;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
}
const Doctor = ({ doctor }: { doctor: Iprops }) => {
  const [showModel, setModel] = useState<boolean>(false);

  return (
    <div>
      {showModel && (
        <DoctorModel setModel={setModel} showModel={showModel} data={doctor} />
      )}
      <div key={doctor.id} className={`${style.doctorCard} card w-84  shadow`}>
        <figure>
          <Image src={doctor.img} alt={doctor.name} />
        </figure>
        <div className={`${style.doctorCardBody} card-body `}>
          <h2 className="text-center">{doctor.name}</h2>
          <p>{doctor.designation}</p>
          <p>{doctor.education}</p>
          <p>{doctor.jobTitle}</p>
          <div className="card-actions justify-center">
            <span onClick={() => setModel(!showModel)}>
              <SimpleButton>Appointment Now</SimpleButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
