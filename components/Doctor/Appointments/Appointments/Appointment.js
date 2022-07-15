import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointmentheader from '../AppointmentHeader/Appointmentheader';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [Selecteddate,setSelectedDate]=useState(new Date());
    const HandleOnChange=(date)=>{
        setSelectedDate(date)
    }
    console.log(Selecteddate)
    return (
        <div>
            
            <Appointmentheader HandleOnChange={HandleOnChange}></Appointmentheader>
            <BookingAppointment date={Selecteddate}></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;