import { useEffect, useState } from "react";
import { DashboardFakeData } from "../../../../Database/DashboardFakeData";
import style from "../../../../styles/Sass/Components/DashboardPart/Dashboard/_recentOrders.module.scss";
import DashboardInfoModel from "../../../common/Model/DashboardInfoModel";
const RecentOrder = () => {
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
          <thead>
            <th>Name</th>
            <th>Product Name</th>
            <th>Delivery</th>
            <th>Price</th>
            <th>Status</th>
          </thead>
          {/* <br/> */}
          <tbody>
            {tableData?.map((data: any, index: any) => (
              <tr
                style={index === tableData.length - 1 ? { border: "none" } : {}}
                key={index}
                onClick={() => HandleModel(data)}
              >
                <td>{data.name}</td>
                <td>{data.product_name}</td>
                <td>{data.delivery}</td>
                <td>{data.price}</td>
                <td
                  style={
                    data.status === "Pending"
                      ? { color: "blue" }
                      : { color: "green" }
                  }
                >
                  {data.status || "Pending"}
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
