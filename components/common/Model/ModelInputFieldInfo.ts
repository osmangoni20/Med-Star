export const ModelInputField = [
  {
    name: "patient_FirstName",
    fieldHeader: "First Name",
    inputFiledType: "text",
    icon: "FaUserAlt",
  },
  {
    name: "patient_LastName",
    fieldHeader: "Last Name",
    inputFiledType: "text",
    icon: "FaUserAlt",
  },
  {
    name: "email",
    fieldHeader: "E-mail",
    inputFiledType: "email",
    icon: "AiOutlineMail",
  },

  ,
  {
    name: "mobile_No",
    fieldHeader: "Mobile No",
    inputFiledType: "text",
    icon: "MdAddIcCall",
  },
  {
    name: "gender",
    fieldHeader: "Gender",
    inputFiledType: "select",
    icon: "MdAddIcCall",
    options: [
      { name: "Male", value: "male" },
      { name: "Female", value: "female" },
      { name: "Others", value: "others" },
    ],
  },
  {
    name: "age",
    fieldHeader: "Your Age",
    inputFiledType: "number",
    icon: "FaUserAlt",
  },
  {
    name: "weight",
    fieldHeader: "Your Weight",
    inputFiledType: "number",
    icon: "FaUserAlt",
  },
];
