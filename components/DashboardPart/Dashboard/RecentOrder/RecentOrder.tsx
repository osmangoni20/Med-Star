import { useEffect, useState } from "react";
import { DashboardFakeData } from "../../../../Database/DashboardFakeData";
import style from "../../../../styles/Sass/Components/DashboardPart/Dashboard/_recentOrders.module.scss";
import DashboardInfoModel from "../../../common/Model/DashboardInfoModel";
const RecentOrder = ({ orderData }: any) => {
  const [model, setModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>({});
  const [tableData, setTableData] = useState<any>([]);
  const AllData = DashboardFakeData["new_order"];
  useEffect(() => {
    setTableData(AllData.tableData);
  }, [AllData.tableData]);

  const HandleModel = (data: any) => {
    setModel(true);
    setModelData(data);
  };
  return (
    <div className={style.recentOrder}>
      <h3>Recent Orders</h3>

      {model && (
        <DashboardInfoModel
          showModel={model}
          data={modelData}
          setModel={setModel}
        ></DashboardInfoModel>
      )}
      <div className={`${style.recentOrderBody}`}>
        <table className={`${style.table}`}>
          <caption></caption>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Total Product</th>
              <th>Delivery</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.map((orderInfo: any, index: any) => (
              <tr
                style={index === tableData.length - 1 ? { border: "none" } : {}}
                key={index}
                onClick={() => HandleModel(orderInfo)}
              >
                <td>{orderInfo.name}</td>
                <td>{orderInfo.orderProduct.length}</td>
                <td>{orderInfo.paymentType}</td>
                <td>{orderInfo.cost}</td>
                <td
                  style={
                    orderInfo.status === "Pending"
                      ? { color: "blue" }
                      : { color: "green" }
                  }
                >
                  {orderInfo.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
