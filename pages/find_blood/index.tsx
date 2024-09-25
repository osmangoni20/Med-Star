import Image from "next/image";
import { useState } from "react";
import { FaCity } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/pages/findBlood/_findBlood.module.scss";
import demoImag from "/assets/image/personlogo.jpg";
interface Data {
  id: number;
  blood_Group: string;
  district: string; 
  img: string;
 name: string; 
 contact: string;

}
const FindBlood = ({ data }: any) => {
  const [searchValue, setSearchValue] = useState<any>({});
  const [donnerData, setDonnerData] = useState<any>(data);
  const HandleFieldValue = (e: any) => {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };
  const capitalizeFirstLetter = (
    [first, ...rest]: string,
    locale = navigator.language
  ) =>
    first === undefined ? "" : first.toLocaleUpperCase(locale) + rest.join("");

  const HandleSearchDonner = () => {
    fetch(
      `https://medstar-backend.onrender.com/donner?group=${
        searchValue.blood_Group
      }&district=${capitalizeFirstLetter(`${searchValue.district}`)}`
    )
      .then((res) => res.json())
      .then((data) => setDonnerData(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Meta
        title="Find Blood MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.findBlood}`}>
        {/* <aside className="h-screen">
          <h3 className="text-center my-4 text-2xl font-bold ">Blood Group</h3>
          <Categories data={bloodGroup} />
        </aside> */}

        <main className="mt-10">
          <form className="flex justify-center">
            <div className={`${style.form_input_field} `}>
              {/* //Blood Group */}
              <div>
                <h5>Blood Group </h5>
                <div className={`${style.input_filed}`}>
                  <MdBloodtype className={`${style.input_icon}`} />

                  <select
                    placeholder={"Blood Group "}
                    name={"blood_Group"}
                    onBlur={(e) => HandleFieldValue(e)}
                  >
                    <option value={"a_positive"}>A+</option>
                    <option value={"a_negative"}>A-</option>
                    <option value={"b_positive"}>B+</option>
                    <option value={"b_negative"}>B-</option>
                    <option value={"o_positive"}>O+</option>
                    <option value={"o_negative"}>O-</option>
                    <option value={"ab_positive"}>Ab+</option>
                    <option value={"ab_negative"}>Ab-</option>
                  </select>
                </div>
              </div>

              {/* District */}
              <div>
                <h5>District</h5>
                <div className={`${style.input_filed}`}>
                  <FaCity className={`${style.input_icon}`} />

                  <input
                    type={"text"}
                    placeholder={"District"}
                    name={"district"}
                    onBlur={(e) => HandleFieldValue(e)}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="card-actions justify-center py-6">
            <span onClick={HandleSearchDonner}>
              <SimpleButton>Search</SimpleButton>
            </span>
          </div>
          <hr />
          <div className="md:grid md:grid-cols-3 gap-4">
            {(donnerData ? donnerData : data).map(
              (member: any, index: number) => (
                <div key={index}>
                  <div className={`${style.bloodMemberCart} card  shadow`}>
                    <div className={`${style.memberCartBody} card-body `}>
                      <div className={`${style.cartBodyText}`}>
                        <figure>
                          <Image
                            src={member.img || demoImag}
                            height={100}
                            width={100}
                            alt={member.name}
                          />
                        </figure>
                        <div>
                          <h2 className="text-center">{member.name}</h2>
                          <h6 className="text-center   text-bold">
                            {member.bloodGroup}
                          </h6>
                          <div className="flex justify-center">
                            <div>
                              <p>
                                 {member.district}{" "}
                              </p>
                              <p>{member.contact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  const res = await fetch(`https://medstar-backend.onrender.com/donner`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default FindBlood;
