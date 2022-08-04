import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Sass/Components/Home/PatientServiceAndPrescriptionSystem.module.scss";
import CustomModel from "../common/Model/CustomModel";
import InputFieldModel from "../common/Model/InputFieldModel";
import LargestButton from "../Custom/Button/LargestButton";
import prescriptionImage from "/assets/image/doctor-writing-prescription.png";
const prescriptionUploadRules = [
  {
    id: 1,
    content: "Take a picture of the prescription or scan and upload.",
  },
  {
    id: 2,
    content:
      "Our pharmacist will contact you at the phone number you provided after receiving your prescription.",
  },
  {
    id: 3,
    content:
      "The pharmacist will talk to you, select the medicine and confirm the order.",
  },
  {
    id: 4,
    content: " Deliver your medicine / product on time",
  },
  {
    id: 5,
    content: "Show your prescription at the time of delivery of the medicine.",
  },
];
const Prescription = () => {
  const [showModel, setModel] = useState<boolean>(false);
  const [successModel, setSuccessModel] = useState(false);
  const [modelData, setModelData] = useState({});

  return (
    <div>
      {showModel && (
        <InputFieldModel
          type={"prescription_upload"}
          setModel={setModel}
          showModel={showModel}
          setSuccessModel={setSuccessModel}
          setModelData={setModelData}
        />
      )}

      {successModel && (
        <CustomModel
          modelData={modelData}
          showModel={successModel}
          setModel={setSuccessModel}
        ></CustomModel>
      )}

      <div
        className={`${style.prescription} md:flex items-center md:gap-9 md:justify-evenly`}
      >
        <div className={`${style.prescriptionRules}`}>
          <h2 className={`text-center mt-5  my-2 font-bold`}>
            Order By Prescription
          </h2>
          {prescriptionUploadRules.map((rules) => {
            return (
              <div className={`${style.serviceTitle}`} key={rules.id}>
                <div>
                  <p className={`${style.dot}`}></p>
                </div>
                <p className="pl-3">{rules.content}</p>
              </div>
            );
          })}
          <div
            className={`my-6 md:ml-48 flex justify-center md:justify-start items-center`}
          >
            <span onClick={() => setModel(true)}>
              <LargestButton>Upload Prescription</LargestButton>
            </span>
          </div>
        </div>
        <div className={`${style.prescriptionImage}`}>
          <Image height={400} width={400} src={prescriptionImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Prescription;
