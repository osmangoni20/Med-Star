import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { useForm } from "react-hook-form";
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DashboardHeader from "../DashboardPart/DashboardHeader/DashboardHeader";
import MenuOptionsHeader from "../DashboardPart/MenuOptionsHeader/MenuOptionsHeader";
import Sidebar from "../DashboardPart/Sidebar/Sidebar";
import SidebarMenuHeder from "../DashboardPart/SidebarManuHeder/SidebarMenuHeder";
import "../DashboardPart/Style/inputStyle.css";
import CreateNoticeInfoData from "./CreateNoticeInfoData";

const CreateNotice = () => {
    const Style={
        border: "2px solid gray",
  padding: "0px",
  marginTop: "15px"
}
    
    // const[text,setText]=useState();
    const [text,setText]=useState({
    editorState: EditorState.createEmpty(),
  });
   const onEditorStateChange = (editorState) => {
    setText({
          editorState,
        });
      };

      const { editorState } = text;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (submitData) => {
    submitData.newNotice=draftToHtml(convertToRaw(editorState.getCurrentContent()))
   console.log(submitData)
  };

  
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
          {/* Menu Header */}
          <SidebarMenuHeder
            menuHeader={CreateNoticeInfoData.sidebarMenuHeader}
          ></SidebarMenuHeder>
          {/* Sub Menu Information */}
          <div style={Style}>
            <MenuOptionsHeader
              menuOptionHeader={CreateNoticeInfoData.menuOptionHeader}
            ></MenuOptionsHeader>

            {/* Input Form */}
            <div>
                 <Editor
                   editorState={editorState}
                   wrapperClassName="demo-wrapper"
                   editorClassName="demo-editor"
                   onEditorStateChange={onEditorStateChange}
                 />
                 
                 <hr className="my-5"></hr>
                 </div>
                 
            {CreateNoticeInfoData.inputFieldData&&<form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-3 my-5 px-3">
                {CreateNoticeInfoData.inputFieldData.map((inputField) => (
                  <div class="input-icons">
                    <h5>{inputField.name} </h5>
                    {inputField.icon && <i class={inputField.icon}></i>}

                  
                    {inputField.inputType && (
                      <input
                        type={inputField.inputType}
                        placeholder={inputField.placeholderName}
                        className="input-filed"
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
                ))}
              </div>

              
                
            
              <div className="flex justify-center">
                <input
                  value={"Submit"}
                  className="submitBtn"
                  type="submit"
                />
              </div>
            
            </form>}
            </div>
        </main>
    </div>
    </div>
    );
};

export default CreateNotice;