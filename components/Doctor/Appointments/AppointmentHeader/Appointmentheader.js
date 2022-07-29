import Image from 'next/image';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import doctor from '../../../../assets/image/doctor_and_patient.png';
const Appointmentheader = ({HandleOnChange}) => {

    
    return (
        <main  className='flex justify-around items-center'>
            <div className=" offset-md-1">
                <h1 className='text-xl text-center py-5' style={{ color: '#3A4156' }}>Pick Your Appointment Date</h1>
                <Calendar
                    onChange={HandleOnChange}
                    value={new Date()}
                />
            </div>
            <div className=''>
                <Image height={200} width={200} src={doctor} alt="" />
            </div>
        </main>

    );
};

export default Appointmentheader;