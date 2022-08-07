import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";

const OrderView = ({
  HandleRequestAction,
  tableData,
  HandleOrderModel,
}: any) => {
  console.log("admin view:", tableData);
  return tableData?.map((orderInfo: any, index: any) => (
    <tr
      style={index === tableData?.length - 1 ? { border: "none" } : {}}
      key={index}
    >
      <td onClick={() => HandleOrderModel(orderInfo)}>{orderInfo.name}</td>
      <td>{orderInfo.orderProduct?.length}</td>
      <td>{orderInfo.paymentType}</td>
      <td>{orderInfo.cost}</td>
      <td>{orderInfo.mobile_no}</td>
      <td>
        <form>
          <select
            onChange={(e) => HandleRequestAction(e, orderInfo)}
            className={`${style.request_action}`}
          >
            <option value={orderInfo.status}>{orderInfo.status}</option>
            <option value={"pending"}>Pending</option>
            <option value={"delivered"}>Delivered</option>
            <option value={"declined"}>Declined</option>
          </select>
        </form>
      </td>
    </tr>
  ));
};

export default OrderView;
