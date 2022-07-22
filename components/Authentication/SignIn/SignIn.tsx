import { useState } from "react";
import { AiTwotonePhone } from "react-icons/ai";
import { BsCalendarDateFill, BsImages } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import style from "../../../styles/Sass/pages/auth/login&signIn.module.scss";
import Meta from "../../common/Meta";
import useFirebase from "../../hooks/useFirebase";
const InputFiledInfo = [
  {
    name: "firstName",
    fieldHeader: "First Name",
    inputFiledType: "text",
    icon: "name",
  },
  {
    name: "lastName",
    fieldHeader: "Last Name",
    inputFiledType: "text",
    icon: "name",
  },

  {
    name: "age",
    fieldHeader: "Age",
    inputFiledType: "number",
    icon: "age",
  },
  {
    name: "image",
    fieldHeader: "Your Image",
    inputFiledType: "file",
    icon: "image",
  },
  ,
  {
    name: "mobile_No",
    fieldHeader: "Mobile No",
    inputFiledType: "number",
    icon: "mobile",
  },
  {
    name: "email",
    fieldHeader: "E-mail",
    inputFiledType: "email",
    icon: "email",
  },
];

type passwordErrorType = {
  errorText: string;
  confirmPasswordErrorText: string;
  // error: boolean,
  // confirmPassError: boolean,
};
const SignIn = ({ setModel, setModelData }: any) => {
  const [signUpInputData, setSignUpInputData] = useState({});
  const { SignUpWithEmailAndPassword, error, user }: any = useFirebase();
  const [password, setPassword] = useState({
    firstPassword: "",
    confirmPassword: "",
  });

  // password Error
  const [PassWordError, setPassWordError] = useState<passwordErrorType>({
    errorText: "",
    confirmPasswordErrorText: "",
    // error: false,
    // confirmPassError: false,
  });

  // handle input filed data
  const HandleFieldValue = (e: any) => {
    const data = { ...signUpInputData, [e.target.name]: e.target.value };
    setSignUpInputData(data);
  };
  const HandleInputFile = (e: any) => {
    const data = { ...signUpInputData, [e.target.name]: e.target.files[0] };
    setSignUpInputData(data);
  };
  //   form submit handle
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    SignUpWithEmailAndPassword(signUpInputData);
    console.log(signUpInputData);

    if (!error && user.email) {
      setModel(true);
      setModelData({
        text1: "Your Account is successfully Created",
        text2: "Please Verified your Email",

        successType: true,
      });
    }
  };

  const HandleConfirmPassword = (e: { target: { value: any } }) => {
    setPassword({ ...password, confirmPassword: e.target?.value });
    if (password.firstPassword !== e.target?.value) {
      setPassWordError({
        ...PassWordError,
        // confirmPassError: true,
        confirmPasswordErrorText: "Password and Confirm Password must be Same",
      });
    } else {
      setPassWordError({
        ...PassWordError,
        // confirmPassError: false,
        confirmPasswordErrorText: "",
      });
    }
  };

  const HandlePasswordValidation = (e: { target: { value: any } }) => {
    setPassword({ ...password, firstPassword: e.target?.value });
    const validation = Validation(e.target.value);
    if (validation) {
      const Data = { ...signUpInputData, password: e.target.value };
      setSignUpInputData(Data);
    }
  };
  const Validation = (password: string) => {
    if (!/.{8}/.test(password)) {
      const ErrorMassage = " Ensure Password is of length 8 ";
      setPassWordError({ ...PassWordError, errorText: ErrorMassage });
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      const PasswordValidation = " Ensure Password is two uppercase letters. ";
      setPassWordError({ ...PassWordError, errorText: PasswordValidation });
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      const PasswordValidation =
        " Ensure Password is one special case letter. ";
      setPassWordError({ ...PassWordError, errorText: PasswordValidation });
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      const PasswordValidation = " Ensure Password is two digits. ";
      setPassWordError({ ...PassWordError, errorText: PasswordValidation });
    } else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      const PasswordValidation = "Ensure Password is three lowercase letters";
      setPassWordError({ ...PassWordError, errorText: PasswordValidation });
    } else {
      setPassWordError({ ...PassWordError, errorText: "" });
      return true;
    }
  };

  return (
    <div>
      <Meta
        title="SignUp MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />

      <div className={`${style.forms_signIn_container}`}>
        <div className={`${style.signIn}`}>
          <form className={`${style.signIn_form}`}>
            <div className="grid grid-cols-2 gap-2">
              {InputFiledInfo.map((field: any) => (
                <div>
                  <h5>{field.fieldHeader}</h5>
                  <div className={`${style.input_filed}`}>
                    {field.icon === "name" && (
                      <FaUserAlt className={`${style.input_icon}`} />
                    )}
                    {field.icon === "image" && (
                      <BsImages className={`${style.input_icon}`} />
                    )}
                    {field.icon === "age" && (
                      <BsCalendarDateFill className={`${style.input_icon}`} />
                    )}

                    {field.icon === "email" && (
                      <MdMarkEmailUnread className={`${style.input_icon}`} />
                    )}

                    {field.icon === "mobile" && (
                      <AiTwotonePhone className={`${style.input_icon}`} />
                    )}

                    {field.inputFiledType === "file" ? (
                      <input
                        type={field.inputFiledType}
                        placeholder={field.fieldHeader}
                        name={field.name}
                        onChange={(e) => HandleInputFile(e)}
                      />
                    ) : (
                      <input
                        type={field.inputFiledType}
                        placeholder={field.fieldHeader}
                        name={field.name}
                        onBlur={(e) => HandleFieldValue(e)}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div>
                <h5> Password</h5>
                <div className={`${style.input_filed}`}>
                  <RiLockPasswordFill className={`${style.input_icon}`} />
                  <input
                    onBlur={HandlePasswordValidation}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                {PassWordError.errorText && (
                  <p className={style.inputFieldError}>
                    {PassWordError.errorText}
                  </p>
                )}
              </div>

              <div>
                <h5>Confirm Password</h5>

                <div className={`${style.input_filed}`}>
                  <RiLockPasswordFill className={`${style.input_icon}`} />
                  <input
                    type={"password"}
                    onChange={HandleConfirmPassword}
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                {PassWordError.confirmPasswordErrorText && (
                  <p className={style.inputFieldError}>
                    {PassWordError.confirmPasswordErrorText}
                  </p>
                )}
              </div>
            </div>
            <input
              type="submit"
              value={"Create Account"}
              onClick={HandleFormSubmit}
              className={`${style.btn}`}
            />
          </form>
          <p className={style.error_txt}>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
