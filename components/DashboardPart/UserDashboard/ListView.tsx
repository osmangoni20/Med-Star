interface Iprops {
  tableData: any;
  tableHeader: any;
  HandleModel?: any;
  HandleRequestAction?: any;
  HandleDelete?: any;
}
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import tableStyle from "../../../styles/Sass/Components/DashboardPart/tableStyle.module.scss";
import style from "../../../styles/Sass/Components/DashboardPart/_menuBody.module.scss";

const AdminView = ({
  tableData,
  tableHeader,
  HandleModel,
  HandleRequestAction,
  HandleDelete,
}: Iprops) => {
  return tableData?.map((data: any, index: any) => (
    <tr key={index}>
      {tableHeader.map(
        (headerData: { name: string; data_register_name: string }) =>
          !(
            headerData.data_register_name === "select" ||
            headerData.data_register_name === "delete"
          ) ? (
            headerData?.data_register_name === "img" ? (
              <td>
                <Image
                  src={data[headerData.data_register_name]}
                  height={50}
                  width={50}
                  alt={""}
                />
              </td>
            ) : (
              <td onClick={() => HandleModel(data)}>
                {data[headerData.data_register_name]}
              </td>
            )
          ) : headerData.data_register_name === "delete" ? (
            <td>
              <div onClick={() => HandleDelete(data._id)}>
                <RiDeleteBin6Line className={`${tableStyle.delete_icon}`} />
              </div>
            </td>
          ) : (
            <td>
              <form>
                <select
                  onChange={(e) => HandleRequestAction(e, data)}
                  className={`${style.request_action}`}
                >
                  <option value={"pending"}>Pending</option>
                  <option value={"delivered"}>Success</option>
                  <option value={"declined"}>Declined</option>
                </select>
              </form>
            </td>
          )
      )}
    </tr>
  ));
};

export default AdminView;
