import { useState } from "react";
import AppointmentModel from "../../../common/Model/AppointmentModel";
import SimpleButton from "../../../Custom/Button/SimpleButton";
const BookingAppointment = ({ date, data }: any) => {
  const [showModel, setModel] = useState<boolean>(false);

  const dd = date.toLocaleString("en-us", { weekday: "long" });
  const day = String(date.getDate()).padStart(2, "0");
  const mm = date.toLocaleString("default", { month: "long" });
  const month = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();

  const appointMentDate = dd + "-" + mm + "-" + yyyy;
  const appointmentDay = day + "-" + month + "-" + yyyy;
  function openModal() {
    setModel(true);
  }

  //   function closeModal(){
  //     setModel(false);
  //   }
  return (
    <div className="pb-5 mb-8">
      {showModel && (
        <AppointmentModel
          setModel={setModel}
          showModel={showModel}
          data={data}
          date={appointmentDay}
        />
      )}
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h2>{data.name}</h2>
          <h1>
            {appointMentDate} ({appointmentDay})
          </h1>
          <h6>3.00pm - 6.00pm</h6>

          <span onClick={openModal}>
            <SimpleButton>Booking Appointment</SimpleButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
