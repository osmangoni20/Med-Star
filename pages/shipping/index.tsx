import { useEffect, useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import CostInformation from "../../components/Order/CostInformation/CostInformation";
import InputField from "../../components/Order/CustomerInformation/InputField";
import { InputFiledInformation } from "../../components/Order/CustomerInformation/InputFieldFinformation.js";
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
  useEffect(() => {
    fetch("http://localhost:3000/api/cart_product_list")
      .then((res) => res.json())
      .then((orderProduct) => {
        setCardProducts(orderProduct);
        setOrderInfoData({ orderProduct });
      });
  }, []);

  let TotalPrize = orderProduct.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + currentValue.prize * currentValue.quantity,
    0
  );

  const HandleFieldValue = (e: any) => {
    const data = { ...orderInfoData, [e.target.name]: e.target.value };
    setOrderInfoData(data);
  };
  const HandleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(orderInfoData);
  };
  return (
    <div>
      <Header />
      <div className={`${style.shipping}`}>
        <div className="md:container">
          <div className=" md:flex md:justify-evenly">
            <div className={`${style.shippingPart} order-sm-1 order-1`}>
              <div className={`${style.shippingHeder}`}>
                <h3>Address Information </h3>
                <p>Please Fill Out Your Information</p>
              </div>

              <div className={`${style.shippingInfo}`}>
                {/* Submit Form */}
                <div className={`${style.customerInfo_container}`}>
                  <div className="form_container">
                    <form onSubmit={HandleFormSubmit}>
                      <div className={`${style.form_input_field}`}>
                        {InputFiledInformation.map(
                          (data: any, index: number) => (
                            <InputField
                              HandleFieldValue={HandleFieldValue}
                              key={index}
                              fieldInfo={data}
                            ></InputField>
                          )
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className={`${style.Payment}`}>
                <PaymentMethod
                  setOrderInfoData={setOrderInfoData}
                  OrderInfoData={orderInfoData}
                ></PaymentMethod>
              </div> */}
            </div>

            <div className={`${style.costInformationPart} order-sm-2 order-1`}>
              <CostInformation totalPrice={TotalPrize}></CostInformation>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;
