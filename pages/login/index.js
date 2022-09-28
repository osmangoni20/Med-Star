import { getAuth } from "firebase/auth";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import loginImage from "../../assets/image/loginImage.svg";
import siteLogo from '../../assets/image/siteLogo.png';
import SignIn from '../../components/Authentication/SignIn/SignIn.tsx';
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import ProgressModel from "../../components/common/Model/ProgressModel";
import useFirebase from "../../components/hooks/useFirebase";
import style from "../../styles/Sass/pages/auth/login&signIn.module.scss";
const CustomModel=dynamic(()=>import('../../components/common/Model/CustomModel'));
const Login = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const { SignInWithEmailPassword,EmailVerification, ResetPassword, error,user } = useFirebase();
  const [resetPassword, setResetPassword] = useState(false);
  const router = useRouter();
  const [model, setModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const [loginFrom,setLoginFrom]=useState(true);
  const auth = getAuth();
  const [isAdmin,setIsAdmin]=useState(false);
  const [progress,setProgress]=useState(false);
  // if (user.email) {
  //   // localStorage.getItem('')
  //   router.back();
  // }
  useEffect(()=>{
    if (typeof window !== "undefined") {
      setIsAdmin(Boolean(localStorage.getItem('isAdmin')))
    }
   
  },[])
  console.log(user, error);

  const HandleVerificationEmail=()=>{
    EmailVerification(auth);
    setModel(true);
    setModelData({
      text1: "Verification Email Already Send!",
      text2: "Please Verified your Email",

      successType: true,
    });
  }
  const HandleResetPassword = () => {
    setResetPassword(!resetPassword);
  };
  const SendPasswordResetEmail = (email) => {
    ResetPassword(email);

    !model && setResetPassword(false);
    if (!error) {
      setModel(true);
      setModelData({
        text1: "Reset Password Email Already Send!",
        text2: "Please Verified your Email",

        successType: true,
      });
    }
  };

  const onSubmit = (submitData) => {
    console.log(submitData);
   
    //  setLogInData(submitData);
    const email = submitData.email;
    const password = submitData?.password;
    if (resetPassword) {
      SendPasswordResetEmail(email);
    }
    else{
      SignInWithEmailPassword(email, password);
      // user.emailVerified
      if(user.email){
       setProgress(true);
       setTimeout(()=>{
        resetField('email'); 
        resetField('password'); 
        setModel(true)
        setProgress(false)
        setModelData({
          text1:"Start your account in Website",
          text2:"Enjoy our service",
          image:user?.photoUrl,
          welcomeType:true
        })
       },3000)
      }
      else if(error){
       setModel(true)
       setModelData({
         text1:`${error}`,
         text2:"Please try again",
         wrongType:true
       })
      }
    }
    
  };

  const HandleClickRegistration = () => {
    setLoginFrom(!loginFrom);
  };

  // const welcomeModelText="Welcome eHostel Management Site"
  return (
    <div>
      <Meta
        title="Login MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header/>
      <div className={`${style.login_container}`}>
      {model && (
              <CustomModel
                modelData={modelData}
                showModel={model}
                setModel={setModel}
              ></CustomModel>
            )}
        <div className={`${style.forms_login_container}`}>
          
             
          {loginFrom?<div className={`${style.login}`}>
            
          <span  className={style.logo}>
            <Image
                src={siteLogo}
                alt="Med Star"
                />
            
             </span>
             
            <form
              className={`${style.login_form}`}
              onSubmit={handleSubmit(onSubmit)}
            >
             <h2 className={style.title}>
                {resetPassword && "Reset Password" }
              </h2>
              <div className={style.input_filed}>
                <span className={style.input_icon}>
                  <FaUserAlt></FaUserAlt>
                </span>
                <input
                  type={"email"}
                  placeholder="email"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              
              {errors.email && (
                <p style={{ color: "red" }}>This field is required</p>
              )}
              {!resetPassword && (
                <div className={style.input_filed}>
                  <span className={style.input_icon}>
                    <RiLockPasswordLine></RiLockPasswordLine>
                  </span>{" "}
                  <input
                    type={"password"}
                    placeholder="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>
              )}
              {errors.password && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
           
             <input
                type="submit"
                value={resetPassword ? "Send" : "Login"}
                className={`${style.btn} ${style.loginButton}`}
              />
            
             {user.email? !user.emailVerified&& <p className={style.emailVerification} onClick={HandleVerificationEmail}>Send Verification Email?</p>:""}
            </form>
            {/* <p className={style.error_txt}>{error}</p> */}
            <p className={style.forget_password} onClick={HandleResetPassword}>
            {resetPassword ? "Please Login": "Forget Password ?"}
            
            </p>

          </div>:
          <SignIn setModel={setModel} setModelData={setModelData}/>

          }
        </div>
        <div className={style.panels_container}>
          <div className={`${style.left_panel} ${style.panel}`}>
           
            {
              progress&&(
                <ProgressModel/>
              )
            }
            <div className={style.content}>
              {
                loginFrom?<span>
                  <h3>Are Your New Member?</h3>
              <p>
                If you have not already registered, please complete the
                registration and log in.
              </p>
                </span>:
                <span>
                   <h3>Already have an account?</h3>
                   <p>
                please login your account and enjoy our hospitable service
              </p>
                </span>
              }
              
              <button
                onClick={HandleClickRegistration}
                className="btn transparent"
              >
               {loginFrom?"Registration":"Login"} 
              </button>
            </div>
            <Image
              src={loginImage}
              className={style.login_Image}
              alt="Login demo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
