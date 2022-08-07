import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import SingleDoctor from "../../components/common/SingleDoctor";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/pages/doctor/_doctor.module.scss";

type Data = {
  _id: string;
  img: any;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
};
const AllDoctor = ({ doctorData }: { doctorData: any }) => {
  const [searchName, setSearchName] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [uniqueDoctor, setUniqueData] = useState<any>([]);

  const getUniqueDoctorData = (array: any[]) => {
    let uniqueArray = [];

    // Loop through array values
    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i].category) === -1) {
        uniqueArray.push(array[i].category);
      }
    }
    return uniqueArray;
  };

  useEffect(() => {
    setUniqueData(getUniqueDoctorData(doctorData));
  }, []);
  const HandleFieldValue = (e: any) => {
    setSearchName(e.target.value);
  };
  const HandleSearchLabTest = () => {
    fetch(`https://med-star-bd.herokuapp.com/doctor/?searchValue=${searchName}`)
      .then((res) => res.json())
      .then((data) => setSearchList(data))
      .then((error) => console.log(error));
  };
  return (
    <div>
      <Meta
        title="Doctor MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.doctor} md:flex gap-6`}>
        <aside className="h-screen  pt-0">
          <div>
            <form>
              <div className={`${style.input_filed}`}>
                <AiOutlineUser className={`${style.input_icon}`} />

                <select
                  placeholder={"Doctor Name "}
                  name={"name"}
                  onBlur={(e) => HandleFieldValue(e)}
                >
                  {uniqueDoctor.map((doctor: any, index: any) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <span onClick={HandleSearchLabTest}>
              <SimpleButton>Search Doctor</SimpleButton>
            </span>
          </div>

          <h3 className="text-left mt-12  font-bold text-xl">Categories</h3>
          {/* <Categories data={data} /> */}
          <p>Hart Consultant</p>
          <hr></hr>
          <p>Arthoplasty Surgeon</p>
          <hr></hr>
        </aside>
        <main>
          <div className="md:grid md:grid-cols-3 md:gap-20 my-10">
            {(searchList.length > 0 ? searchList : doctorData).map(
              (doctor: Data) => (
                <SingleDoctor key={doctor._id} doctor={doctor} />
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://med-star-bd.herokuapp.com/doctor`);
  const doctorData = await res.json();

  // Pass data to the page via props
  return { props: { doctorData } };
}
export default AllDoctor;
