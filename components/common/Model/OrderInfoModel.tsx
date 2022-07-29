import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import modelStyle from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import style from "../../../styles/Sass/common/model/orderInfoModel.module.scss";
const OrderInfoModel = ({
  data,
  setOrderModel,
  showModel,
}: {
  data: any;
  showModel: boolean;
  setOrderModel: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(data);
  return (
    <div>
      {showModel && (
        <div className={`${modelStyle.popup_container}`}>
          <div className={`${modelStyle.inner_popup}`}>
            <label
              onClick={() => setOrderModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className={style.orderDetails}>
              <div>
                <h2 className="text-center mb-5">Order Details</h2>
                <div className="grid grid-cols-2 gap-2 ">
                  <div>
                    <h3>Name: {data.name}</h3>
                    <h3>Address: {data.address}</h3>
                  </div>
                  <div>
                    <h3>Mobile: {data.mobile_no}</h3>
                    <h3>Payable Cost: {data.cost}</h3>
                  </div>
                </div>
                <hr />
                <div>
                  <h2 className="mt-5">Product Details</h2>
                  {data.orderProduct.map((pd: any, index: any) => (
                    <div key={index}>
                      <div className="grid grid-cols-2 my-10 gap-7">
                        <div className={style.image}>
                          <Image
                            src={pd.img}
                            height={100}
                            alt={""}
                            width={200}
                          />
                        </div>
                        <div>
                          <h5>Product Name: {pd.name}</h5>
                          <h5>Quantity: {pd.quantity}</h5>
                          <h5>Price: {pd.price}</h5>
                          {pd.capacity && <h5>Capacity: {pd.capacity}</h5>}
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInfoModel;
