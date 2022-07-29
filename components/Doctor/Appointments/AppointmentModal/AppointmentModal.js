import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import './Modal.css';
const customStyles = {
  content: {
    // textAlign:'center',
    width: '500px',
    height: "510px",
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const AppointmentModal = ({ date, bookingDetails, modalIsOpen, closeModal }) => {
  Modal.setAppElement('#root');
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
    data.date=date;
    data.Subject=bookingDetails.subject;
    data.HoursTime=bookingDetails.hoursTime
    data.Created=new Date().toDateString();
    fetch('https://secret-waters-40749.herokuapp.com/addAppointment',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(success=>{
      if(success){
        alert('Appointment Created Successfully')
        closeModal()
      }
    })
    
  };

  return (
    <div className='modal'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 className='text-center py-2 brand-text'>{bookingDetails.subject}</h2>
        <p>{date.toDateString()}</p>
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>

          <div className='form-group'>
            <select className="form-select" name='selectDoctor' {...register("selectDoctor", { required: true })} aria-label="Example select with button addon" >
              <option disabled={true} selected>Select Doctor</option>
              <option value="Mohammad khayrul basar">Mohammad khayrul basar</option>
              <option value="Kader Mollah">Kader Mollah</option>
              <option value="Shakib al hasan">Shakib al hasan</option>
            </select>
            <p> {errors?.selectDoctor && <span>This field is required</span>}</p>
          </div>

          <div className='form-group '>
            <input className='form-control' type='text' name='name' placeholder='Enter Your name*' {...register("name", { required: true })} />
            <p> {errors?.name && <span>This field is required</span>}</p>
          </div>

          <div className='form-group'>
            <input className='form-control' type='text' name='number' placeholder='Enter Your Number*' {...register("number", { required: true })} />
            <p> {errors?.number && <span>This field is required</span>}</p>
          </div>
          <div className='form-group'>
            <input className='form-control' type='email' name='email' placeholder='Email*' {...register("email", { required: true })} />
            <p> {errors?.email && <span>This field is required</span>}</p>
          </div>


          <div className="form-group row">
            <div className='col-4'>
              <select className="form-select" name='gender' {...register("gender", { required: true })} aria-label="Example select with button addon" >
                <option disabled={true} selected>Gender</option>
                <option value="male">Male</option>
                <option value="famale">Famale</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='col-4'>
              <input className='form-control' type='number' name='age' placeholder='Age*' {...register("age", { required: true })} />
              <p> {errors?.age && <span>This field is required</span>}</p>
            </div>

            <div className='col-4'>
              <input className='form-control' type='number' name='weight' placeholder='Weight*' {...register("Weight", { required: true })} />
              <p> {errors?.weight && <span>This field is required</span>}</p>
            </div>
          </div>

          <div className='form-group text-end'>
            <input type='submit' value='Submit' className='btn btn-primary'></input>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;