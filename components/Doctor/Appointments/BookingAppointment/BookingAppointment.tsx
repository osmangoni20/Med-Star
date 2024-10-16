import { useState } from "react";
import CustomModel from "../../../common/Model/CustomModel";
import InputFieldModel from "../../../common/Model/InputFieldModel";
import SimpleButton from "../../../Custom/Button/SimpleButton";
const BookingAppointment = ({ date, data,type }: any) => {
  const [showModel, setModel] = useState<boolean>(false);
  const [successModel, setSuccessModel] = useState(false);
  const [modelData, setModelData] = useState({});

  const dd = date?.toLocaleString("en-us", { weekday: "long" });
  const mm = date?.toLocaleString("default", { month: "long" });

  const day = String(date?.getDate()).padStart(2, "0");
  const month = String(date?.getMonth()).padStart(2, "0"); //January is 0!
  const yyyy = date?.getFullYear();

  const appointMentDate = dd + "-" + mm + "-" + yyyy;
  const appointmentDay = day + "-" + month + "-" + yyyy;
  console.log(date);
  function openModal() {
    setModel(true);
  }

  //   function closeModal(){
  //     setModel(false);
  //   }
  return (
    <div className="pb-5 mb-8">
      {showModel && (
        <InputFieldModel
          type={"appointment"}
          setModel={setModel}
          showModel={showModel}
          data={data}
          setSuccessModel={setSuccessModel}
          setModelData={setModelData}
          date={date}
        />
      )}
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h2>{data.name}</h2>
          <h1>
            {appointMentDate} ({appointmentDay})
          </h1>
          <h6>3.00pm - 6.00pm</h6>
          {successModel && (
            <CustomModel
              modelData={modelData}
              showModel={successModel}
              setModel={setSuccessModel}
            ></CustomModel>
          )}
          <span onClick={openModal}>
            <SimpleButton>Booking Appointment</SimpleButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
