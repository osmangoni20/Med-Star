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

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import MenuOptionsHeader from "../MenuOptionsHeader/MenuOptionsHeader";
import Sidebar from "../Sidebar/Sidebar";
// import "../Style/inputStyle.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiDeleteBin6Line } from "react-icons/ri";
import tableStyle from "../../../styles/Sass/Components/DashboardPart/tableStyle.module.scss";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import CustomModel from "../../common/Model/CustomModel";
import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
import useAuth from "../../hooks/useAuth";
// import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
const DataInputAndList = ({ AllData, modelView }: any) => {
  // tableHeader,tableData,inputType
  // console.log(AllData);
  const isAdmin = Number(localStorage?.getItem("IsAdmin"));
  const [model, setModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>({});
  const [tableData, setTableData] = useState<any>([]);
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
    async function fetchData() {
      const res = await fetch(
        `https://med-star-bd.herokuapp.com/${dynamicRoute}/ehostelbd@gmail.com`
      );
      // convert data to json/
      const userData = await res.json();
      setTableData(userData);
    }
    // call the function

    isAdmin === 0 &&
      fetchData()
        // make sure to catch any error
        .catch(console.error);
  }, [menu]);
  console.log(tableData);
  const HandleModel = (data: any) => {
    setModel(true);
    setModelData(data);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // }: any = useForm();

  const HandleInputFieldValue = (e: any) => {
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
        setModel(true);
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
    const ActiveData = tableData.filter((item: { id: any }) => item.id !== id);
    setTableData(ActiveData);
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
          {model && (
            <CustomModel
              modelData={modelData}
              showModel={model}
              setModel={setModel}
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
                            // <textarea
                            //   type={"text"}
                            //   rows="4"
                            //   style={{ width: "315px" }}
                            //   className="col-span-2"
                            //   {...register(inputField.registerName, {
                            //     required: true,
                            //   })}
                            // />
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
          {/*       Display List Table */}
          {AllData?.tableHeader && (
            <div className={`${style.ListInformation}`}>
              {model && (
                <DashboardInfoModel
                  showModel={model}
                  data={modelData}
                  setModel={setModel}
                ></DashboardInfoModel>
              )}

              <div className="mx-5 mt-5">
                <table className={`${tableStyle.table}`}>
                  <thead>
                    {AllData?.tableHeader?.map(
                      (
                        data:
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
                          | undefined
                      ) => (
                        <th>{data}</th>
                      )
                    )}
                  </thead>
                  {/* <br/> */}
                  <tbody>
                    {menu === "my_order" &&
                      tableData?.map((data: any, index: any) =>
                        data?.orderProduct.map((option: any) => (
                          <tr
                            key={index}
                            onClick={
                              modelView
                                ? () => {
                                    HandleModel(data);
                                  }
                                : () => {}
                            }
                            style={
                              index % 2 === 0
                                ? modelView
                                  ? {
                                      cursor: "pointer",
                                      backgroundColor: "#fff",
                                    }
                                  : { backgroundColor: "#fff" }
                                : modelView
                                ? {
                                    cursor: "pointer",
                                    backgroundColor: "#f2edf3",
                                  }
                                : { backgroundColor: "#f2edf3" }
                            }
                          >
                            <td>
                              <Image src={option.img} height={40} width={40} />
                            </td>
                            <td>{option.name}</td>
                            <td>{option.quantity}</td>
                            <td>{option.price}</td>
                            <td>{data.status}</td>
                          </tr>
                        ))
                      )}

                    {menu === "doctorHistory" &&
                      tableData?.map((data: any, index: any) => (
                        <tr
                          key={index}
                          onClick={
                            modelView
                              ? () => {
                                  HandleModel(data);
                                }
                              : () => {}
                          }
                          style={
                            index % 2 === 0
                              ? modelView
                                ? {
                                    cursor: "pointer",
                                    backgroundColor: "#fff",
                                  }
                                : { backgroundColor: "#fff" }
                              : modelView
                              ? {
                                  cursor: "pointer",
                                  backgroundColor: "#f2edf3",
                                }
                              : { backgroundColor: "#f2edf3" }
                          }
                        >
                          <td>{data.doctor_name}</td>
                          <td>{data.date}</td>
                          <td>{data.disease}</td>
                          <td>{data.update}</td>
                        </tr>
                      ))}

                    {menu === "user_notice" &&
                      tableData?.map((data: any, index: any) => (
                        <tr
                          key={index}
                          onClick={
                            modelView
                              ? () => {
                                  HandleModel(data);
                                }
                              : () => {}
                          }
                          style={
                            index % 2 === 0
                              ? modelView
                                ? {
                                    cursor: "pointer",
                                    backgroundColor: "#fff",
                                  }
                                : { backgroundColor: "#fff" }
                              : modelView
                              ? {
                                  cursor: "pointer",
                                  backgroundColor: "#f2edf3",
                                }
                              : { backgroundColor: "#f2edf3" }
                          }
                        >
                          <td>{data.title}</td>
                          <td>{data.date}</td>
                          <td>{data.description}</td>
                        </tr>
                      ))}

                    {menu === "new_donner" &&
                      tableData?.map((data: any, index: any) => (
                        <tr
                          key={index}
                          onClick={
                            modelView
                              ? () => {
                                  HandleModel(data);
                                }
                              : () => {}
                          }
                          style={
                            index % 2 === 0
                              ? modelView
                                ? {
                                    cursor: "pointer",
                                    backgroundColor: "#fff",
                                  }
                                : { backgroundColor: "#fff" }
                              : modelView
                              ? {
                                  cursor: "pointer",
                                  backgroundColor: "#f2edf3",
                                }
                              : { backgroundColor: "#f2edf3" }
                          }
                        >
                          <td>{data.doctor_name}</td>
                          <td>{data.date}</td>
                          <td>{data.disease}</td>
                          <td>{data.update}</td>
                        </tr>
                      ))}

                    {isAdmin !== 0 &&
                      AllData?.tableData?.map((data: any, index: any) => (
                        <tr
                          key={index}
                          onClick={
                            modelView
                              ? () => {
                                  HandleModel(data);
                                }
                              : () => {}
                          }
                          style={
                            index % 2 === 0
                              ? modelView
                                ? { cursor: "pointer", backgroundColor: "#fff" }
                                : { backgroundColor: "#fff" }
                              : modelView
                              ? {
                                  cursor: "pointer",
                                  backgroundColor: "#f2edf3",
                                }
                              : { backgroundColor: "#f2edf3" }
                          }
                        >
                          {/* (options, index) =>
                          //   options !== "_id" &&
                          //   (Object.keys(data).length - 2 >= index ? (
                          //     <td>{data[options]}</td>
                          //   ):(
                          //     <></>
                          //   )
                          // ) */}

                          {/* {data.orderProduct.map((options: any) => (
                          <td>
                            {options === "img" ? (
                              <Image src={options.img} height={60} width={60} />
                            ) : (
                              options
                            )}
                          </td>
                        ))} */}

                          {isAdmin &&
                            Object.keys(data).map(
                              (options, index) =>
                                options !== "_id" &&
                                (Object.keys(data).length - 2 >= index ? (
                                  <td>{data[options]}</td>
                                ) : (
                                  <>
                                    {data.actionType === "select" ? (
                                      <td>
                                        <form>
                                          <select
                                            onChange={(e) =>
                                              HandleRequestAction(e, data)
                                            }
                                            className={`${style.request_action}`}
                                          >
                                            <option value={"pending"}>
                                              Pending
                                            </option>
                                            <option value={"delivered"}>
                                              Delivered
                                            </option>
                                            <option value={"declined"}>
                                              Declined
                                            </option>
                                          </select>
                                        </form>
                                      </td>
                                    ) : (
                                      data.actionType !== "none" && (
                                        <td>
                                          <div
                                            onClick={() => HandleEdit(data.id)}
                                            className={`${tableStyle.edit_icon}`}
                                          >
                                            {/* <ion-icon name="create-outline"></ion-icon> */}
                                          </div>
                                          <div
                                            onClick={() =>
                                              HandleDelete(data.id)
                                            }
                                          >
                                            <RiDeleteBin6Line
                                              className={`${tableStyle.delete_icon}`}
                                            />
                                          </div>
                                        </td>
                                      )
                                    )}
                                  </>
                                ))
                            )}
                        </tr>
                      ))}
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
