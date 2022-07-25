import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaDisease, FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import modelStyle from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import style from "../../../styles/Sass/pages/Shipping.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import CustomModel from "./CustomModel";
import { ModelInputField } from "./ModelInputFieldInfo";

const AppointmentModel = ({
  data,
  date,
  setModel,
  showModel,
}: {
  data: any;
  date: any;
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  // const router = useRouter();
  const [appointment, setAppointment] = useState(data);
  const [customer, setCustomer] = useState<any>({});
  const [model, setSuccessModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const [progress, setProgress] = useState(false);
  const route = useRouter();
  const HandleFieldValue = (e: any) => {
    const data = { ...appointment, date, [e.target.name]: e.target.value };
    setAppointment(data);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:4000/users/ehostelbd@gmail.com"
      );
      // convert data to json/
      const userData = await res.json();
      setCustomer(userData);
    }
    console.log(customer);
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!appointment.email) {
      const CustomerData = {
        ...appointment,
        email: customer.email,
      };
      setAppointment(CustomerData);
    }
    if (!appointment.first_name) {
      const CustomerData = {
        ...appointment,
        name: customer.first_name + " " + customer.last_name,
      };

      setAppointment(CustomerData);
    }
    if (!appointment.mobile_no) {
      const CustomerData = {
        ...appointment,
        mobile_no: customer.mobile_no,
      };
      setAppointment(CustomerData);
    }

    const appointmentConformData = {
      ...appointment,
      status: "pending",
    };
    setModel(false);

    const fetchData = async () => {
      // get the data from the api
      const res = await fetch("http://localhost:4000/new_appointment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(appointmentConformData),
      });
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
        route.push("/");
      } else {
        setProgress(true);
      }
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  };
  console.log(customer);
  return (
    <div>
      {showModel && (
        <div className={`${modelStyle.popup_container}`}>
          {model && (
            <CustomModel
              modelData={modelData}
              showModel={model}
              setModel={setModel}
            ></CustomModel>
          )}
          {progress && (
            <div>
              <progress
                className="progress progress-success w-56"
                value="0"
                max="100"
              ></progress>
              <progress
                className="progress progress-success w-56"
                value="70"
                max="100"
              ></progress>
              <progress
                className="progress progress-success w-56"
                value="100"
                max="100"
              ></progress>
            </div>
          )}

          <div className={`${modelStyle.inner_popup}`}>
            <div className={`${style.form_container}`}>
              <form onSubmit={HandleFormSubmit}>
                <div className={`${style.form_input_field}`}>
                  {ModelInputField.map((data: any, index: number) => (
                    <div>
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
                        {data.icon === "FaDisease" && (
                          <FaDisease className={`${style.input_icon}`} />
                        )}

                        {(data.inputFiledType === "text" ||
                          data.inputFiledType === "number" ||
                          data.inputFiledType === "email") && (
                          <input
                            type={data.inputFiledType}
                            placeholder={data.fieldHeader}
                            name={data.name}
                            defaultValue={customer[data.name]}
                            onBlur={(e) => HandleFieldValue(e)}
                          />
                        )}
                        {data.inputFiledType === "select" && (
                          <select
                            name={data.name}
                            onChange={(e) => HandleFieldValue(e)}
                          >
                            {data.options.map(
                              (option: {
                                value: string;

                                name: string;
                              }) => (
                                <option value={option.value}>
                                  {option.name}
                                </option>
                              )
                            )}
                          </select>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <span className="flex justify-end">
                  <button type={"submit"}>
                    <SimpleButton>Confirm</SimpleButton>
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentModel;
// export default withAuth(OrderCart);
