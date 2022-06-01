import doctor1Image from '../../assets/image/doctor3.png';
import doctor2Image from '../../assets/image/doctor4.png';
import doctor3Image from '../../assets/image/doctor5.png';
import doctor4Image from '../../assets/image/doctor6.png';
import doctor5Image from '../../assets/image/doctor7.png';
import doctor6Image from '../../assets/image/doctor8.png';
import doctor7Image from '../../assets/image/doctor9.png';
import doctor8Image from '../../assets/image/doctor1.png';
import Image from 'next/image';
const doctorList=[
    {
        id:1,
        img:doctor1Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:2,
        img:doctor2Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:3,
        img:doctor3Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:4,
        img:doctor4Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:5,
        img:doctor5Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:6,
        img:doctor6Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:7,
        img:doctor7Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
    {
        id:8,
        img:doctor8Image,
        name:"Dr. A.M Forid Uddin Ahmed",
        designation:"Arthroscopy & Arthoplasty Surgeon",
        education:"MBBS(CMC),FCPS(General Surgery)",
        jobTitle:"Assistant Professor"
    },
]
const Doctor = () => {
  return <div>
     <div className='grid grid-cols-4 gap-2'>
     {
          doctorList.map(doctor=>{
              return(
                <div key={doctor.id} className="card w-96 bg-base-100 shadow-xl">
                <figure><Image src={doctor.img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{doctor.name}</h2>
                  <p>{doctor.designation}</p>
                  <p>{doctor.education}</p>
                  <p>{doctor.jobTitle}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Appointment Now</button>
                  </div>
                </div>
              </div>
              )
          })
      }
     </div>
      
  </div>;
};

export default Doctor;
