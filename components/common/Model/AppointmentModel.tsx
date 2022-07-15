import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import modelStyle from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import style from "../../../styles/Sass/pages/Shipping.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
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
  console.log(data);
  const router = useRouter();
  const [appointment, setAppointment] = useState(data);
  const HandleFieldValue = (e: any) => {
    const data = { ...appointment, date, [e.target.name]: e.target.value };
    setAppointment(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(appointment);
    setModel(false);
    router.push("/");
  };
  return (
    <div>
      {showModel && (
        <div className={`${modelStyle.popup_container}`}>
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
