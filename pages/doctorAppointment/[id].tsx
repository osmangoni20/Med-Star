import { useEffect, useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import AppointmentHeader from "../../components/Doctor/Appointments/AppointmentHeader/Appointmentheader";
import BookingAppointment from "../../components/Doctor/Appointments/BookingAppointment/BookingAppointment";

const Appointment = ({ data }: { data: any }) => {
  const [doctorData, setDoctorData] = useState({});
  const [SelectedDate, setSelectedDate] = useState(new Date());
  const HandleOnChange = (date: any) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    if (!data.camberTime) {
      setDoctorData({ ...doctorData, patientTime: "3.00pm - 8.00pm" });
    }
  }, []);
  return (
    <div>
      <Meta
        title="Doctor Appointment MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <AppointmentHeader HandleOnChange={HandleOnChange}></AppointmentHeader>
      <BookingAppointment date={SelectedDate} data={data}></BookingAppointment>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(ctx: { params: { id: any } }) {
  // Fetch data from external API

  const res = await fetch(`http://localhost:4000/doctor/${ctx.params.id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Appointment;
