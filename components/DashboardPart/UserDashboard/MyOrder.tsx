import Image from "next/image";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";
import ProgressModel from "../../common/Model/ProgressModel";

const MyOrder = ({ order }: any) => {
  console.log(order);
  return (
    <div className={`${style.mainInputField_container}`}>
      {!order.length && <ProgressModel />}
      {order?.map((orderData: any) => (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 my-5 ml-16">
          {orderData?.orderProduct?.map((data: any) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src={data.img} height={200} width={200} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title">{data.name}</h2>
                    <h6 className="text-left text-blue-800">{data.price} Tk</h6>
                  </div>
                  <h6>{data.quantity} Piece</h6>
                </div>

                <div className="card-actions justify-end">
                  <div className="badge badge-outline bg-blue-600 text-white">
                    {orderData.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
