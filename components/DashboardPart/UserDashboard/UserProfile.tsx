import { useEffect, useState } from "react";
import profileStyle from "../../../styles/Sass/Components/DashboardPart/Dashboard/UserDashboard/userProfile.module.scss";
import useFirebase from "../../hooks/useFirebase";
import cameraImage from "/assets/image/camera.png";
import profileImage from "/assets/image/personlogo.jpg";
const field = [
  {
    name: "First Name",
    registerName: "firstName",
    icon: "name",
    placeholderName: "Your First Name",
    inputType: "text",
  },
  {
    name: "Last Name",
    registerName: "lastName",
    icon: "name",
    placeholderName: "Your Last Name",
    inputType: "text",
  },
  {
    name: "Age",
    icon: "date",
    registerName: "age",
    placeholderName: "Your Age",
    inputType: "number",
  },

  {
    name: "Your Email",
    registerName: "email",
    placeholderName: "Email",
    icon: "email",
    inputType: "email",
  },

  {
    name: "Mobile Number",
    registerName: "mobile_no",
    icon: "mobile",
    placeholderName: "Mobile Number",
    inputType: "number",
  },
];

import { AiTwotonePhone } from "react-icons/ai";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiDonateBlood } from "react-icons/bi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import CustomModel from "../../common/Model/CustomModel";
import ProgressModel from "../../common/Model/ProgressModel";
import loader from "/assets/svg/Spin-1s-200px.svg";
const UserProfile = () => {
  const [userData, setUserData] = useState<any>({});
  const [fieldValue, setFieldValue] = useState<any>({});
  const [model, setModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>({});
  const [uploadImage, setUploadImage] = useState<any>();
  const [progress, setProgress] = useState(false);
  const { user, UpdateUserData }: any = useFirebase();
  const route = useRouter();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/users/${user.email}`
      );
      // convert data to json/
      const userData = await res.json();
      setUserData(userData);
      console.log(userData, user.email);
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [user.email]);

  // Input Value

  const HandleInputFieldValue = (e: any) => {
    console.log(e.target.name);
    if (!e.target.files) {
      const data = { ...fieldValue, [e.target.name]: e.target.value };
      setFieldValue(data);
    } else {
      const data = { ...fieldValue, img: e.target.files[0] };
      setFieldValue(data);
    }
  };

  // Image Upload

  const HandleImageUpload = (e: any) => {
    setUploadImage("processing");
    setFieldValue({ ...fieldValue, img: e.target.files[0] });
    const ImagForm = new FormData();
    ImagForm.set("key", "20eb4f4a88d3505364e15416b41a0df2");
    ImagForm.append("image", e.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", ImagForm).then((imageData) => {
      console.log(imageData.data);
      setUploadImage(imageData.data.data.url);
    });
  };

  // Form Submit

  const HandleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setProgress(!progress);
    console.log();
    const updateFieldValue = {
      img: uploadImage || userData.img,
      email: userData.email || userData.email,
      lastName: fieldValue.lastName || userData.lastName,
      firstName: fieldValue.firstName || userData.firstName,
      mobile_no: fieldValue.mobile_no || userData.mobile_no,
      age: fieldValue.age || userData.age,
      address: fieldValue.address || userData.address,
    };
    console.log(updateFieldValue);
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/user_profile/${user.email}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateFieldValue),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.modifiedCount) {
        UpdateUserData(updateFieldValue);
        setModel(true);
        setProgress(false);
        setModelData({
          text1: "Successfully Done",
          text2: "Enjoy our service",
          successType: true,
        });
        console.log(user);
      }
    }
    // call the function
    fetchData()
      //   //   //   // make sure to catch any error
      .catch(console.error);
  };
  return (
    <div className={`${style.mainInputField_container}`}>
      {progress ? (
        <ProgressModel />
      ) : (
        model && (
          <CustomModel
            modelData={modelData}
            showModel={model}
            setModel={setModel}
          ></CustomModel>
        )
      )}
      <form onSubmit={HandleSubmit}>
        <div className={`${style.form_input_field}`}>
          <div className={profileStyle.personal_image}>
            <label className="label">
              <input type="file" name="img" onChange={HandleImageUpload} />
              <figure className={profileStyle.personal_figure}>
                <span className={profileStyle.personal_avatar}>
                  {uploadImage !== "processing" && (
                    <Image
                      src={uploadImage || user?.photoURL || profileImage}
                      alt="avatar"
                      height={150}
                      width={150}
                    />
                  )}
                  {uploadImage === "processing" && (
                    <Image src={loader} alt="avatar" height={150} width={150} />
                  )}
                </span>
                <figcaption className={profileStyle.personal_figcaption}>
                  <Image
                    src={cameraImage}
                    height={40}
                    width={40}
                    alt={"Profile"}
                  />
                </figcaption>
              </figure>
            </label>
          </div>

          {field.map((field, index) => (
            <div key={index}>
              <h5>{field.name} </h5>
              <div className={`${style.input_filed}`}>
                {field.icon === "name" && (
                  <FaUserAlt className={`${style.input_icon}`} />
                )}
                {field.icon === "date" && (
                  <BsCalendarDateFill className={`${style.input_icon}`} />
                )}
                {field.icon === "email" && (
                  <MdMarkEmailUnread className={`${style.input_icon}`} />
                )}
                {field.icon === "blood" && (
                  <BiDonateBlood className={`${style.input_icon}`} />
                )}
                {field.icon === "mobile" && (
                  <AiTwotonePhone className={`${style.input_icon}`} />
                )}
                <input
                  name={field.registerName}
                  type={field.inputType}
                  placeholder={field.placeholderName}
                  defaultValue={userData[field.registerName]}
                  required
                  onChange={(e) => HandleInputFieldValue(e)}
                />
              </div>
            </div>
          ))}
          <div>
            <h5>Your Address</h5>
            <textarea
              rows={4}
              style={{ width: "315px" }}
              className="col-span-2"
              name={"address"}
              required
              defaultValue={userData.address}
              onChange={(e) => HandleInputFieldValue(e)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input value={"Submit"} className={style.btn} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
