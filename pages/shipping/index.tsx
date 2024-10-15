'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import { JSXElementConstructor, Key, ReactElement, ReactNode, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import CustomModel from "../../components/common/Model/CustomModel";
import ProgressModel from "../../components/common/Model/ProgressModel";
import LargestButton from "../../components/Custom/Button/LargestButton";
import useFirebase from "../../components/hooks/useFirebase";
import CostInformation from "../../components/Order/CostInformation/CostInformation";
import { InputFiledInformation } from "../../components/Order/CustomerInformation/InputFieldFinformation.js";
import { PaymentMethodInfo } from "../../components/Order/Payment/PaymentMethodInfo.ts";
import style from "../../styles/Sass/pages/Shipping.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TOrder } from "../../Type/type";
import { add_new_order } from "../../redux/feature/OrderSlice";
import { clearCart } from "../../redux/feature/CartSlice";
import { FormProps, useForm } from "react-hook-form";

interface Data {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  description: {
    productType: string;
    capacity: string;
    used: string;
    sideEffect: string;
  };
}

type TShippingAddress= {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}
const Shipping = () => {
  const [orderProduct, setCardProducts] = useState<Data[]>([]);
  const [customerData, setOrderInfoData] = useState<TShippingAddress|any>(null);
  const [paymentType, setPaymentType] = useState<any>(null);
  const [model, setModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const { user }: any = useFirebase();
  const [customer, setCustomer] = useState<any>({});
  const route = useRouter();
  const [progress, setProgress] = useState(false);
  const router=useRouter()
  const {register, handleSubmit}=useForm()
const [isPayment, setIsPayment]=useState(false)
const {total,subTotal,products}=useAppSelector(state=>state.cartR)
const dispatch=useAppDispatch()


  const HandlePaymentType = (e: any) => {
    console.log(e.target.value);
    // setPaymentType(e.target.value);
   setPaymentType(e.target.value)
  };
  const HandleFieldValue = (e: any) => {
    const data = { ...customerData, [e.target.name]: e.target.value };
    setOrderInfoData(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(customerData);
  };

  const onSubmit= async(data:any)=>{
  
    const newOrder:TOrder={
      date:new Date().toLocaleDateString(),
      email:user?.email||'',
      order_product:products,
      status:"pending",
      shippingInfo:data,
      price:total,
      paymentInfo:{
          payment_method:paymentType,
          transactionId:''
      }
  }
  dispatch((add_new_order(newOrder)))
  const fetchData = async () => {
    // get the data from the api
    const res = await fetch("https://medstar-backend.onrender.com/new_order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    // convert data to json
    const data = await res.json();
    if (data.insertedId) {
      console.log(data)
      setProgress(false);
     dispatch(clearCart())
     router.push('/dashboard')
      setModel(true);
      setModelData({
        text1: "Your Order Successfully Done",
        text2: "Enjoy our service",
        // image: user?.photoUrl,
        successType: true,
      });

    } else {
      setProgress(true);
    }
  };
  if(paymentType!=='cash_in_delivery'){
    setIsPayment(true)
  }
  else{
    fetchData()
    // make sure to catch any error
    .catch(console.error);
  }
  

    // call the function
   
  };
  // const onSubmit= async(data:any)=>{

  //   const newOrder:TOrder={
  //       date:new Date().toLocaleDateString(),
  //       email:user?.email||'',
  //       order_product:products,
  //       status:"pending",
  //       shippingInfo:data,
  //       price:total,
  //       paymentInfo:{
  //           payment_method:paymentType,
  //           transactionId:''
  //       }
  //   }
  //   console.log(newOrder)
  // }
  return (
    <div>
      <Meta
        title="Customer Information MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />

      <div className={`${style.shipping}`}>
        {model && (
          <CustomModel
            modelData={modelData}
            showModel={model}
            setModel={setModel}
          ></CustomModel>
        )}
        {progress && <ProgressModel />}
        <div className=" md:flex md:justify-between gap-6">
          <aside className="h-screen md:hidden sm:hidden">
            <div className={`${style.costInformationPart} order-sm-2 order-1`}>
              <CostInformation
                showButton={false}
                totalPrice={subTotal}
              ></CostInformation>
            </div>
          </aside>
          <main>
            <div className={`${style.shippingPart} order-sm-1 order-1`}>
              <div className={`${style.shippingHeder}`}>
                <h3>Address Information </h3>
                <p>Please Fill Out Your Information</p>
              </div>

              <div className={`${style.shippingInfo}`}>
                {/* Submit Address Information  */}
                <div className={`${style.customerInfo_container}`}>
                  <div className="form_container">
                    <form  onSubmit={handleSubmit(onSubmit)}>
                      <div className={`${style.form_input_field}`}>
                        {InputFiledInformation.map(
                          (data: any, index: number) => (
                            <div key={index}>
                              <h5>{data.fieldHeader}</h5>
                              <div className={`${style.input_filed}`}>
                                {data.icon === "FaUserAlt" && (
                                  <FaUserAlt
                                    className={`${style.input_icon}`}
                                  />
                                )}
                                {data.icon === "MdAddIcCall" && (
                                  <MdAddIcCall
                                    className={`${style.input_icon}`}
                                  />
                                )}
                                {data.icon === "AiOutlineMail" && (
                                  <AiOutlineMail
                                    className={`${style.input_icon}`}
                                  />
                                )}

                                {(data.inputFiledType === "text" ||
                                  data.inputFiledType === "number" ||
                                  data.inputFiledType === "email") && (
                                    <div className="w-full  text-xl font-medium">
                
                    <input  className="bg-[#E8F0FE] text-gray-500" type={data.inputFiledType}  
                     defaultValue={customer[data?.name]} placeholder={data.fieldHeader}  id={data?.name} {...register(data?.name , { required: true })}/>
                </div>
                                  
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className={`${style.TextAria}`}>
                        <h5>Your Address</h5>
                        <textarea
                          cols={50}
                          rows={7}
                          required
                          {...register("address",  { required: true })}
                        />
                      </div>
                      {/* Payment Method Part */}
            <div>
              <div className={`${style.shippingHeder}`}>
                <h3>Payment Method</h3>
                <p>Please select only one! payment method</p>
              </div>
              <div className={`${style.paymentMethod}`}>
                {/* All Payment Type */}

                <form onSubmit={HandleFormSubmit}>
                  <div className={`${style.AllPaymentType} flex`}>
                    {
                      // <PaymentType HandlePaymentType={HandlePaymentType} paymenttypeInfo={method}></PaymentType>

                      PaymentMethodInfo.map((method:any) => (
                        <div key={method.id} className={`${style.paymentType}`}>
                          <div
                            className={`${style.singleType} flex justify-center items-center`}
                          >
                            <input
                              onChange={HandlePaymentType}
                              type="radio"
                              // disabled={
                              //   method.paymentType === "caseOnDelivery"
                              //     ? false
                              //     : true
                              // }
                              name="payment_type"
                              id={method.paymentType}
                              value={method.paymentType}
                            />
                            <label htmlFor={method.paymentType}>
                              {method.paymentType}
                            </label>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </form>

                <div  className={` ${style.order_Button}`}>

                {
                  (paymentType||customerData)?<span>
                     {
                  <span >
                  {!isPayment&&<button className="cursor:pointer" type="submit"><LargestButton  >Confirm Order</LargestButton></button>
                  }
                  </span>
                }
                  {(paymentType=='stripe'&&isPayment)&& 
                  <Link href={"/order_payment"}>
                    <button className="cursor:pointer" type="submit">
                    <LargestButton >Payment</LargestButton>
                    </button>
                  </Link>
                  }
                  </span>:
                   <p className="text-red-700 text-sm">Fill up Address and Payment Information</p>

                }
                 
                
                 
                </div>
              </div>
            </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            
          </main>

          <aside className="h-screen">
            <div className={`${style.costInformationPart} order-sm-2 order-1`}>
              <CostInformation
                showButton={false}
                totalPrice={subTotal}
              ></CostInformation>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;
