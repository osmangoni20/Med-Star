export const DashboardFakeData: any = {
  user_review: {
    inputFieldData: [
      {
        name: "Your Name",
        registerName: "name",
        placeholderName: "Your Name",
        icon: "name",
        inputType: "text",
      },
      {
        name: "Your Email",
        registerName: "email",
        placeholderName: "Your Email",
        icon: "email",
        inputType: "email",
      },
      {
        name: "Your Review",
        registerName: "review",
        placeholderName: "Your Review",
        icon: "education",
        textAria: true,
      },
    ],

    sidebarMenuHeader: "Review",
    menuOptionHeader: { name: "User Review", icon: "review" },
  },

  user_notice: {
    inputFieldData: [
      {
        name: "Date",
        registerName: "searchValue",
        placeholderName: "Notice Date",
        inputType: "date",
        icon: "date",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Notice Title",
        data_register_name: "noticeTitle",
      },
      {
        name: "Date",
        data_register_name: "date",
      },
    ],

    menuOptionHeader: {
      name: "All Notice",
      icon: "notice",
    },
    sidebarMenuHeader: "Notice",
  },
  donner_list: {
    tableHeader: [
      {
        name: "Image",
        data_register_name: "img",
      },
      {
        name: "Donner Name",
        data_register_name: "name",
      },

      {
        name: "Blood Group",
        data_register_name: "bloodGroup",
      },
      {
        name: "Number",
        data_register_name: "contact",
      },
      {
        name: "Last Donation",
        data_register_name: "last_donation",
      },
    ],
    menuOptionHeader: {
      name: "Donner List",
      icon: "notice",
    },
    sidebarMenuHeader: "Donner",
  },

  donner_info: { 
    inputFieldData: [
      {
        name: "Your Name",
        registerName: "name",
        icon: "name",
        placeholderName: "Your First Name",
        inputType: "text",
      },
      {
        name: "Your Image",
        registerName: "img",
        icon: "image",
        placeholderName: "Your Image",
        inputType: "file",
      },
      {
        name: "Blood Group",
        icon: "group",
        registerName: "bloodGroup",
        placeholderName: "Your Blood Group",
        selectOptions: [
          { name: "A+", value: "A+" },
          { name: "A-", value: "A-" },
          { name: "B+", value: "B+" },
          { name: "B-", value: "B-" },
          { name: "O+", value: "O+" },
          { name: "O-", value: "O-" },
          { name: "AB+", value: "AB+" },
          { name: "AB-", value: "AB-" },
        ],
      },
      {
        name: "Group Unique Name",
        icon: "group",
        registerName: "group_value",
        placeholderName: "Your Blood Group",
        selectOptions: [
          { name: "A+", value: "a_positive" },
          { name: "A-", value: "a_negative" },
          { name: "B+", value: "b_positive" },
          { name: "B-", value: "b_negative" },
          { name: "O+", value: "o_positive" },
          { name: "O-", value: "o_negative" },
          { name: "AB+", value: "ab_positive" },
          { name: "AB-", value: "ab_negative" },
        ],
      },

      {
        name: "Your Weight",
        registerName: "weight",
        icon: "date",
        placeholderName: "Your Weight",
        inputType: "number",
      },

      {
        name: "District",
        icon: "group",
        registerName: "district",
        placeholderName: "Your District",
        inputType: "text",
      },
      {
        name: "Upazila",
        icon: "group",
        registerName: "upazila",
        placeholderName: "Your Upazila",
        inputType: "text",
      },
      {
        name: "Number",
        icon: "mobile",
        registerName: "contact",
        placeholderName: "Your Number",
        inputType: "number",
      },
      {
        name: "Last Donation",
        registerName: "last_donation",
        icon: "date",
        placeholderName: "Your Last Donation",
        inputType: "date",
      },
    ],
    tableHeader: [
      {
        name: "Name",
        data_register_name: "name",
      },
      {
        name: "Last Donate",
        data_register_name: "last_donation",
      },
    ],
    tableData: [
      {
        id: 1,

        date: "20-2-2022",
        disease: "hart Patient",
        hospital_name: "Med Star Hospital",
        actionType: "none",
      },
      {
        id: 2,
        date: "20-2-2022",
        disease: "hart Patient",
        hospital_name: "Med Star Hospital",
        actionType: "none",
      },
      {
        id: 3,
        date: "20-2-2022",
        disease: "hart Patient",
        hospital_name: "Med Star Hospital",
        actionType: "none",
      },
    ],

    sidebarMenuHeader: "History",
    menuOptionHeader: { name: "Patient History ", icon: "patient" },
  },
  patientHistory: {
    tableHeader: [
      { name: "Patient Name", data_register_name: "doctor_name" },
      { name: "Date", data_register_name: "date" },
      { name: "Disease", data_register_name: "Disease" },
      { name: "Update", data_register_name: "update" },
      { name: "Action", data_register_name: "delete" },
    ],
    sidebarMenuHeader: "History",
    menuOptionHeader: { name: "Patient History ", icon: "patient" },
  },
  doctorHistory: {
    tableHeader: [
      { name: "Date", data_register_name: "date" },
      { name: "Disease", data_register_name: "Disease" },
      { name: "Update", data_register_name: "update" },
    ],
    sidebarMenuHeader: "History",
    menuOptionHeader: { name: "Patient History ", icon: "patient" },
  },
  user_profile: {
    update: true,
    menuOptionHeader: {
      name: "My Profile",
      icon: "user",
    },
    sidebarMenuHeader: "Profile Update",
  },
  create_notice: {
    menuOptionHeader: {
      name: "Notice",
      icon: "notice",
    },
    sidebarMenuHeader: "Create Notice",
  },
  user_order: {
    sidebarMenuHeader: "My Order",
    menuOptionHeader: { name: "Order List", icon: "order" },
  },

  user_message: {
    inputFieldData: [
      {
        name: "Email",
        registerName: "email",
        placeholderName: "Email",
        inputType: "email",
        icon: "email",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Name",
        data_register_name: "name",
      },

      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Message",
        data_register_name: "message",
      },
    ],
    sidebarMenuHeader: "My Order",
    menuOptionHeader: { name: "Order List", icon: "order" },
  },

  new_order: {
    inputFieldData: [
      {
        name: "Date",
        registerName: "searchValue",
        placeholderName: "Delivery Date",
        inputType: "date",
        icon: "date",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Name",
        data_register_name: "name",
      },
      {
        name: "Total Product",
        data_register_name: "total_product",
      },

      {
        name: "Delivery",
        data_register_name: "payment_type",
      },
      {
        name: "Total Price",
        data_register_name: "price",
      },
      {
        name: "Contact",
        data_register_name: "contact",
      },
      {
        name: "Action",
        data_register_name: "action",
      },
    ],
    tableData: [
      {
        id: 1,
        name: "Mohammad Osman Goni",
        product_name: "New Product 2",
        date: "20-2-2022",
        Delivery: "Sundorbon Curiar",
        price: 200,
        contact: "01878403884",
        actionType: "select",
      },
      {
        id: 2,
        name: "Mohammad Osman Goni",
        product_name: "New Product 2",
        date: "20-2-2022",
        Delivery: "Sundorbon Curiar",
        price: 200,
        contact: "01878403884",
        actionType: "select",
      },
      {
        id: 3,
        name: "Mohammad Osman Goni",
        product_name: "New Product 2",
        date: "20-2-2022",
        Delivery: "Sundorbon Curiar",
        price: 200,
        contact: "01878403884",
        actionType: "select",
      },
    ],

    sidebarMenuHeader: "Order",
    menuOptionHeader: { name: "New Order List", icon: "people-outline" },
  },

  doctor: {
    inputFieldData: [
      {
        name: "Doctor Id",
        registerName: "searchValue",
        placeholderName: "Doctor Id",
        inputType: "text",
        icon: "designation",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Image",
        data_register_name: "img",
      },
      {
        name: "Name",
        data_register_name: "name",
      },
      {
        name: "Number",
        data_register_name: "mobile_no",
      },
      {
        name: "Designation",
        data_register_name: "designation",
      },
      {
        name: "Email",
        data_register_name: "email",
      },
      {
        name: "Action",
        data_register_name: "delete",
      },
    ],

    sidebarMenuHeader: "Doctor's Manage",
    menuOptionHeader: { name: "Doctor List", icon: "people-outline" },
  },

  add_ambulance: {
    inputFieldData: [
      {
        name: "Ambulance Name",
        registerName: "name",
        placeholderName: "Ambulance Name",
        icon: "name",
        inputType: "text",
      },
      {
        name: "Ambulance Image",
        registerName: "img",
        icon: "image",
        placeholderName: "Ambulance Image",
        inputType: "file",
      },
      {
        name: "Location Name",
        registerName: "location_name",
        placeholderName: "Location Name",
        icon: "name",
        inputType: "text",
      },
      {
        name: "Mobile No-1",
        registerName: "contact1",
        placeholderName: "Mobile Number",
        icon: "mobile",
        inputType: "number",
      },
      {
        name: "Mobile No-2",
        registerName: "contact2",
        placeholderName: "Second Mobile Number",
        icon: "mobile",
        inputType: "number",
      },
      {
        name: "Hotline",
        registerName: "hotline_number",
        placeholderName: "Hotline Number",
        icon: "mobile",
        inputType: "number",
      },

      {
        name: "Ambulance Id",
        registerName: "ambulance_id",
        placeholderName: "Ambulance Id",
        icon: "group",
        inputType: "text",
      },
      {
        name: "Location Details",
        registerName: "location_details",
        placeholderName: "Location Details",
        icon: "",
        textAria: true,
      },
    ],

    sidebarMenuHeader: "Ambulance Service",
    menuOptionHeader: { name: "Add Ambulance", icon: "people-outline" },
  },
  ambulance: {
    inputFieldData: [
      {
        name: "Ambulance Id",
        registerName: "searchValue",
        placeholderName: "Ambulance Id",
        inputType: "text",
        icon: "designation",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Name",
        data_register_name: "name",
      },
      {
        name: "Location",
        data_register_name: "location_details",
      },
      {
        name: "Contact 1",
        data_register_name: "contact1",
      },
      {
        name: "Contact 2",
        data_register_name: "contact2",
      },
      {
        name: "Action",
        data_register_name: "delete",
      },
    ],

    sidebarMenuHeader: "Ambulance Service",
    menuOptionHeader: { name: "Ambulance List", icon: "people-outline" },
  },
  add_new_donner: {
    inputFieldData: [
      {
        name: "Donar Name",
        registerName: "blood_donar_name",
        placeholderName: "Donar Name",
        icon: "name",
        inputType: "text",
      },
      {
        name: "Blood Group",
        registerName: "bloodGroup",
        placeholderName: "Amount",
        icon: "blood",
        inputType: "text",
      },
      {
        name: "Image",
        registerName: "img",
        icon: "image",
        placeholderName: "Donar Image",
        inputType: "file",
      },
      {
        name: "Mobile No",
        registerName: "contact",
        placeholderName: "Mobile Number",
        icon: "mobile",
        inputType: "number",
      },
      {
        name: "District",
        registerName: "District",
        placeholderName: "District Name",
        icon: "city",
        inputType: "text",
      },
      {
        name: "Upozela",
        registerName: "blood_donar_name",
        placeholderName: "Donar Name",
        icon: "city",
        inputType: "text",
      },
      {
        name: "Donner Id",
        registerName: "id",
        placeholderName: "Any Unique Id",
        icon: "group",
        inputType: "text",
      },
    ],
    menuOptionHeader: { name: "Blood Donner", icon: "blood" },
    sidebarMenuHeader: "Add Donner",
  },
  blood_donner: {
    tableHeader: [
      {
        name: "Name",
        data_register_name: "name",
      },
      {
        name: "Age",
        data_register_name: "age",
      },
      {
        name: "Blood Group",
        data_register_name: "bloodGroup",
      },
      {
        name: "Address",
        data_register_name: "address",
      },
      {
        name: "Action",
        data_register_name: "",
      },
    ],
    inputFieldData: [
      {
        name: "Blood Group",
        registerName: "searchValue",
        placeholderName: "Blood Group",
        inputType: "text",
        icon: "name",
        search: true,
      },
    ],
    menuOptionHeader: {
      name: "Donation System",
      icon: "people-outline",
    },
    sidebarMenuHeader: "Blood List",
  },

  carousel_ad_update: {
    inputFieldData: [
      {
        name: "First Image",
        registerName: "carouselImg1",
        placeholderName: "First Image",
        inputType: "file",
        icon: "image",
      },
      {
        name: "Second Image",
        registerName: "carouselImg2",
        placeholderName: "Second Image",
        inputType: "file",
        icon: "image",
      },
      {
        name: "Third Image",
        registerName: "carouselImg3",
        placeholderName: "Third Image",
        inputType: "file",
        icon: "image",
      },
      {
        name: "Fourth Image",
        registerName: "carouselImg4",
        placeholderName: "Fourth Image",
        inputType: "file",
        icon: "image",
      },
    ],

    sidebarMenuHeader: "Site Manage",
    menuOptionHeader: {
      name: "Carousel Update",
      icon: "ad",
    },
  },
  image_ad_update: {
    inputFieldData: [
      {
        name: "Ad 1",
        registerName: "adImage1",
        placeholderName: "Ad 1",
        inputType: "file",
        icon: "image",
      },
      {
        name: "Ad 2",
        registerName: "adImage2",
        placeholderName: "Ad 2",
        inputType: "file",
        icon: "image",
      },
      {
        name: "Ad 3",
        registerName: "adImage3",
        placeholderName: "Ad 3",
        inputType: "file",
        icon: "image",
      },
    ],

    sidebarMenuHeader: "Site Manage",
    menuOptionHeader: {
      name: "Ad Update",
      icon: "ad",
    },
  },
  mobile_number_update: {
    inputFieldData: [
      {
        name: "First Mobile Number",
        registerName: "mobile_number1",
        placeholderName: "First Mobile Number",
        inputType: "number",
        icon: "mobile",
      },
      {
        name: "Second Mobile Number",
        registerName: "mobile_number2",
        placeholderName: "Second Mobile Number",
        inputType: "number",
        icon: "mobile",
      },
      {
        name: "Third Mobile Number",
        registerName: "mobile_number3",
        placeholderName: "Third Mobile Number",
        inputType: "number",
        icon: "mobile",
      },
    ],
    sidebarMenuHeader: "Site Manage",
    menuOptionHeader: {
      name: "Mobile Number Update",
      icon: "ad",
    },
  },

  email_update: {
    inputFieldData: [
      {
        name: "Your Email",
        registerName: "email",
        placeholderName: "Write Your Email",
        inputType: "email",
        icon: "email",
      },
    ],

    sidebarMenuHeader: "Site Manage",
    menuOptionHeader: {
      name: "Email Update",
      icon: "email",
    },
  },
  notice: {
    inputFieldData: [
      {
        name: "Date",
        registerName: "searchValue",
        placeholderName: "Notice Date",
        inputType: "date",
        icon: "date",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Title",
        data_register_name: "noticeTitle",
      },
      {
        name: "Date",
        data_register_name: "date",
      },

      {
        name: "Action",
        data_register_name: "delete",
      },
    ],

    menuOptionHeader: {
      name: "All Notice",
      icon: "notice",
    },
    sidebarMenuHeader: "Notice",
  },

  success_delivery: {
    tableHeader: [
      {
        name: "Customer Name",
        data_register_name: "name",
      },
      {
        name: "Product Name",
        data_register_name: "bloodGroup",
      },
      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Delivery",
        data_register_name: "delivery",
      },
      // {
      //   name: "Action",
      //   data_register_name: "",
      // },
    ],
    inputFieldData: [
      {
        name: "Date",
        registerName: "searchValue",
        placeholderName: "Delivery Date",
        inputType: "date",
        icon: "date",
        search: true,
      },
    ],
    tableData: [
      {
        id: 1,
        CustomerId: 1254,
        name: "Mohammad Osman Goni",
        product_name: "Mohammad Osman Goni",
        date: "20-2-2022",
        Delivery: "Sundorbon Curiar",
      },
      {
        id: 2,

        CustomerId: 1254,
        name: "Mohammad Salah",
        product_name: "Mohammad Osman Goni",
        date: "20-2-2022",
        Delivery: "Sundorbon Curiar",
      },
      {
        id: 3,
        CustomerId: 1254,
        name: "Mohammad Salah",
        product_name: "Mohammad Osman Goni",
        date: "20-2-2022",
        Delivery: "Sundorbon Curiar",
      },
    ],

    sidebarMenuHeader: "Product Delivery List",
    menuOptionHeader: { name: "Product Delivery List", icon: "product" },
  },

  add_doctor: {
    inputFieldData: [
      {
        name: "Name",
        registerName: "name",
        icon: "name",
        placeholderName: "Doctor Name",
        inputType: "text",
      },
      {
        name: "Chamber Time",
        icon: "date",
        registerName: "chamberTime",
        placeholderName: "Chamber Time",
        inputType: "text",
      },
      {
        name: "Doctor Fee",
        icon: "money",
        registerName: "fee",
        placeholderName: "Doctor Fee",
        inputType: "number",
      },
      {
        name: "Category",
        icon: "category",
        registerName: "category",
        placeholderName: "Doctor Category",
        inputType: "text",
      },
      {
        name: "Doctor Image",
        registerName: "img",
        icon: "image",
        placeholderName: "Doctor Image",
        inputType: "file",
      },
      {
        name: "Designation",
        icon: "designation",
        registerName: "designation",
        placeholderName: "Designation",
        inputType: "text",
      },
      {
        name: "JobTitle",
        icon: "job",
        registerName: "jobTitle",
        placeholderName: "Doctor JobTitle",
        inputType: "text",
      },
      {
        name: "Doctor Id",
        registerName: "doctor_id",
        placeholderName: "Doctor Id",
        icon: "group",
        inputType: "text",
      },
      {
        name: "education",
        icon: "education",
        registerName: "education",
        placeholderName: "Doctor Education",
        inputType: "text",
      },
      {
        name: "Email",
        registerName: "email",
        icon: "email",
        placeholderName: "Doctor Email",
        inputType: "email",
      },
      {
        name: "Mobile Number",
        registerName: "mobile_no",
        icon: "mobile",
        placeholderName: "Mobile Number",
        inputType: "number",
      },
    ],
    menuOptionHeader: {
      name: "Doctor Managing",
      icon: "doctor",
    },
    sidebarMenuHeader: "Add New Doctor",
  },

  add_product: {
    inputFieldData: [
      {
        name: "Category",
        registerName: "category",
        icon: "group",
        placeholderName: "Category",
        inputType: "text",
      },
      {
        name: "Product Name",
        icon: "name",
        registerName: "name",
        placeholderName: "Product Name",
        inputType: "text",
      },
      {
        name: "Price",
        icon: "money",
        registerName: "price",
        placeholderName: "Product Price",
        inputType: "number",
      },
      {
        name: "Product Image",
        icon: "image",
        registerName: "img",
        placeholderName: "Product",
        inputType: "file",
      },
      {
        name: "Product Type",
        registerName: "productType",
        placeholderName: "Product Type",
        icon: "group",
        inputType: "text",
      },
      {
        name: "Capacity",
        registerName: "capacity",
        placeholderName: "Product Capacity",
        icon: "group",
        inputType: "text",
      },
      {
        name: "Product Usage",
        registerName: "usage",
        placeholderName: "Product Usage",
        icon: "use",
        textAria: true,
      },
      {
        name: "Side Effect",
        registerName: "sideEffect",
        placeholderName: "Side Effect",
        icon: "notice",
        textAria: true,
      },
    ],
    menuOptionHeader: { name: "Product", icon: "product" },
    sidebarMenuHeader: "Add Product",
  },

  medicine: {
    inputFieldData: [
      {
        name: "Product Id",
        registerName: "searchValue",
        placeholderName: "Product Id",
        inputType: "text",
        icon: "group",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Image",
        data_register_name: "img",
      },
      {
        name: "Name",
        data_register_name: "name",
      },
      {
        name: "Category",
        data_register_name: "category",
      },
      {
        name: "Price",
        data_register_name: "price",
      },
      {
        name: "Action",
        data_register_name: "delete",
      },
    ],
    tableData: [
      {
        id: 1,
        img: "",
        name: "Maha Product 1",
        category: "paris",
        price: 300,
        action: true,
      },
      {
        id: 2,
        img: "",
        name: "Maha Product 1",
        category: "perasitamol",
        price: 300,
        action: true,
      },
      {
        id: 3,
        img: "",
        name: "Maha Product 1",
        category: "labonno",
        price: 300,
        action: true,
      },
    ],
    sidebarMenuHeader: "Product",
    menuOptionHeader: { name: "Product List", icon: "product" },
  },
  userDoctorAppointment: {
    tableHeader: [
      { name: "Patient Name", data_register_name: "patientName" },

      {
        name: "Doctor",
        data_register_name: "doctor_name",
      },
      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Status",
        data_register_name: "status",
      },
    ],
    menuOptionHeader: { name: "Doctor Appointment", icon: "patient" },
    sidebarMenuHeader: "My appointment ",
  },
  prescription_order: {
    tableHeader: [
      { name: "Prescription", data_register_name: "img" },

      {
        name: "Stock In Medicine",
        data_register_name: "stock_medicine",
      },
      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Status",
        data_register_name: "status",
      },
    ],
    menuOptionHeader: { name: "Prescription Order", icon: "patient" },
    sidebarMenuHeader: "My Prescription Order ",
  },
  new_prescription: {
    tableHeader: [
      { name: "Customer Name", data_register_name: "customerName" },

      {
        name: "Number",
        data_register_name: "mobile_no",
      },

      {
        name: "Prescription",
        data_register_name: "img",
      },
      {
        name: "Stock Total Medicine",
        data_register_name: "input",
      },
      {
        name: "Action",
        data_register_name: "delete",
      },
    ],
    menuOptionHeader: { name: "Prescription", icon: "prescription" },
    sidebarMenuHeader: "Prescription ",
  },

  user_video_appointment: {
    inputFieldData: [
      {
        name: "Doctor Name",
        registerName: "doctor_name",
        placeholderName: "Doctor Name",
        inputType: "select",
        icon: "name",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Doctor",
        data_register_name: "doctor_name",
      },
      {
        name: "Fee",
        data_register_name: "fee",
      },

      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Status",
        data_register_name: "status",
      },
      {
        name: "Send Meet Link And Time",
        data_register_name: "input",
      },
    ],

    menuOptionHeader: { name: "Patient Manage", icon: "patient" },
    sidebarMenuHeader: "Doctor Video Call Appointment",
  },

  video_appointment: {
    inputFieldData: [
      {
        name: "Doctor Name",
        registerName: "doctor_name",
        placeholderName: "Doctor Name",
        inputType: "select",
        icon: "name",
        search: true,
      },
    ],
    tableHeader: [
      {
        name: "Doctor",
        data_register_name: "doctor_name",
      },
      {
        name: "Fee",
        data_register_name: "fee",
      },

      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Status",
        data_register_name: "status",
      },
      {
        name: "Send Meet Link And Time",
        data_register_name: "input",
      },
    ],

    menuOptionHeader: { name: "Patient Manage", icon: "patient" },
    sidebarMenuHeader: "Doctor Video Call Appointment",
  },
  appointment: {
    inputFieldData: [
      {
        name: "Doctor Name",
        registerName: "doctor_name",
        placeholderName: "Doctor Name",
        inputType: "select",
        icon: "name",
      },
    ],
    tableHeader: [
      { name: "Patient Name", data_register_name: "patientName" },

      {
        name: "Mobile",
        data_register_name: "patient_mobile_no",
      },
      {
        name: "Doctor",
        data_register_name: "doctor_name",
      },
      {
        name: "Fee",
        data_register_name: "fee",
      },
      {
        name: "Time",
        data_register_name: "chamberTime",
      },
      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Status",
        data_register_name: "status",
      },
      {
        name: "Action",
        data_register_name: "select",
      },
    ],

    menuOptionHeader: { name: "Patient Manage", icon: "patient" },
    sidebarMenuHeader: "Doctor Appointment",
  },
  new_appointment: {
    inputFieldData: [
      {
        name: "Patient Name",
        registerName: "patientName",
        placeholderName: "Patient Name",
        inputType: "text",
        icon: "name",
      },
      {
        name: "Patient Age",
        registerName: "patient_age",
        placeholderName: "Patient Age",
        inputType: "number",
        icon: "date",
      },

      {
        name: "Doctor Name",
        registerName: "doctor_name",
        placeholderName: "Doctor Name",
        selectOptions: [
          { name: "Dr. Aftabul Karrim", value: "Dr. Aftabul Karrim" },
          { name: "Dr. Tark Karrim", value: "Dr. Tark Karrim" },
          { name: "Dr. Tark Karrim", value: "Dr. Tark Karrim" },
          { name: "Dr. Tark Karrim", value: "Dr. Tark Karrim" },
          { name: "Dr. Tark Karrim", value: "Dr. Tark Karrim" },
        ],
        icon: "name",
      },

      {
        name: "Mobile Number",
        registerName: "patient_mobile_no",
        placeholderName: "Mobile Number",
        inputType: "number",
        icon: "mobile",
      },

      {
        name: "Email",
        registerName: "email",
        placeholderName: "Email",
        inputType: "email",
        icon: "email",
      },

      {
        name: "Patient Disease",
        registerName: "patientDisease",
        placeholderName: "Patient Disease",
        textAria: true,
        icon: "",
        inputType: "",
      },
    ],

    menuOptionHeader: { name: "Patient Manage", icon: "patient" },
    sidebarMenuHeader: "New appointment Add",
  },
  newMedicalTest: {
    tableHeader: [
      { name: "Patient Name", data_register_name: "patientName" },

      {
        name: "Mobile",
        data_register_name: "patient_mobile_no",
      },
      {
        name: "Test Name",
        data_register_name: "testName",
      },
      {
        name: "Date",
        data_register_name: "date",
      },
      {
        name: "Status",
        data_register_name: "status",
      },
      {
        name: "Action",
        data_register_name: "select",
      },
    ],

    menuOptionHeader: { name: "Patient Manage", icon: "patient" },
    sidebarMenuHeader: "New Medical Test",
  },
  admin: {
    inputFieldData: [
      {
        name: "Admin Name",
        registerName: "name",
        placeholderName: "Admin Name",
        inputType: "text",

        icon: "name",
      },
      {
        name: "Mobile Number",
        registerName: "mobileNumber",
        placeholderName: "Mobile Number",
        inputType: "number",
        icon: "mobile",
      },

      {
        name: "Email",
        registerName: "email",
        placeholderName: "Email",
        inputType: "email",
        icon: "email",
      },
    ],
    tableHeader: [
      { name: " Name", data_register_name: "name" },

      {
        name: "Mobile",
        data_register_name: "mobileNumber",
      },

      {
        name: "Email",
        data_register_name: "email",
      },
      {
        name: "Action",
        data_register_name: "delete",
      },
    ],

    menuOptionHeader: {
      name: "Add Admin & Admin List",
      icon: "people-outline",
    },
    sidebarMenuHeader: "Admin",
  },
};
