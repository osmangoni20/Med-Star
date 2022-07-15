import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import CustomModel from '../../Model/CustomModel';
import useAuth from '../Hooks/useAuth';
import loginImage from './../../image/loginImage.svg';
import './Login.css';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      
    const[logInData,setLogInData]=useState({});
    const{SignInWithEmailPassword,ResetPassword,user,error}=useAuth();
     const[resetPassword,setResetPassword]=useState(false);
     const location = useLocation();
     const navigate = useNavigate();
     const [model,setModel]=useState(false);
     const[modelData,setModelData]=useState({});
     const from = location?.state?.from?.pathname || '/'
     if (user.email) {
         navigate(from, { replace: true });
     }
    console.log(user,error);
   
 
     const HandleResetPassword=()=>{
         setResetPassword(true)

     }
     const SendPasswordResetEmail=(email)=>{
         ResetPassword(email)
        
         !model&&
         setResetPassword(false)
       if(!error){
        setModel(true)
        setModelData({
          text1:"Reset Password Email Already Send!",
          text2:"Please Verified your Email",
         
          successType:true
      })
       }
     }

      const onSubmit = (submitData) => {
       console.log(submitData)
      //  setLogInData(submitData);
       const email=submitData.email;
         const password=submitData?.password;
         if(resetPassword){
          SendPasswordResetEmail(email)
        }
       !resetPassword&& SignInWithEmailPassword(email,password)
       console.log(user);
      //  if(!error&&user.emailVerified){
      //    setModel(true)
      //    setModelData({
      //      text1:"Start your account application",
      //      text2:"Enjoy our service",
      //      image:user?.photoUrl,
      //      welcomeType:true
      //    })
      //  }else if(!user.emailVerified){
      //   setModel(true)
      //   setModelData({
      //     text1:"Your email is not verified",
      //     text2:"Please check your email",
      //     wrongType:true
      //   })
      //  }
       
      };

      const HandleClickRegistration=()=>{
        navigate('/dashboard/student_admission');
      }
   
      // const welcomeModelText="Welcome eHostel Management Site"
      return (
        <div>

            <div className='login-container'>

                <div className='forms-login-container'>
                        <div className="login">
   
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title">{resetPassword?"Reset Password":"Login"}</h2>
                    <div className="input-filed">
                    <FontAwesomeIcon className='input-icon' icon={faUser}  />
                    <input
                        type={"email"}
                        placeholder="email"
                        
                        {...register("email", {
                          required: true,
                        })}
                      />
                      
                    </div>
                    {errors.email && (
                      <p style={{ color: "red" }}>
                        This field is required
                      </p>
                    )}
                   {
                     !resetPassword&&
                      <div className="input-filed">
                      <FontAwesomeIcon className='input-icon' icon={faLock} />
                      <input
                          type={"password"}
                          placeholder="password"
                          {...register("password", {
                            required: true,
                          })}
                        />
                        </div>
                    } 
                    {errors.password&& (
                          <span style={{ color: "red" }}>
                            This field is required
                          </span>
                        )
                     
                   }
                      <input type="submit" value={resetPassword?"Send":"Login"} className="btn" />
                    </form>
                    <p className='error-txt'>{error}</p>
                    <p className='forget-password' onClick={HandleResetPassword}>Forget Password</p>
 
                        </div>
                </div>
                <div className="panels-container">
                <div className="panel left-panel">
                {model&&<CustomModel modelData={modelData}   showModel={model} setModel={setModel}></CustomModel>}

                            <div className="content">
                                <h3>Are Your New Member?</h3>
                                <p>If you have not already registered, please complete the registration and log in.
                                </p>
                                <button onClick={HandleClickRegistration} className="btn transparent">Registration</button>
                            </div>
                  <img src={loginImage} className="login-Image" alt="Login demo" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;