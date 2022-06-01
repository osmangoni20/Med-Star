import Image from "next/image";
import prescriptionImage from "../../assets/image/doctor-writing-prescription.jpg";
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
      <h2>Order By Prescription</h2>
      <div className="flex items-center">
        <div>
          {prescriptionUploadRules.map((rules) => {
            return <p key={rules.id}>{rules.content}</p>;
          })}
        </div>
        <div>
          <Image src={prescriptionImage} alt="" />
        </div>
      </div>
      <Button>Upload Prescription</Button>
    </div>
  );
};

export default Prescription;
