import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
import { PaymentMethodInfo } from "../../components/Order/CustomerInformation/PaymentMethodInfo.js";
import style from "../../styles/Sass/pages/Shipping.module.scss";

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

interface Customer {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}
const Shipping = () => {
  const [orderProduct, setCardProducts] = useState<Data[]>([]);
  const [customerData, setOrderInfoData] = useState<any>([]);
  const [paymentType, setPaymentType] = useState("");
  const [model, setModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const { user }: any = useFirebase();
  const [customer, setCustomer] = useState<any>({});
  const route = useRouter();
  const [progress, setProgress] = useState(false);
  let SubTotal = orderProduct.reduce(
    (accumulator: any, currentValue: any) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  let ShippingCost;
  let Vat;
  if (SubTotal > 2000) {
    Vat = SubTotal * 0.1;
  } else if (SubTotal > 1000) {
    Vat = SubTotal * 0.2;
  } else {
    Vat = 0;
  }
  if (SubTotal > 10000) {
    ShippingCost = 0;
  } else {
    ShippingCost = 40;
  }
  const TotalCost = SubTotal + ShippingCost + Vat;
  console.log(TotalCost, SubTotal, orderProduct);
  useEffect(() => {
    if (orderProduct.length) {
      setProgress(false);
    } else if (orderProduct.length === 0) {
      setProgress(true);
      setTimeout(function () {
        setProgress(false);
      }, 4000);
    }

    const fetchData = async () => {
      // get the data from the api
      const res = await fetch(
        "https://medstar-backend.onrender.com/my-cart/" + user.email
      );
      const userRes = await fetch(
        `https://medstar-backend.onrender.com/users/${user.email}`
      );
      // convert data to json/
      const data = await res.json();
      const userData = await userRes.json();
      setCardProducts(data);

      setCustomer(userData);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [user]);
  console.log(customer);
  const HandlePaymentType = (e: any) => {
    console.log(e.target.value);
    // setPaymentType(e.target.value);
    const PaymentInfoAndStatus = {
      ...customerData,
      paymentType: e.target.value,
    };
    setOrderInfoData(PaymentInfoAndStatus);
  };
  const HandleFieldValue = (e: any) => {
    const data = { ...customerData, [e.target.name]: e.target.value };
    setOrderInfoData(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(customerData);
  };

  const HandleConfirmOrder = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const confirmOrderData = {
      orderProduct,
      email: customerData.email || customer.email,
      name:
        customerData.firstName || customer.firstName + " " + customer.lastName,
      mobile_no: customerData.mobile_no || customer.mobile_no,
      status: "Pending",
      cost: TotalCost,
      date: new Date(),
      address: customerData.address || customer.address,
      paymentType: customerData.paymentType,
    };
    const fetchData = async () => {
      // get the data from the api
      const res = await fetch("https://medstar-backend.onrender.com/new_order", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(confirmOrderData),
      });
      // convert data to json
      const data = await res.json();
      if (data.insertedId) {
        setProgress(false);
        localStorage.setItem("CountCartProduct", "0");
        setModel(true);
        setModelData({
          text1: "Your Order Successfully Done",
          text2: "Enjoy our service",
          // image: user?.photoUrl,
          successType: true,
        });

        fetch(
          `https://medstar-backend.onrender.com/my-cart/delete/${customer.email}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("Remove Item");
              route.push("/");
            }
          });
      } else {
        setProgress(true);
      }
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  };
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
                totalPrice={SubTotal}
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
                    <form>
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
                                  <input
                                    type={data.inputFiledType}
                                    placeholder={data.fieldHeader}
                                    name={data.name}
                                    defaultValue={customer[data.name]}
                                    onBlur={(e) => HandleFieldValue(e)}
                                  />
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className={`${style.TextAria}`}>
                        <h5>Your Address</h5>
                        <textarea
                          name={"address"}
                          cols={50}
                          rows={7}
                          onBlur={(e) => HandleFieldValue(e)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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

                      PaymentMethodInfo.map((method) => (
                        <div key={method.id} className={`${style.paymentType}`}>
                          <div
                            className={`${style.singleType} flex justify-center items-center`}
                          >
                            <input
                              onChange={HandlePaymentType}
                              type="radio"
                              disabled={
                                method.paymentType === "caseOnDelivery"
                                  ? false
                                  : true
                              }
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

                <div className={`${style.order_Button}`}>
                  <Link href="/">
                    <a onClick={HandleConfirmOrder}>
                      <LargestButton>Confirm Order</LargestButton>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>

          <aside className="h-screen">
            <div className={`${style.costInformationPart} order-sm-2 order-1`}>
              <CostInformation
                showButton={false}
                totalPrice={SubTotal}
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
