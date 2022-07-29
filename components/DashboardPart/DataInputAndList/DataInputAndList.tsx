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
import { useRouter } from "next/router";
import tableStyle from "../../../styles/Sass/Components/DashboardPart/tableStyle.module.scss";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import CustomModel from "../../common/Model/CustomModel";
import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
import NoticeModel from "../../common/Model/NoticeModel";
import OrderInfoModel from "../../common/Model/OrderInfoModel";
import ProgressModel from "../../common/Model/ProgressModel";
import useAuth from "../../hooks/useAuth";
import OrderView from "../Admin Dashboard/OrderView";
import ListView from "../UserDashboard/ListView";
import MyOrder from "../UserDashboard/MyOrder";
import UserProfile from "../UserDashboard/UserProfile";
// import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
const DataInputAndList = ({ AllData, modelView }: any) => {
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

  const inputField = document.getElementById(
    "input"
  ) as HTMLInputElement | null;
  const { user }: any = useAuth();
  const submitValue =
    AllData.inputFieldData && AllData.inputFieldData[0].search
      ? "Search"
      : "Submit";
  useEffect(() => {
    setIsAdmin(() => Boolean(localStorage.getItem("isAdmin") === "true"));
    const admin = Boolean(localStorage.getItem("isAdmin") === "true");

    async function fetchData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/${dynamicRoute}`
      );
      // convert data to json/
      const userData = await res.json();
      setTableData(userData);
    }

    // User Dashboard Data
    async function fetchUserDashboardData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/${dynamicRoute}/${user.email}`
      );
      // convert data to json/
      const userData = await res.json();
      setTableData(userData);
    }
    // call the function

    (admin ? fetchData() : fetchUserDashboardData())
      // make sure to catch any error
      .catch(console.error);
  }, [menu, submenu, isAdmin]);
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

  // const onSubmit = (submitData: any) => {
  //   submitData.action = true;
  //   // setTableData(() => [tableData, submitData]);
  //   console.log(submitData);

  //   AllData.inputFieldData[0].search
  //     ? HandleSearch(submitData.date)
  //     : HandlePost(submitData);

  //   // console.log(tableData,AllData.tableData);
  //   Object.keys(submitData).map((property) => setValue(`${property}`, null));
  //   submitData = {};
  // };
  // Search data with api
  const HandleSearch = (searchValue: any) => {
    fetch(
      `https://med-star-bd.herokuapp.com/${dynamicRoute}?search=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const HandleUpdate = (submitValue: any) => {
    async function fetchData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/${dynamicRoute}/osmangoni0827@gmail.com`,
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
    console.log(submittableData);
    async function fetchData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/${dynamicRoute}`,
        {
          method: "POST",
          body: JSON.stringify(submittableData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.insertedId) {
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
    data: { email: any }
  ) => {
    console.log(e.target.value, data.email);
  };

  const HandleDelete = (id: any) => {
    console.log(id);

    async function fetchData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/${dynamicRoute}/${id}`,
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
          {customModel && (
            <CustomModel
              modelData={modelData}
              showModel={customModel}
              setModel={setCustomModel}
            ></CustomModel>
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
                      (inputField: {
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
                      }) => (
                        <div>
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
                                  {inputField.selectOptions.map((option) => (
                                    <option value={option.value}>
                                      {option.name}
                                    </option>
                                  ))}
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
                                  onChange={(e) => HandleInputFieldValue(e)}
                                />
                              )}

                              {/* ) : (
                      <input
                      name={`${inputField.registerName}`}
                      type={inputField.inputType}
                        placeholder={inputField.placeholderName}
                        defaultValue={inputField.default}
                        required
                        onBlur={(e) => HandleInputFieldValue(e)}
                      />
                    )} */}

                              {/* {inputField.inputType && (
                                <input
                                  className={
                                    inputField.inputType === "file" && "pt-4"
                                  }
                                  type={inputField.inputType}
                                  defaultValue={inputField.default}
                                  placeholder={inputField.placeholderName}
                                  {...register(inputField.registerName, {
                                    required: true,
                                  })}
                                />
                              )} */}
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
              {model && menu === "notice" ? (
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
              {!tableData.length && <ProgressModel />}

              <div className="mx-5 mt-5">
                <table className={`${tableStyle.table}`}>
                  <thead>
                    {AllData?.tableHeader?.map((data: any) => (
                      <th>{data.name}</th>
                    ))}
                  </thead>
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

                    {/* // )} */}
                    {submenu !== "new_order" && (
                      <ListView
                        tableData={tableData}
                        tableHeader={AllData?.tableHeader}
                        HandleModel={isAdmin ? HandleModel : {}}
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