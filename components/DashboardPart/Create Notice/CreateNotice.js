import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdTitle } from "react-icons/md";
// import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import CustomModel from "../../common/Model/CustomModel";
import CreateNoticeInfoData from "./CreateNoticeInfoData";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const CreateNotice = () => {
  const [fieldValue, setFieldValue] = useState({});
  const [model, setModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const Style = {
    border: "1px solid gray",
    borderRadius:"5px",
    padding: "20px 2px",
    marginTop: "15px",
    backgroundColor:"white"
  };

  // const[text,setText]=useState();
  const [text, setText] = useState({
    editorState: EditorState.createEmpty(),
  });
  const onEditorStateChange = (editorState) => {
    setText({
      editorState,
    });
  };

  const { editorState } = text;

  // Input Field Handle
  const HandleInputFieldValue = (e) => {
    console.log(e.target.name);
    if (!e.target.files) {
      const data = { ...fieldValue, [e.target.name]: e.target.value };
      setFieldValue(data);
    } else {
      const data = { ...fieldValue, img: e.target.files[0] };
      setFieldValue(data);
    }
  };

  // Notice Submit
  const HandleSubmit = (e) => {
    e.preventDefault();
  
    setFieldValue({
      ...fieldValue,description:parse(draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      ))
    })
    
    async function fetchData() {
      const res = await fetch(`https://medstar-backend.onrender.com/create_notice`, {
        method: "POST",
        body: JSON.stringify(fieldValue),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // convert data to json/
      const data = await res.json();
      console.log(data);
      if (data.insertedId) {
        setModel(true);
        setProgress(false);
        setModelData({
          text1: "Successfully Notice Generated",
          text2: "Ok",
          successType: true,
        });
      } else {
        setProgress(true);
      }
    }
    // call the function
    fetchData()
    // // //   //   // make sure to catch any error
      .catch(console.error);
  };

  return (
    <div>
      {/* success model */}
      
      <div style={Style}>
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
        {model && (
        <CustomModel
          modelData={modelData}
          showModel={model}
          setModel={setModel}
        ></CustomModel>
      )}
        {
          <form onSubmit={HandleSubmit}>
            <div className={`${style.form_input_field}`}>
              {CreateNoticeInfoData.inputFieldData.map((inputField, index) => (
                <div key={index}>
                  <h5>{inputField.name} </h5>
                  <div className={`${style.input_filed}`}>
                    {inputField.icon === "title" && (
                      <MdTitle className={`${style.input_icon}`} />
                    )}
                    {inputField.icon === "date" && (
                      <BsCalendarDateFill className={`${style.input_icon}`} />
                    )}
                    <input
                      name={inputField.registerName}
                      type={inputField.inputType}
                      placeholder={inputField.placeholderName}
                      required
                      onChange={(e) => HandleInputFieldValue(e)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <input value={"Submit"} className={style.btn} type="submit" />
            </div>
<h2>{
  fieldValue.description 
}</h2>
          </form>
        }
      </div>
    </div>
  );
};

export default CreateNotice;
