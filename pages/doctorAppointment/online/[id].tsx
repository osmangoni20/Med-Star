import { useEffect, useState } from "react";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header/Header";
import Meta from "../../../components/common/Meta";
import AppointmentDate from "../../../components/Doctor/Appointments/AppointmentHeader/AppointmentDate";
import BookingAppointment from "../../../components/Doctor/Appointments/BookingAppointment/BookingAppointment";

const Appointment = ({ data }: { data: any }) => {
  const [doctorData, setDoctorData] = useState({});
  const [selectedDate, setSelected] = useState<Date>(new Date());
  useEffect(() => {
    if (!data.camberTime) {
      setDoctorData({ ...doctorData, patientTime: "3.00pm - 8.00pm" });
    }
  }, [data.camberTime, doctorData]);
  console.log(selectedDate?.toLocaleString("en-us", { weekday: "long" }));
  console.log(selectedDate?.toLocaleString("default", { month: "long" }));
  console.log(selectedDate?.getFullYear());

  console.log(selectedDate?.getFullYear());
  console.log(selectedDate?.getMonth());
  console.log(String(selectedDate?.getDate()).padStart(2, "0"));
  return (
    <div>
      <Meta
        title="Doctor Appointment MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <AppointmentDate
        selected={selectedDate}
        setSelected={setSelected}
      ></AppointmentDate>
      <BookingAppointment date={selectedDate} type={"online"}  data={data}></BookingAppointment>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(ctx: { params: { id: any } }) {
  // Fetch data from external API

  const res = await fetch(
    `https://medstar-backend.onrender.com/doctor/${ctx.params.id}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Appointment;
