import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import LargestButton from "../../components/Custom/Button/LargestButton";
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

const Shipping = () => {
  const [orderProduct, setCardProducts] = useState<Data[]>([]);
  const [orderInfoData, setOrderInfoData] = useState<any>([]);
  const [paymentType, setPaymentType] = useState("");

  let TotalPrice = orderProduct.reduce(
    (accumulator: any, currentValue: any) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  useEffect(() => {
    fetch("http://localhost:3000/api/cart_product_list")
      .then((res) => res.json())
      .then((data) => {
        setCardProducts(data), console.log("new again");
      });
  }, []);

  const HandlePaymentType = (value: any) => {
    setPaymentType(value);
    const PaymentInfoAndStatus = {
      ...orderInfoData,
      paymentType: value,
      status: "Pending",
    };
    setOrderInfoData(PaymentInfoAndStatus);
  };
  const HandleFieldValue = (e: any) => {
    const data = { ...orderInfoData, [e.target.name]: e.target.value };
    setOrderInfoData(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(orderInfoData);
  };

  const HandleConfirmOrder = () => {
    alert("Your Order Successfully done");
    console.log(orderInfoData);
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
        <div className=" md:flex md:justify-between gap-6">
          <aside className="h-screen md:hidden sm:hidden">
            <div className={`${style.costInformationPart} order-sm-2 order-1`}>
              <CostInformation
                showButton={false}
                totalPrice={TotalPrice}
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
                            <div>
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
                  <a href="/" onClick={HandleConfirmOrder}>
                    <LargestButton>Confirm Order</LargestButton>
                  </a>
                </div>
              </div>
            </div>
          </main>

          <aside className="h-screen">
            <div className={`${style.costInformationPart} order-sm-2 order-1`}>
              <CostInformation
                showButton={false}
                totalPrice={TotalPrice}
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
