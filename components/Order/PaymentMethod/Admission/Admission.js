import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../Authentication/Hooks/useAuth";
import CustomModel from "../../../../Model/CustomModel";
import Header from "../../../Homepage/Header";
// import '../../Style/inputStyle.css';
import "./Admission.css";
import InputField from "./InputField";
import { InputFiledInformation } from "./InputFieldFinformation";
const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [model,setModel]=useState(false)
  const [modelData,setModelData]=useState({});
  const [userData, setUserData] = useState({});
  const { SignUpWithEmailAndPassword, user, error } = useAuth();
  const [selectFile, setSelectFile] = useState(null);
  const [isFilePicked, setFilePicked] = useState(false);
  // const [emailVerified,setEmailVerified]=useState(false)
  const [PassWordError, setPassWordError] = useState({
    errorText: "",
    confirmPasswordErrorText: "",
    error: false,
    confirmPassError: false,
  });

  // const HandleFileUpload = (e) => {
  //   setSelectFile(e.target.files[0]);
  //   console.log(e.target.files);
  //   const formData = new FormData();
  //   formData.append("file", selectFile);
  //   // const url =
  //   //   "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5";
  //   // fetch(url, {
  //   //   method: "POST",
  //   //   body: formData,
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     setFilePicked(true);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // };

  const HandleConfirmPassword = (e) => {
    setPassword({ ...password, confirmPassword: e.target?.value });
    console.log(e.target.value)
    if (password.newPassword !== e.target?.value) {
      setPassWordError({
        ...PassWordError,
        confirmPassError: true,
        confirmPasswordErrorText: "Password and Confirm Password must be Same",
      });
    }else{
      setPassWordError({
        ...PassWordError,
        confirmPassError: false,
        confirmPasswordErrorText: "",
      });
    }
  };

  const HandlePasswordValidation = (e) => {

    console.log(e.target.value)
    setPassword({ ...password, newPassword: e.target?.value });
    const validation = Validation(e.target.value);
    if (validation) {
      const Data = { ...userData, password: e.target.value };
      setUserData(Data);
    }
  };

  const Validation = (password) => {
    if (!/.{8}/.test(password)) {
      const ErrorMassage = " Ensure Password is of length 8 ";
      setPassWordError({ errorText: ErrorMassage, error: true });
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      const PasswordValidation = " Ensure Password is two uppercase letters. ";
      setPassWordError({ errorText: PasswordValidation, error: true });
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      const PasswordValidation =
        " Ensure Password is one special case letter. ";
      setPassWordError({ errorText: PasswordValidation, error: true });
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      const PasswordValidation = " Ensure Password is two digits. ";
      setPassWordError({ errorText: PasswordValidation, error: true });
    } else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      const PasswordValidation = "Ensure Password is three lowercase letters";
      setPassWordError({ errorText: PasswordValidation, error: true });
    } else {
      setPassWordError({ errorText: "", error: false });
      return true;
    }
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    !PassWordError.error && SignUpWithEmailAndPassword(userData);
    // const formData = new FormData();

    // formData.append(userData[0], selectFile);
    if(user.email){
      setModel(true)
      setModelData({
        text1:"Registration is successfully done!",
        text2:"Please Verified your Email",
       
        successType:true
    })
    }
   
  };
const HandleFileInputValue=(e)=>{
  const data={...userData,[e.target.name]:e.target.files[0]};
  setUserData(data)
}
const HandleFieldValue=(e)=>{
  const data={...userData,[e.target.name]:e.target.value};
  setUserData(data)
}
 
  console.log()
  // const menuHeader="Admission Information";
  return (
    <div>
        <Header></Header>

        {model&&<CustomModel modelData={modelData}   showModel={model} setModel={setModel}></CustomModel>}

          <div className="signUp-container ">
            <div className="form-container">
            <h1 className="title">Registration</h1>
              <form onSubmit={HandleFormSubmit}>
                <div className="form-input-field">
                {
                  InputFiledInformation.map((data,index)=><InputField key={index} HandleFieldValue={HandleFieldValue}  HandleFileInputValue={ HandleFileInputValue} fieldInfo={data}></InputField>)
                }
                <div>
                  <h5> Password</h5>

                  <div className="input-filed">
                    <FontAwesomeIcon className="input-icon" icon={faUser} />
                    <input
                      onBlur={HandlePasswordValidation}
                      type="password"
                      name="password"
                      placeholder="Password"
                     required
                    />
                  </div>
                  {PassWordError.error && (
                      <p className="inputFieldError">
                        {PassWordError.errorText}
                      </p>
                    )}
                </div>

                <div>
                  <h5>Confirm Password</h5>

                  <div className="input-filed">
                    <FontAwesomeIcon className="input-icon" icon={faUser} />
                    <input
                      type={"password"}
                      onChange={HandleConfirmPassword}
                      name="confirm_password"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  {PassWordError.confirmPassError && (
                      <p className="inputFieldError">
                        {PassWordError.confirmPasswordErrorText}
                      </p>
                    )}
                </div>
                </div>
                <div className="Submit-button">
                
                {isFilePicked ? (
        <input  type="submit" value={"SignUp"} className="btn" />

            ) : (
              <input  type="submit" value={"SignUp"} className="btn" />
            )}
             
               
                </div>
              </form>
              <p>Already have an account?
              <Link to={"/login"}>
              <span>
                  log in
                </span>
              </Link>
              </p>
            </div>
          </div>     
  </div>
  );
};

export default Admission;
