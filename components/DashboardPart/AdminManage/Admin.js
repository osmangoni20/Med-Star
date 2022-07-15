import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const Admin = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Admin Name",
            registerName:"adminName",
            placeholderName:"Admin Name",
            inputType:"text",
            icon:""
        },
        {
            name:"Mobile Number",
            registerName:"mobileNumber",
            placeholderName:"Mobile Number",
            inputType:"number"
            ,
            icon:""
        },
        
        {
            name:"Email",
            registerName:"email",
            placeholderName:"Email",
            inputType:"email",
            icon:""
        }
    ]
    header.tableHeader=[
        "Name","Mobile","Email","Action"
    ]
    AllData.TableData=[
        {
            name:"Kader Sah",
            mobile:"0152455487",
            email:"kader@gmail.com"
        },
        {
            name:"Nahel Khan",
            mobile:"0152455487",
            email:"nahel@gmail.com"
        },
        {
            name:"Tabrij Shamsi",
            mobile:"019658487",
            email:"tabrij@gmail.com"
        },
    ]
    header.menuOptionHeader=
    {name:"Add Admin & Admin List",
        icon:"people-outline"};
    header.sidebarMenuHeader="Admin";
    return (
        <div>
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default Admin;