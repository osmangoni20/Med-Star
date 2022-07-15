import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Model from "../../../Model/Model";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import MenuOptionsHeader from "../MenuOptionsHeader/MenuOptionsHeader";
import Sidebar from "../Sidebar/Sidebar";
// import "../Style/inputStyle.css";
import '../Style/tableStyle.css';
import "./DataInput.css";
const DataInputAndList = ({ AllData,modelView }) => {
  // tableHeader,tableData,inputType
  const [model,setModel]=useState(false);
  const [modelData,setModelData]=useState({});
  const [tableData, setTableData] = useState([]);
  const submitValue =AllData.inputFieldData&& AllData.inputFieldData[0].search ? "Search" : "Submit";
  useEffect(()=>{
    setTableData(AllData.tableData);
  },[AllData.tableData])

  const HandleModel=(data)=>{
    setModel(true);
    setModelData(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (submitData) => {
    submitData.action=true;
    setTableData([...tableData, submitData]);
  };
// console.log(tableData,AllData.tableData);

  const HandleRequestAction=(e,data)=>{
    console.log(e.target.value,data.email);
  }

  const HandleDelete = (id) => {
    const ActiveData = tableData.filter((item) => item.id !== id);
    setTableData(ActiveData);
  };
  const HandleEdit = (id) => {
    console.log(id);
  };
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex dashboardInformation">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
        
          {/* Menu Information */}
          <div className="submenuDetails">
            <MenuOptionsHeader
              AllHeaders={AllData}
            ></MenuOptionsHeader>

            {/* Input Form */}
            <div className="mainInputField-container">
                <div className="">
                {AllData.inputFieldData&&<form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-input-field">
                {AllData.inputFieldData.map((inputField) => (


                  <div>
                    <h5>{inputField.name} </h5>
                    <div className="input-filed">
                    {inputField.icon && <i class="fa fa-user input-icon"></i>}

                    {inputField.selectOptions && (
                      <select
                        {...register(inputField.registerName, {
                          required: true,
                        })}
                      >
                        {inputField.selectOptions.map((option) => (
                          <option value={option.value}>{option.name}</option>
                        ))}
                      </select>
                    )}
                    
                    
                    {inputField.inputType && (
                     
                      <input
                        type={inputField.inputType}
                        defaultValue={inputField.default}
                        placeholder={inputField.placeholderName}
                        {...register(inputField.registerName, {
                          required: true,
                        })}
                      />
                     
                    )}
                    
                    
                    {inputField.textAria && (
                     
                      <textarea
                        type={"text"}
                        rows="4"
                        cols="50"
                        className="col-span-2"
                        {...register(inputField.registerName, {
                          required: true,
                        })}
                      />
                      
                    )}

                    {errors[inputField.registerName] && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <input
                  value={submitValue}
                  className="btn"
                  type="submit"
                />
              </div>
              <hr className="my-5"></hr>
            </form>}
                </div>
            </div>
            
                    
            {/*       Display List Table */}
            {
            
            
            AllData?.tableHeader && (
              <div className="ListInformation">
                {model&&<Model showModel={model} modelData={modelData} setModel={setModel}></Model>}
            
            
                <br/><br/>
                <div className="mx-5">
                <table>
                  <thead>
                    {AllData?.tableHeader?.map((data) => (
                      <th>{data}</th>
                    ))}
                  </thead>
                  {/* <br/> */}
                  <tbody>
                    {tableData?.map((data, index) => (
                    
                      <tr 
                      key={index}
                      onClick={modelView?()=>{HandleModel(data)}:()=>{}}
                      
                      style={index%2===0?(modelView?{cursor: "pointer",backgroundColor:"#fff"}:{backgroundColor:"#fff"}):(modelView?{cursor: "pointer",backgroundColor:"#f2edf3"}:{backgroundColor:"#f2edf3"})}>
                        {Object.keys(data).map(
                          (options, index) =>
                            options !== "id" &&
                            (Object.keys(data).length - 2 >= index ? (
                              <td>{data[options]}</td>
                            ) : (
                              <>
                              
                                {
                                data.actionType==="select"?<td>
                                  <form>
                                    <select onChange={(e)=>HandleRequestAction(e,data)} className="request-action">
                                    <option defaultValue={null} >New Request</option>

                                      <option value={"pending"} >Request Pending</option>
                                      <option value={"accept"} >Request Accept</option>
                                    </select>
                                  </form>
                                </td>:
                                <td>
                                <span
                                  onClick={() => HandleEdit(data.id)}
                                  className="edit-icon"
                                >
                                  <ion-icon name="create-outline"></ion-icon>
                                </span>
                                <span
                                  onClick={() => HandleDelete(data.id)}
                                  className="delete-icon"
                                >
                                  <ion-icon name="trash-outline"></ion-icon>
                                </span>
                              </td>
                              }
                              </>
                              
                            ))
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br/><br/>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataInputAndList;
