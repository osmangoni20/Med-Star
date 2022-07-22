

export const userSidebarMenu=[
  
  {
    name: "Your Profile",
    link: "/dashboard/profile",
    icon: "profile",
  },
    {
      name: "Your Order",
      link: "/dashboard/my_order",
      icon: "order",
    },
    {
      name: "Doctor History",
      link: "/dashboard/doctorHistory",
      icon: "history",
    },
    {
      name: "Blood Donate",
      link: "/dashboard/donationHistory",
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
    link: "/message",
    icon: "dashboard",
  },
  {
    name: "Order Manage",
    icon: "order",
    subOptions: [
      { name: "New Order",countNumber:true, link: "/dashboard/order_manage/new_order" },
      { name: "Success Delivery", link: "/dashboard/order_manage/success_delivery" },
    ],
  },
  {
    name: "Patient Manage",
   
    subOptions:[
      { name: "Patient",  link: "/dashboard/patient_manage"},
      { name: "Patient History", link: "/dashboard/patient/doctorHistory" },
    ],
    icon: "patient",
  },
  {
    name: "Product Manage",
    icon: "product",
    subOptions: [
      { name: "Add Product", link: "/dashboard/product_manage/add_new_product" },
      { name: "Product List", link: "/dashboard/product_manage/product_list" },
    ],
  },
  {
    name: "Doctor's Manage",

    subOptions: [
      { name: "Add Doctor", link: "/dashboard/Doctor's Manage/add_doctor" },
      { name: "Doctor List", link: "/dashboard/Doctor's Manage/doctor_list" },
    ],
    icon: "doctor",
  },
  {
    name: "Ambulance Service",
    icon: "ambulance",
    subOptions: [
      { name: "Add Ambulance", link: "/dashboard/Ambulance Service/add_ambulance" },
      { name: "Ambulance List", link: "/dashboard/Ambulance Service/ambulance_list" },
    ],
  },
  {
    name: "Blood Donner",
    icon: "blood",
    subOptions: [
      { name: "Add New ", link: "/dashboard/Blood Donner/add_new_donner" },
      { name: "Donner List ", link: "/dashboard/Blood Donner/blood_donner_list" },
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

