export const AppointmentModelInputField = [
  {
    name: "firstName",
    fieldHeader: "First Name",
    inputFiledType: "text",
    icon: "FaUserAlt",
  },
  {
    name: "lastName",
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
    icon: "gender",
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

export const PrescriptionInputFieldData = [
  {
    name: "firstName",
    fieldHeader: "First Name",
    inputFiledType: "text",
    icon: "FaUserAlt",
  },
  {
    name: "lastName",
    fieldHeader: "Last Name",
    inputFiledType: "text",
    icon: "FaUserAlt",
  },
  {
    name: "img",
    fieldHeader: "Prescription Image",
    inputFiledType: "file",
    icon: "image",
  },
  {
    name: "email",
    fieldHeader: "E-mail",
    inputFiledType: "email",
    icon: "AiOutlineMail",
  },
  ,
  {
    name: "mobile_no",
    fieldHeader: "Mobile No",
    inputFiledType: "text",
    icon: "MdAddIcCall",
  },
  {
    name: "date",
    fieldHeader: "Date",
    inputFiledType: "Date",
    icon: "date",
  },
];
