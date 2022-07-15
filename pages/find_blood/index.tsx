import Image from "next/image";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Categories from "../../components/common/Categories";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import { bloodGroup } from "../../Database/bloodGroupList";
import style from "../../styles/Sass/pages/findBlood/findBlood.module.scss";
interface Data {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  description: {
    productType: string;
    capacity: string;
    used: string;
    sideEffect: string;
  };
}
const FindBlood = ({ data }: any) => {
  const [inputValue, setInputValue] = useState({});
  const HandleFieldValue = (e: any) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Meta
        title="Find Blood MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.findBlood} flex gap-4`}>
        <aside className="h-screen">
          <h3 className="text-center my-4 text-2xl font-bold ">Blood Group</h3>
          <Categories data={bloodGroup} />
        </aside>

        <main className="mt-10">
          <form className="flex justify-center">
            <div className={`${style.form_input_field} `}>
              {/* //Blood Group */}
              <div>
                <h5>Blood Group </h5>
                <div className={`${style.input_filed}`}>
                  <AiOutlineMail className={`${style.input_icon}`} />

                  <input
                    type={"text"}
                    placeholder={"Blood Group "}
                    name={"blood_Group"}
                    onBlur={(e) => HandleFieldValue(e)}
                  />
                </div>
              </div>

              {/* Division */}
              <div>
                <h5>Division</h5>
                <div className={`${style.input_filed}`}>
                  <AiOutlineMail className={`${style.input_icon}`} />

                  <input
                    type={"text"}
                    placeholder={"Division"}
                    name={"division"}
                    onBlur={(e) => HandleFieldValue(e)}
                  />
                </div>
              </div>
              {/* District */}
              <div>
                <h5>District</h5>
                <div className={`${style.input_filed}`}>
                  <AiOutlineMail className={`${style.input_icon}`} />

                  <input
                    type={"text"}
                    placeholder={"District"}
                    name={"district"}
                    onBlur={(e) => HandleFieldValue(e)}
                  />
                </div>
              </div>
              {/* Upazila */}
              <div>
                <h5>Upazila</h5>
                <div className={`${style.input_filed}`}>
                  <AiOutlineMail className={`${style.input_icon}`} />

                  <input
                    type={"text"}
                    placeholder={"Upazila"}
                    name={"upazila"}
                    onBlur={(e) => HandleFieldValue(e)}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="card-actions justify-center py-6">
            <span>
              <SimpleButton>Search</SimpleButton>
            </span>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-4">
            {data.map((member: any) => (
              <div>
                <div className={`${style.bloodMemberCart} card  shadow`}>
                  <div className={`${style.memberCartBody} card-body `}>
                    <div className={`${style.cartBodyText}`}>
                      <figure>
                        <Image src={member.img} alt={member.name} />
                      </figure>
                      <div>
                        <h2 className="text-center">{member.name}</h2>
                        <h6 className="text-center   text-bold">
                          {member.bloodGroup}
                        </h6>
                        <div className="flex justify-center">
                          <div>
                            <p>
                              {member.address.upazila} {member.address.district}{" "}
                            </p>
                            <p>{member.contact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/bloodMember`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default FindBlood;
