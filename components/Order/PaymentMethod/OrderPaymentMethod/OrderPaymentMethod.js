import Image from 'next/image';
import { useState } from 'react';
import style from '../../../../styles/Sass/Components/Order/PaymentMethod.module.scss';
const PaymentMethodInfo = [
    {
        id: "1",
        image: "https://i.ibb.co/MVRD5By/index-removebg-preview.png",
        paymentTypeLink: "#caseOnDelevery",
        paymentType: "caseOnDalibary",
    },
    {
        id: 2,
        image: "https://i.ibb.co/hLXkkdj/stripe-removebg-preview.png",
        paymentTypeLink: "/strip-visaCard",
        paymentType: "stripe"
    },
    // {
    //     id: 3,
    //     image: "https://i.ibb.co/gg2NNRL/nogod-removebg-preview.png",
    //     paymentTypeLink: "#bikas",
    //     paymentType: "bkash"
    //     // https://i.ibb.co/Mg1bFGp/bkash-train-ticket-796x445-removebg-preview-removebg-preview.png
    // },
    // {
    //     id: 4,
    //     image: "https://i.ibb.co/gg2NNRL/nogod-removebg-preview.png",
    //     paymentTypeLink: "#nogod",
    //     paymentType: "nogod"
    // },
    // {
    //     id: 5,
    //     image: "https://i.ibb.co/GQxKRcy/roket-removebg-preview-removebg-preview-removebg-preview.png",
    //     paymentTypeLink: "#roket",
    //     paymentType: 'roket'
    // }
]
const PaymentMethod = ({ OrderInfoData, setOrderInfoData }) => {
    console.log(OrderInfoData);
    
    const [paymentType, setPaymentType] = useState("");
    const HandlePaymentType = (value) => {
        setPaymentType(value);
        const PaymentInfoAndStatus = { ...OrderInfoData, PaymentType: value,status:"Pending" }
        setOrderInfoData(PaymentInfoAndStatus)
    }
    //Confirm Order Handle
   
    const HandleConfirmOrder = () => {
    
        alert("order success")
        // fetch("https://nameless-wildwood-35129.herokuapp.com/addOrder", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(OrderInfoData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         alert("Order Successfully")

        //         fetch("https://nameless-wildwood-35129.herokuapp.com/deleteCardProducts")
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data) {
        //                 localStorage.setItem("CountCartProduct", 0);
        //                 Router.push('/')
        //                 window.location.reload();
        //             }
        //         })
        //     })

       
    }
    return (
        <div className="">
            <div className={`${style.PaymentMethod} md:container`}>
                {/* Payment Type  Heder */}
                <div className={`${style.payment_header}`}>
                    <h3>Payment Method</h3>
                    <p>Please select only one! payment method</p>
                </div>

                {/* All Payment Type */}
                <div className= {`${style.AllpaymentType} flex`}>
                    {
                        // <PaymentType HandlePaymentType={HandlePaymentType} paymenttypeInfo={method}></PaymentType>
                        PaymentMethodInfo.map(method,index => 
                        {
                            <div key={index} className={`${style.paymentMethod}`}>
                            <a href={method.paymentTypeLink}>
                              <div className={`$${style.PaymentType}  flex justify-between align-center`} >
                                <input onClick={HandlePaymentType} type="radio" id={method.id} name="DelevaryType" value={method.paymentType} />
                                <label htmlFor={method.id} >
                                  <Image src={method.image} alt="" />
                                </label>
                      
                              </div>
                            </a>
                          </div>
                        }
                    )
                    }
                </div>
                {/* Confirm Order Button */}
                <div className=" flex justify-center">
                    {
                        paymentType ? <button type="submit" onClick={HandleConfirmOrder} className="">Confirm Order</button> :
                            <div>
                                <p className="text-danger text-center">Please Select Any Payment Method</p>
                                <button disabled type="submit" className="">Confirm Order</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;