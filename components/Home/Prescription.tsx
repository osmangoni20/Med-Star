import Image from "next/image";
import prescriptionImage from "../../assets/image/doctor-writing-prescription.jpg";
import style from "../../styles/Sass/Components/Home/PatientServiceAndPrescriptionSystem.module.scss";
import Button from "../Custom/Button/Button";
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
  return (
    <div>
      <div
        className={`${style.prescription} md:flex items-center md:gap-9 md:justify-evenly`}
      >
        <div className={`${style.prescriptionRules}`}>
          <h2 className={`text-center text-4xl my-2 font-bold`}>
            Order By Prescription
          </h2>
          {prescriptionUploadRules.map((rules) => {
            return (
              <div className={`${style.rules}`} key={rules.id}>
                <p className={`${style.dot} mr-3`}></p>
                <p>{rules.content}</p>
              </div>
            );
          })}
          <div
            className={`my-6 ml-48 flex justify-center md:justify-start items-center`}
          >
            <Button>Upload Prescription</Button>
          </div>
        </div>
        <div className={`${style.prescriptionImage}`}>
          <Image src={prescriptionImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Prescription;
