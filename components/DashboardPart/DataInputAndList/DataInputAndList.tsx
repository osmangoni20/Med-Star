import {
  ChangeEvent,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import {
  AiOutlineExperiment,
  AiOutlineGroup,
  AiTwotonePhone,
} from "react-icons/ai";

import { BiCategoryAlt, BiDonateBlood } from "react-icons/bi";
import { BsCalendarDateFill, BsImages } from "react-icons/bs";
import { FaCity, FaUserAlt } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { IoLogoDesignernews } from "react-icons/io";
import {
  MdCastForEducation,
  MdMarkEmailUnread,
  MdOutlineDataUsage,
} from "react-icons/md";
import CreateNotice from "../../DashboardPart/Create Notice/CreateNotice";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import MenuOptionsHeader from "../MenuOptionsHeader/MenuOptionsHeader";
import Sidebar from "../Sidebar/Sidebar";
// import "../Style/inputStyle.css";
import axios from "axios";
import { useRouter } from "next/router";
import tableStyle from "../../../styles/Sass/Components/DashboardPart/tableStyle.module.scss";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import CustomModel from "../../common/Model/CustomModel";
import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
import NoticeModel from "../../common/Model/NoticeModel";
import OrderInfoModel from "../../common/Model/OrderInfoModel";
import ProgressModel from "../../common/Model/ProgressModel";
import useFirebase from "../../hooks/useFirebase";
import OrderView from "../Admin Dashboard/OrderView";
import ListView from "../UserDashboard/ListView";
import MyOrder from "../UserDashboard/MyOrder";
import UserProfile from "../UserDashboard/UserProfile";
// import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
interface Iprops {
  AllData:any, modelView:any ,user?:any
}

const DataInputAndList = ({AllData,modelView,user}:Iprops) => {
  // tableHeader,tableData,inputType
  // console.log(AllData);
  const [isAdmin, setIsAdmin] = useState<any>(false);
  const [model, setModel] = useState<boolean>(false);
  const [customModel, setCustomModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>({});
  const [tableData, setTableData] = useState<any>([]);
  const [orderModel, setOrderModel] = useState<boolean>(false);
  const { menu, submenu } = useRouter().query;
  const dynamicRoute = submenu ? submenu : menu;
  const [fieldValue, setFieldValue] = useState<any>({});
  const [progress, setProgress] = useState<boolean>(false);
  const [uploadImage, setUploadImage] = useState<any>();
  const route = useRouter();
  const inputField = document.getElementById(
    "input"
  ) as HTMLInputElement | null;
  
  const submitValue =
    AllData.inputFieldData && AllData.inputFieldData[0].search
      ? "Search"
      : "Submit";
  useEffect(() => {
    setIsAdmin(() => Boolean(localStorage.getItem("isAdmin") === "true"));
    const admin = Boolean(localStorage.getItem("isAdmin") === "true");
    console.log(user,"data ingoupt")
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/${dynamicRoute}`
      );
      // convert data to json/
      const userData = await res.json();
      setTableData(userData);
    }

    // User Dashboard Data
    async function fetchUserDashboardData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/${dynamicRoute}/${user.email}`
      );
      // convert data to json/
      const userData = await res.json();
      setTableData(userData);

      console.log(userData);
      if (
        (!AllData.inputFieldData || AllData.inputFieldData[0].search) &&
        menu !== "user_order"
      ) {
        console.log(userData.length);
        if (userData.length) {
          setProgress(false);
        } else if (userData.length === 0) {
          setProgress(true);
          setTimeout(() => {
            setProgress(false);
          }, 4000);
        }
      }
    }
    // call the function

    (admin ? fetchData() : fetchUserDashboardData())
      // make sure to catch any error
      .catch(console.error);
  }, [dynamicRoute, isAdmin]);
  console.log(orderModel);
  const HandleModel = (data: any) => {
    console.log(data);
    setModel(true);
    setModelData(data);
  };
  const HandleOrderModel = (data: any) => {
    setOrderModel(!orderModel);
    setModelData(data);
  };
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // }: any = useForm();

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

  // Field Vaue
  const HandleInputFieldValue = (e: any) => {
    console.log(e.target.value);
    if (!e.target.files) {
      const data = { ...fieldValue, [e.target.name]: e.target.value };
      setFieldValue(data);
    } else {
      const data = { ...fieldValue, [e.target.name]: e.target.files[0] };
      setFieldValue(data);
    }
  };

  // 👉️ input has type HTMLInputElement or null here

  //   form submit handle
  const HandleFormSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    console.log(fieldValue);

    AllData.update
      ? HandleUpdate(fieldValue)
      : AllData.inputFieldData[0].search
      ? HandleSearch(fieldValue.searchValue)
      : HandlePost(fieldValue);
    setFieldValue({});
    console.log(fieldValue);
  };

  const HandleSearch = (searchValue: any) => {
    fetch(
      `https://medstar-backend.onrender.com/${dynamicRoute}?search=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const HandleUpdate = (submitValue: any) => {
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/${dynamicRoute}/osmangoni0827@gmail.com`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(submitValue),
        }
      );
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.modifiedCount) {
        setModel(true);
        setModelData({
          text1: "Your Update Successfully Done",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });
      }
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  };

  // Submit data with api
  const HandlePost = (submittableData: any) => {
    setProgress(!progress);
    console.log(submittableData);
    const confirmSubmitData = isAdmin
      ? submittableData
      : { ...submittableData, email: user.email };
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/${dynamicRoute}`,
        {
          method: "POST",
          body: JSON.stringify(confirmSubmitData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.insertedId) {
        setProgress(false);
        setCustomModel(true);
        setModelData({
          text1: "Successfully Done",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });
      }
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  };

  const HandleRequestAction = (
    e: ChangeEvent<HTMLSelectElement>,
    data: { _id: string; email: string }
  ) => {
    console.log(e.target.value, data.email);

    const status = e.target.value;
    const email = data.email;
    const id = data._id;
    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/${dynamicRoute}/${email}/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.modifiedCount) {
        setProgress(false);
        if (status === "delivered") {
          fetch("https://medstar-backend.onrender.com/${dynamicRoute}", {
            method: "PATCH",
            body: JSON.stringify({ status }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
      }
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  };

  const HandleDelete = (id: any) => {
    console.log(id);

    async function fetchData() {
      const res = await fetch(
        `https://medstar-backend.onrender.com/${dynamicRoute}/${id}`,
        {
          method: "DELETE",
        }
      );
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.deletedCount === 1) {
        const data = tableData.filter((data: any) => data._id !== id);
        setTableData(data);
        setCustomModel(true);
        setModelData({
          text1: "Successfully Delete",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });
      }
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  };
  const HandleEdit = (id: any) => {
    console.log(id);
  };
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className={`${style.dashboardInformation} flex`}>
        <aside className="h-screen">
          <Sidebar></Sidebar>
        </aside>

        <main>
          {progress ? (
            <ProgressModel />
          ) : (
            customModel && (
              <CustomModel
                modelData={modelData}
                showModel={customModel}
                setModel={setCustomModel}
              ></CustomModel>
            )
          )}
          {/* Menu Information */}
          <div className={`${style.submenuDetails}`}>
            <MenuOptionsHeader AllHeaders={AllData}></MenuOptionsHeader>
          </div>
          {/* Input From */}

          {AllData.inputFieldData && (
            <div className={`${style.mainInputField_container}`}>
              <div className="">
                <form onSubmit={HandleFormSubmit}>
                  <div className={`${style.form_input_field}`}>
                    {AllData.inputFieldData.map(
                      (
                        inputField: {
                          name:
                            | string
                            | number
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | ReactFragment
                            | ReactPortal
                            | null
                            | undefined;
                          icon: any;
                          selectOptions: any[];
                          registerName: string;
                          inputType: string | (string & {}) | undefined;
                          default:
                            | string
                            | number
                            | readonly string[]
                            | undefined;
                          placeholderName: string | undefined;
                          textAria: any;
                        },
                        index: any
                      ) => (
                        <div key={index}>
                          <h5>{inputField.name} </h5>
                          {!inputField.textAria && (
                            <div className={`${style.input_filed}`}>
                              {/* {inputField.icon && ( */}

                              {inputField.icon === "name" && (
                                <FaUserAlt className={`${style.input_icon}`} />
                              )}
                              {inputField.icon === "image" && (
                                <BsImages className={`${style.input_icon}`} />
                              )}
                              {inputField.icon === "date" && (
                                <BsCalendarDateFill
                                  className={`${style.input_icon}`}
                                />
                              )}

                              {inputField.icon === "email" && (
                                <MdMarkEmailUnread
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "blood" && (
                                <BiDonateBlood
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "mobile" && (
                                <AiTwotonePhone
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "group" && (
                                <AiOutlineGroup
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "city" && (
                                <FaCity className={`${style.input_icon}`} />
                              )}
                              {inputField.icon === "designation" && (
                                <IoLogoDesignernews
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "category" && (
                                <BiCategoryAlt
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "education" && (
                                <MdCastForEducation
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "job" && (
                                <AiOutlineExperiment
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "money" && (
                                <HiCurrencyBangladeshi
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.icon === "use" && (
                                <MdOutlineDataUsage
                                  className={`${style.input_icon}`}
                                />
                              )}
                              {inputField.selectOptions ? (
                                <select
                                  name={`${inputField.registerName}`}
                                  defaultValue={inputField.default}
                                  required
                                  value={
                                    Object.keys(fieldValue).length === 0
                                      ? ""
                                      : fieldValue[inputField.registerName]
                                  }
                                  onChange={HandleInputFieldValue}
                                >
                                  {inputField.selectOptions.map(
                                    (option, index) => (
                                      <option key={index} value={option.value}>
                                        {option.name}
                                      </option>
                                    )
                                  )}
                                </select>
                              ) : inputField.inputType !== "file" ? (
                                <input
                                  value={
                                    Object.keys(fieldValue).length === 0
                                      ? ""
                                      : fieldValue[inputField.registerName]
                                  }
                                  name={`${inputField.registerName}`}
                                  type={inputField.inputType}
                                  placeholder={inputField.placeholderName}
                                  // defaultValue={
                                  //   tableData[inputField.registerName]
                                  // }
                                  required
                                  onChange={(e) => HandleInputFieldValue(e)}
                                />
                              ) : (
                                <input
                                  className={"pt-4"}
                                  name={`${inputField.registerName}`}
                                  type={"file"}
                                  defaultValue={
                                    tableData[inputField.registerName]
                                  }
                                  required
                                  onChange={(e) => HandleImageUpload(e)}
                                />
                              )}
                            </div>
                          )}
                          {/* Text Aria Input */}
                          {inputField.textAria && (
                            <textarea
                              rows={4}
                              style={{ width: "315px" }}
                              className="col-span-2"
                              name={inputField.registerName}
                              required
                              value={
                                Object.keys(fieldValue).length === 0
                                  ? ""
                                  : fieldValue[inputField.registerName]
                              }
                              onChange={(e) => HandleInputFieldValue(e)}
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex justify-center">
                    <input
                      value={submitValue}
                      className={style.btn}
                      type="submit"
                    />
                  </div>
                  <hr className="my-5"></hr>
                </form>
              </div>
            </div>
          )}
          {/* Display List Table */}

          {/* {tableData.map((data: any) => (
            
          ))} */}

          {menu === "user_order" && <MyOrder order={tableData} />}
          {menu === "user_profile" && <UserProfile />}
          {menu === "create_notice" && <CreateNotice />}
          {AllData?.tableHeader && (
            <div className={`${style.ListInformation}`}>
              {model && (menu === "notice" || menu === "user_notice") ? (
                <NoticeModel
                  showModel={model}
                  data={modelData}
                  setModel={setModel}
                />
              ) : (
                model && (
                  <DashboardInfoModel
                    showModel={model}
                    data={modelData}
                    setModel={setModel}
                  ></DashboardInfoModel>
                )
              )}

              {orderModel && (
                <OrderInfoModel
                  showModel={orderModel}
                  data={modelData}
                  setOrderModel={setOrderModel}
                ></OrderInfoModel>
              )}

              <div className="mx-5 mt-5">
                <table className={`${tableStyle.table}`}>
                {
                  Object.keys(tableData).length>0?  <thead>
                  {AllData?.tableHeader?.map((data: any, index: any) => (
                    <th key={index}>{data.name}</th>
                  ))}
                </thead>:
                <thead>
                  <th>It is Empty Now!</th>
                </thead>
                }

                  {/* <br/> */}
                  <tbody>
                    {submenu === "new_order" && (
                      <OrderView
                        tableData={tableData}
                        tableHeader={AllData?.tableHeader}
                        HandleOrderModel={HandleOrderModel}
                        HandleRequestAction={HandleRequestAction}
                      />
                    )}

                  
                    {submenu !== "new_order" && (
                      <ListView
                        tableData={tableData}
                        tableHeader={AllData?.tableHeader}
                        HandleModel={HandleModel}
                        HandleDelete={isAdmin ? HandleDelete : {}}
                        HandleRequestAction={isAdmin ? HandleRequestAction : {}}
                      />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DataInputAndList;

/* Input Form */
