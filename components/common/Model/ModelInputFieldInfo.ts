export const ModelInputField = [
  {
    name: "first_name",
    fieldHeader: "First Name",
    inputFiledType: "text",
    icon: "FaUserAlt",
  },
  {
    name: "last_name",
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
    name: "patient_disease",
    fieldHeader: "Disease Type",
    inputFiledType: "text",
    icon: "FaDisease",
  },

  ,
  {
    name: "mobile_no",
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
    name: "patient_age",
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