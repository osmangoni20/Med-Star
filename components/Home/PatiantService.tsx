import Image from "next/image";
import patientService3Image from "../../assets/image/doctor_and_patient.png";
import patientService1Image from "../../assets/image/online doctor.png";
import patientServiceImage from "../../assets/image/onlineTeleconsultation.jpg";
import style from "../../styles/Sass/Components/Home/PatientServiceAndPrescriptionSystem.module.scss";

const patientService = [
  {
    id: 1,
    content: "Easy and fast patient management",
  },
  {
    id: 2,
    content: "Informative description of the patient",
  },
  {
    id: 3,
    content:
      "The pharmacist will talk to you, select the medicine and confirm the order.",
  },
  {
    id: 4,
    content: " Different types of reports",
  },
  {
    id: 5,
    content:
      "Barcode smart ID card system for the patient Invoicing and billing",
  },
  {
    id: 6,
    content: "SMS and email notifications",
  },
];
const PatientService = () => {
  return (
    <div>
      <div
        className={`${style.patientService} md:flex items-center md:gap-9 md:justify-between`}
      >
        <div className={`flex items-center`}>
          <span className="md:block hidden">
            <Image height={200} width={200} src={patientService1Image} alt="" />
          </span>

          <Image
            className="md:block hidden"
            src={patientService3Image}
            alt=""
            height={200}
            width={200}
          />
          <span className="md:block hidden">
            <Image height={200} width={200} src={patientServiceImage} alt="" />
          </span>
        </div>
        <div className={`${style.service}`}>
          {patientService.map((service) => {
            return (
              <div className={`${style.serviceTitle}`} key={service.id}>
                <div>
                  <p className={`${style.dot}`}></p>
                </div>
                <p className="pl-3">{service.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PatientService;
