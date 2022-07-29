import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseAuthentication from "../Authentication/firebase/firebase.initialize";
  
const useFirebase=()=>{
    FirebaseAuthentication();

    const [user,setUser]=useState({});
    const [newUser,setNewUser]=useState({});
    const [error,setError]=useState('');
    const auth = getAuth();

    const SignUpWithEmailAndPassword = (userData) => {
        const email = userData.email;
        const password = userData.password;
      
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            setNewUser(userData);
            UpdateUserData(userData);
            EmailVerification(auth);
            console.log(userCredential)
            setUser({name:userCredential.user.displayName
            ,email:userCredential.user.email})
            
            fetch("https://med-star-bd.herokuapp.com/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            }).then(res=>res.json())
            .then(data=>{
              if(data.insertedId){
                alert("Your Account is successfully Created. Please Verified your Email")
              }
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setError(errorMessage)
            console.log(errorCode, errorMessage);
          });
      };


      const UpdateUserData = (user) => {
        
        updateProfile(auth.currentUser, {
          phoneNumber: user.mobile_No,
          displayName: user.firstName+' '+user.lastName,
          photoURL: "",
        })
          .then((result) => {
            console.log(result);
            // alert("A confirmation link already sent to your email with details to activate your account. Please Check Your Email")

          })
          .catch((error) => {
            console.log(error);
          });
      };
      // Email Verification
      const EmailVerification = (auth) => {
        sendEmailVerification(auth.currentUser)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      };

      //Sign In
      const SignInWithEmailPassword=(email,password)=>{

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          localStorage.setItem("accessToken",userCredential.accessToken)
          setNewUser({});
          console.log(userCredential)
          const user = userCredential.user;
          setUser({...user,
              firstName:user.displayName.slice(0,8),
              fullName:user.displayName,
              email:user.email,
              emailVerified:user.emailVerified,
              photo:user.photoURL,
              phone:user.phoneNumber
          })
          // if(!user.emailVerified)
          // {
          //     alert("Your Email is not Verified . Please Email Verified.")
          // }
          
          setError('');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(error.message);
          console.log(errorCode,errorMessage)
        });
      }
     const ResetPassword=(email)=>{
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    setError('');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    console.log(errorCode,errorMessage)
    // ..
  });
     }

     const Logout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem("accessToken")
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
     }

     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {

          
            if (user) {
              console.log("user")
              setUser(user)
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
         
          });
     },[auth])

     return{
        SignInWithEmailPassword,
         SignUpWithEmailAndPassword,
         EmailVerification,
         user,
         error,
         ResetPassword,
         Logout
     }
      
}
export default useFirebase;