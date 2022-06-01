import Image from "next/image";
import patientServiceImage from "../../assets/image/Patient.jpg";
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
      <div className="flex items-center justify-between">
        <div>
          <Image src={patientServiceImage} alt="" />
        </div>
        <div>
          {patientService.map((service) => {
            return <p key={service.id}>{service.content}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PatientService;
