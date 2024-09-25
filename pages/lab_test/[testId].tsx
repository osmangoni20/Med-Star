import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import CustomModel from "../../components/common/Model/CustomModel";
import ProgressModel from "../../components/common/Model/ProgressModel";
import LargestButton from "../../components/Custom/Button/LargestButton";
import useFirebase from "../../components/hooks/useFirebase";
import { InputFiledInformation } from "../../components/Order/CustomerInformation/InputFieldFinformation";
import style from "../../styles/Sass/pages/Shipping.module.scss";
const SingleTest = ({ data }: { data: any }) => {
  const [labTestInfo, setLabTestInfo] = useState<any>([]);
  const [patient, setPatient] = useState<any>({});
  const { user }: any = useFirebase();
  const [model, setSuccessModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const [progress, setProgress] = useState(false);
  const route = useRouter();

  useEffect(() => {
    setLabTestInfo(data);
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/users/${user.email}`
      );
      // convert data to json/
      const userData = await res.json();
      setPatient(userData);
    }
    console.log(patient);
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const HandleFieldValue = (e: any) => {
    const data = { ...labTestInfo, [e.target.name]: e.target.value };
    setLabTestInfo(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(labTestInfo);
    const appointmentConformData = {
      testName: data[0].testName,
      testType: data[0].testType,
      email: labTestInfo.email || patient.email,
      patientName:
        labTestInfo.firstName || patient.firstName + " " + patient.lastName,
      patient_mobile_no: labTestInfo.mobile_no || patient.mobile_no,
      status: "pending",
      totalPrice: data[0].price - (data[0].price * data[0].offer) / 100,
    };
    console.log(appointmentConformData);
    setProgress(true);

    const fetchData = async () => {
      // get the data from the api
      const res = await fetch(
        "https://medstar-backend.onrender.com/newMedicalTest",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(appointmentConformData),
        }
      );
      // convert data to json
      const data = await res.json();
      if (data.insertedId) {
        setProgress(false);
        setSuccessModel(true);
        setModelData({
          text1: "Your Appointment  Successfully Done",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });
      }
    };

    // call the function
    fetchData()
      //   // make sure to catch any error
      .catch(console.error);
  };

  return (
    <div>
      <Header />
      <Meta
        title="Lab Test MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <main>
        <div className={`${style.shippingPart} order-sm-1 order-1`}>
          {model && (
            <CustomModel
              modelData={modelData}
              showModel={model}
              setModel={setSuccessModel}
            ></CustomModel>
          )}
          {progress ? <ProgressModel /> : <></>}
          <div className={`${style.shippingHeder} mx-10`}>
            <h3>Your Information </h3>
            <p>Please Fill Out Your Information</p>
          </div>

          <div className={`${style.shippingInfo}`}>
            {/* Submit Address Information  */}
            <div className={`${style.customerInfo_container}`}>
              <div className="form_container">
                <form onSubmit={HandleFormSubmit}>
                  <div className={`${style.form_input_field}`}>
                    {InputFiledInformation.map((data: any, index: number) => (
                      <div key={index}>
                        <h5>{data.fieldHeader}</h5>
                        <div className={`${style.input_filed}`}>
                          {data.icon === "FaUserAlt" && (
                            <FaUserAlt className={`${style.input_icon}`} />
                          )}
                          {data.icon === "MdAddIcCall" && (
                            <MdAddIcCall className={`${style.input_icon}`} />
                          )}
                          {data.icon === "AiOutlineMail" && (
                            <AiOutlineMail className={`${style.input_icon}`} />
                          )}

                          {(data.inputFiledType === "text" ||
                            data.inputFiledType === "number" ||
                            data.inputFiledType === "email") && (
                            <input
                              type={data.inputFiledType}
                              placeholder={data.fieldHeader}
                              defaultValue={patient[data.name]}
                              name={data.name}
                              onBlur={(e) => HandleFieldValue(e)}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={`${style.TextAria}`}>
                    <h5>Your Address</h5>
                    <textarea
                      name={"address"}
                      cols={50}
                      rows={7}
                      onBlur={(e) => HandleFieldValue(e)}
                    />
                  </div>
                  <div
                    className={`${style.order_Button} mt-5 flex justify-center`}
                  >
                    <LargestButton>Confirm Your Test</LargestButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(ctx: { params: { testId: any } }) {
  // Fetch data from external API
  const res = await fetch(
    `https://medstar-backend.onrender.com/labtest/${ctx.params.testId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default SingleTest;
