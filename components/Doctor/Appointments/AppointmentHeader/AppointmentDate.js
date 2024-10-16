import { format } from 'date-fns';
import Image from 'next/image';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import doctor from '../../../../assets/image/onlineTeleconsultation.jpg';
const AppointmentDate = ({selected,setSelected}) => {

    let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PPP')}.</p>;
  }
    return (
        <main style={{marginTop:"172px"}} className='flex justify-around items-center'>
            <div className=" offset-md-1">
                <h1 className='text-xl font-bold text-center py-5 text-[#4C9DC3]' >Pick Your Appointment Date</h1>
                {/* <Calendar
                    onChange={HandleOnChange}
                    value={new Date()}
                /> */}
                 <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
            </div>
            <div className=''>
                <Image height={400} width={400} src={doctor} alt="" />
            </div>
        </main>

    );
};

export default AppointmentDate;