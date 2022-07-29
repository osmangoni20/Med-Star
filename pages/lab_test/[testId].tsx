import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import LargestButton from "../../components/Custom/Button/LargestButton";
import { InputFiledInformation } from "../../components/Order/CustomerInformation/InputFieldFinformation";
import style from "../../styles/Sass/pages/Shipping.module.scss";
const SingleTest = ({ data }: { data: any }) => {
  const [labTestInfo, setLabTestInfo] = useState<any>([]);
  const HandleFieldValue = (e: any) => {
    const data = { ...labTestInfo, [e.target.name]: e.target.value };
    setLabTestInfo(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(labTestInfo);
  };
  const HandleConfirmOrder = (e: any) => {
    alert("Processing.....");
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
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.order_Button} mb-5 flex justify-center`}>
          <a href="/" onClick={HandleConfirmOrder}>
            <LargestButton>Confirm </LargestButton>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(ctx: { params: { testId: any } }) {
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:3000/api/lab_test/${ctx.params.testId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default SingleTest;
