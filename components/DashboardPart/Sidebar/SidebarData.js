

export const userSidebarMenu=[
  
  {
    name: "Your Profile",
    link: "/dashboard//user_profile",
    icon: "profile",
  },
    {
      name: "Your Order",
      link: "/dashboard/user_order",
      icon: "order",
    },
    {
      name: "Order With Prescription",
      link: "/dashboard/prescription_order",
      icon: "order",
    },
    { name: "Video Appointment",icon: "doctor",  link: "/dashboard/user_video_appointment"},

    {
      name: "Doctor Appointment",
      link: "/dashboard/userDoctorAppointment",
      icon: "doctor",
    },
    {
      name: "Blood Donate",
      link: "/dashboard/donner_info",
      icon: "blood",
    },
    {
      name: "Notice",
      link: "/dashboard/user_notice",
      icon: "notice",
    },
    {
      name: "Review",
      link: "/dashboard/user_review",
      icon: "review",
    },
]


export const  adminSidebarMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: "dashboard",
  },
  {
    name: "Message",
    link: "/dashboard/user_message",
    icon: "dashboard",
  },
  {
    name: "Order Manage",
    icon: "order",
    subOptions: [
      
      { name: "New Prescription",countNumber:true, link: "/dashboard/order_manage/new_prescription" },
      ,
      { name: "New Order",countNumber:true, link: "/dashboard/order_manage/new_order" },
      { name: "Success Delivery", link: "/dashboard/order_manage/success_delivery" },
    ],
  },
  {
    name: "Patient Manage",
   
    subOptions:[
      { name: "Video Appointment",  link: "/dashboard/patient_manage/video_appointment"},
      { name: "Chamber Appointment",  link: "/dashboard/patient_manage/appointment"},
      { name: "New Medical Test",  link: "//dashboard/patient_manage/newMedicalTest"},
    ],
    icon: "patient",
  },
  {
    name: "Service Manage",
    icon: "product",
    subOptions: [
      { name: "Add Product",  icon: "product", link: "/dashboard/product_manage/add_product" },
      { name: "Product List",  icon: "product", link: "/dashboard/product_manage/medicine" },
      { name: "Add Doctor", icon:"doctor", link: "/dashboard/Doctor's Manage/add_doctor" },
      { name: "Doctor List", icon:"doctor", link: "/dashboard/Doctor's Manage/doctor" },
      { name: "Add Ambulance",icon: "ambulance", link: "/dashboard/Ambulance Service/add_ambulance" },
      { name: "Ambulance List",icon: "ambulance", link: "/dashboard/Ambulance Service/ambulance" },
      { name: "Add New Donner",icon: "blood", link: "/dashboard/Blood Donner/donner_info" },
      { name: "Donner List ", icon: "blood", link: "/dashboard/Blood Donner/donner_list" },
    ],
  },
  
  {
    name: "Site Update",
    icon: "ad",
    subOptions: [
      { name: "Mobile Number", link: "/dashboard/Site Update/mobile_number_update" },
      { name: "Email ", link: "/dashboard/Site Update/email_update" },
      { name: "Carousel AD", link: "/dashboard/Site Update/carousel_ad_update" },
      { name: "Image AD ", link: "/dashboard/Site Update/image_ad_update" },
    ],

  },
  
  

  // {
  //   name: "Bill Manage",
  //   icon: "newspaper-outline",
  //   subOptions: [
  //     { name: "Add New ", link: "/dashboard/add_bill" },
  //     { name: "List View", link: "/dashboard/bill_list" },
  //   ],
  // },
  {
    name: "Notice Board",
    icon: "notice",
    subOptions: [
      { name: "Create Notice ", link: "/dashboard/create_notice" },
      { name: "Notice", link: "/dashboard/notice" },
    ],
  },
  {
    name: "Admin",
    subOptions: false,
    link: "/dashboard/admin",
    icon: "admin",
  },
];

