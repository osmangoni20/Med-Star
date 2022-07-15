import React, { useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
const BookingCard = ({booking,date}) => {

  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-sm-4">
    <div className="card mb-4">
      <div className="card-body text-center py-5">
        <h3 className="card-title btn-text">{booking.subject}</h3>
        <h5>{booking.hoursTime}</h5>
        <p className='text-uppercase'>{booking.totalSpace} Space Available</p>
        <button onClick={openModal} className='text-uppercase btn-brand text-white fw-bold'>Book Appointment</button>
        <AppointmentModal date={date} bookingDetails={booking} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentModal>
      </div>
    </div>
  </div>
    );
};

export default BookingCard;