

export const userSidebarMenu=[
  
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "grid-outline",
    },
    {
      name: "Meal Manage",
      icon: "fast-food-outline",
      subOptions: [
        { name: "Add New Meal", link: "/dashboard/add_new_meal" },
        { name: "Meal List", link: "/dashboard/meal_list" },
      ],
    },
    {
      name: "Payment",
      icon: "logo-paypal",
      subOptions: [
        { name: "Pay", link: "/dashboard/add_payment" },
        { name: "Payment Details", link: "/dashboard/payment_details" },
      ],
    },
    {
      name: "Notice",
      link: "/dashboard/notice",
      icon: "notifications-outline",
    },
]


export const  adminSidebarMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: "grid-outline",
  },
  {
    name: "Meal Manage",
    icon: "fast-food-outline",
    subOptions: [
      { name: "Add New Meal", link: "/dashboard/add_new_meal" },
      { name: "Add Guest Meal", link: "/dashboard/add_guest_meal" },
      { name: "Meal List", link: "/dashboard/meal_list" },
    ],
  },
  {
    name: "Students Manage",

    subOptions: [
      {
        name: "New Request",
        countNumber:true,
        link: "/dashboard/request_new_admission",
      },
      {
        name: "Student List",
        link: "/dashboard/student_list",
      },
      {
        name: "Seat Allocation",
        link: "/dashboard/seat_allocation",
      },
      {
        name: "Deposit",
        link: "/dashboard/student_deposit",
      },
    ],
    icon: "people-outline",
  },
  {
    name: "Room Manage",
    icon: "bed-outline",
    subOptions: [
      { name: "Room", link: "/dashboard/room" },
    ],
  },
  {
    name: "Cost Manage",
    icon: "calculator-outline",
    subOptions: [
      { name: "Add New ", link: "/dashboard/add_new_cost" },
      { name: "List View", link: "/dashboard/cost_list" },
    ],
  },
  
  

  {
    name: "Students Payment",
    icon: "logo-paypal",
    subOptions: [
      { name: "Add ", link: "/dashboard/add_payment" },
      { name: "View", link: "/dashboard/payment_list" },
    ],
  },
  {
    name: "Employee Manage",
    link: "/dashboard/employee_manage",
    icon: "people-circle-outline",
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
    icon: "notifications-outline",
    subOptions: [
      { name: "Create Notice ", link: "/dashboard/create_notice" },
      { name: "Notice", link: "/dashboard/notice" },
    ],
  },
  {
    name: "Admin",
    subOptions: false,
    link: "/dashboard/admin",
    icon: "person-add-outline",
  },
];

