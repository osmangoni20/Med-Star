import {
  ChangeEvent,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
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
import { RiDeleteBin6Line } from "react-icons/ri";
import tableStyle from "../../../styles/Sass/Components/DashboardPart/tableStyle.module.scss";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
// import DashboardInfoModel from "../../common/Model/DashboardInfoModel";
const DataInputAndList = ({ AllData, modelView }: any) => {
  // tableHeader,tableData,inputType
  console.log(AllData);
  const [model, setModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>({});
  const [tableData, setTableData] = useState<any>([]);
  const submitValue =
    AllData.inputFieldData && AllData.inputFieldData[0].search
      ? "Search"
      : "Submit";
  useEffect(() => {
    setTableData(AllData.tableData);
  }, [AllData.tableData]);

  const HandleModel = (data: any) => {
    setModel(true);
    setModelData(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  const onSubmit = (submitData: { action: boolean }) => {
    submitData.action = true;
    setTableData([...tableData, submitData]);
  };
  // console.log(tableData,AllData.tableData);

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
          {/* Menu Information */}
          <div className={`${style.submenuDetails}`}>
            <MenuOptionsHeader AllHeaders={AllData}></MenuOptionsHeader>
          </div>
          {/* Input From */}
          {AllData.inputFieldData && (
            <div className={`${style.mainInputField_container}`}>
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        registerName: string | number;
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
                              {inputField.selectOptions && (
                                <select
                                  {...register(inputField.registerName, {
                                    required: true,
                                  })}
                                >
                                  {inputField.selectOptions.map((option) => (
                                    <option value={option.value}>
                                      {option.name}
                                    </option>
                                  ))}
                                </select>
                              )}

                              {inputField.inputType && (
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
                              )}
                            </div>
                          )}
                          {/* Text Aria Input */}
                          {inputField.textAria && (
                            <textarea
                              type={"text"}
                              rows="4"
                              style={{ width: "315px" }}
                              className="col-span-2"
                              {...register(inputField.registerName, {
                                required: true,
                              })}
                            />
                          )}

                          {errors[inputField.registerName] && (
                            <div style={{ color: "red" }}>
                              This field is required
                            </div>
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
                    {tableData?.map((data: any, index: any) => (
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
                        {Object.keys(data).map(
                          (options, index) =>
                            options !== "id" &&
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
                                        onClick={() => HandleDelete(data.id)}
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
