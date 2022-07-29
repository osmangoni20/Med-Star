// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import style from "../../../styles/Sass/Components/Order/_CustomerInformation.module.scss";

const InputField = ({
  HandleFieldValue,
  key,
  fieldInfo,
}: {
  HandleFieldValue: any;
  key: number;
  fieldInfo: any;
}) => {
  const { name, inputFiledType, icon, fieldHeader } = fieldInfo;
  // const{HandleFieldValue,HandleFileInput}=HandleInputFiled;

  return (
    <div>
      <h5>{fieldHeader}</h5>
      <div className={`${style.input_filed}`}>
        {icon === "FaUserAlt" && (
          <FaUserAlt className={`${style.input_icon}`} />
        )}
        {icon === "MdAddIcCall" && (
          <MdAddIcCall className={`${style.input_icon}`} />
        )}
        {icon === "AiOutlineMail" && (
          <AiOutlineMail className={`${style.input_icon}`} />
        )}

        {(inputFiledType === "text" ||
          inputFiledType === "number" ||
          inputFiledType === "email") && (
          <input
            type={inputFiledType}
            placeholder={fieldHeader}
            name={name}
            onBlur={(e) => HandleFieldValue(e)}
          />
        )}

        {/* {inputFiledType === "textAria" && (
         
        )} */}

        {inputFiledType === "select" && (
          <select name={name} onChange={HandleFieldValue}>
            {fieldInfo?.selectOption.map(
              (
                option: {
                  value: string | number | readonly string[] | undefined;
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                index: number
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
  );
};

export default InputField;
