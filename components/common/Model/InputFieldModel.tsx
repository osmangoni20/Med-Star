import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFillCalendar2DateFill,
  BsGenderTrans,
  BsImages,
} from "react-icons/bs";
import { FaDisease, FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import modelStyle from "../../../styles/Sass/common/model/_doctorModel.module.scss";
import style from "../../../styles/Sass/pages/Shipping.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import useFirebase from "../../hooks/useFirebase";
import {
  AppointmentModelInputField,
  PrescriptionInputFieldData,
} from "./ModelInputFieldInfo";
import ProgressModel from "./ProgressModel";

const InputFieldModel = ({
  type,
  data,
  date,
  setModel,
  setSuccessModel,
  setModelData,
  showModel,
}: {
  type: any;
  data?: any;
  date?: any;
  setSuccessModel: Dispatch<SetStateAction<boolean>>;
  setModelData: any;
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  // const router = useRouter();
  const [fieldValue, setFieldValue] = useState<any>({});
  const [patient, setPatient] = useState<any>({});

  const [progress, setProgress] = useState(false);
  const [newDate, setDate] = useState("");
  const { user }: { user: any } = useFirebase();
  const route = useRouter();

  // Image Upload
  // Image Upload
  const HandleImageUpload = (e: any) => {
    setProgress(true);
    setFieldValue({ ...fieldValue, img: e.target.files[0] });
    const ImagForm = new FormData();
    ImagForm.set("key", "20eb4f4a88d3505364e15416b41a0df2");
    ImagForm.append("image", e.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", ImagForm).then((imageData) => {
      console.log(imageData.data);
      const data = { ...fieldValue, img: imageData.data.data.url };
      setFieldValue(data);
      setProgress(false);
    });
  };

  // Input Field
  const HandleFieldValue = (e: any) => {
    const data = { ...fieldValue, date, [e.target.name]: e.target.value };
    setFieldValue(data);
  };

  useEffect(() => {
    setDate(date);
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/users/${user.email}`
      );
      // convert data to json/
      const userData = await res.json();
      setPatient(userData);
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [newDate, user]);
  // console.log(patient);

  // Submit Input Data
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(fieldValue, data);
    setFieldValue(fieldValue);
    const appointmentConformData = {
      email: fieldValue.email || patient.email,
      age: fieldValue.age || patient.age,
      patientName:
        fieldValue.firstName || patient.firstName + " " + patient.lastName,
      patient_mobile_no: fieldValue.mobile_no || patient.mobile_no,
      doctor_name: data.name,
      chamberTime: data?.chamberTime,
      fee: data?.fee,
      date: date,
      status: "pending",
    };

    const PrescriptionConfirmData = {
      email: fieldValue.email || patient.email,
      age: fieldValue.age || patient.age,
      customerName:
        fieldValue.firstName || patient.firstName + " " + patient.lastName,
      mobile_no: fieldValue.mobile_no || patient.mobile_no,
      img: fieldValue.img,
      date: fieldValue.date || new Date(),
      status: "pending",
    };
    // Fetch Appointment Data
    const fetchAppointmentData = async () => {
      // get the data from the api
      const res = await fetch(
        "https://medstar-backend.onrender.com/new_appointment",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(appointmentConformData),
        }
      );
      // // convert data to json
      const data = await res.json();
      if (data.insertedId) {
        setSuccessModel(true);
        setModelData({
          text1: "Your Appointment  Successfully Done",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });
        setModel(false);
        setProgress(false);
      } else {
        setProgress(true);
      }
    };

    // Fetch Prescription Data
    const fetchPrescriptionData = async () => {
      // get the data from the api
      const res = await fetch(
        "https://medstar-backend.onrender.com/new_prescription",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(PrescriptionConfirmData),
        }
      );
      // // convert data to json
      const data = await res.json();
      if (data.insertedId) {
        setSuccessModel(true);
        setModelData({
          text1: "Your Prescription Upload  Successfully Done",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });
        setModel(false);
        setProgress(false);
      } else {
        setProgress(true);
      }
    };
    // call the function
    if (type === "appointment") {
      fetchAppointmentData();
    } else if (type === "prescription_upload") {
      fetchPrescriptionData();
    }

    //   // make sure to catch any error
  };

  return (
    <div>
      {showModel && (
        <div className={`${modelStyle.popup_container} bg-white`}>
          {progress ? <ProgressModel /> : <></>}

          <div className={`${modelStyle.inner_popup}`}>
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className={`${style.form_container}`}>
              <form onSubmit={HandleFormSubmit}>
                <div className={`${style.form_input_field}`}>
                  {(type === "appointment"
                    ? AppointmentModelInputField
                    : PrescriptionInputFieldData
                  ).map((data: any, index: number) => (
                    <div key={index}>
                      <h5>{data.fieldHeader}</h5>
                      <div className={`${style.input_filed}`}>
                        {data.icon === "FaUserAlt" && (
                          <FaUserAlt className={`${style.input_icon}`} />
                        )}
                        {data.icon === "MdAddIcCall" && (
                          <MdAddIcCall className={`${style.input_icon}`} />
                        )}
                        {data.icon === "image" && (
                          <BsImages className={`${style.input_icon}`} />
                        )}
                        {data.icon === "AiOutlineMail" && (
                          <AiOutlineMail className={`${style.input_icon}`} />
                        )}
                        {data.icon === "FaDisease" && (
                          <FaDisease className={`${style.input_icon}`} />
                        )}
                        {data.icon === "gender" && (
                          <BsGenderTrans className={`${style.input_icon}`} />
                        )}

                        {data.icon === "date" && (
                          <BsFillCalendar2DateFill
                            className={`${style.input_icon}`}
                          />
                        )}

                        {data.inputFiledType !== "file" &&
                          data.inputFiledType !== "select" && (
                            <input
                              type={data.inputFiledType}
                              placeholder={data.fieldHeader}
                              name={data.name}
                              defaultValue={patient[data.name]}
                              onBlur={(e) => HandleFieldValue(e)}
                            />
                          )}
                        {data.inputFiledType === "file" && (
                          <input
                            type={data.inputFiledType}
                            placeholder={data.fieldHeader}
                            name={data.name}
                            required
                            defaultValue={patient[data.name]}
                            onChange={(e) => HandleImageUpload(e)}
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
export default InputFieldModel;
