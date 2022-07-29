import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaDisease, FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import modelStyle from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import style from "../../../styles/Sass/pages/Shipping.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import useFirebase from "../../hooks/useFirebase";
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
  const [fieldValue, setFieldValue] = useState(data);
  const [patient, setPatient] = useState<any>({});
  const [model, setSuccessModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const [progress, setProgress] = useState(false);
  const { user }: { user: any } = useFirebase();
  const route = useRouter();
  const HandleFieldValue = (e: any) => {
    const data = { ...fieldValue, date, [e.target.name]: e.target.value };
    setFieldValue(data);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/user/${user.email}`
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
  }, [patient, user.email]);
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const appointmentConformData = {
      email: fieldValue.email || patient.email,
      patientName:
        fieldValue.first_name || patient.first_name + " " + patient.last_name,
      patient_mobile_no: fieldValue.first_name || patient.mobile_no,
      doctor_name: fieldValue.name,
      status: "pending",
    };
    setModel(false);

    const fetchData = async () => {
      // get the data from the api
      const res = await fetch(
        "https://med-star-bd.herokuapp.com/new_appointment",
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
                            defaultValue={patient[data.name]}
                            onBlur={(e) => HandleFieldValue(e)}
                          />
                        )}
                        {data.inputFiledType === "select" && (
                          <select
                            name={data.name}
                            onChange={(e) => HandleFieldValue(e)}
                          >
                            {data.options.map(
                              (
                                option: {
                                  value: string;

                                  name: string;
                                },
                                index: any
                              ) => (
                                <option key={index} value={option.value}>
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

// export default ;
export default AppointmentModel;
