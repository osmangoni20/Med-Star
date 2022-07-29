import parse from "html-react-parser";
import { Dispatch, SetStateAction } from "react";
import style from "../../../styles/Sass/common/model/dynamicModel.module.scss";

const NoticeModel = ({
  data,
  setModel,
  showModel,
}: {
  data: any;
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(data);
  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.notice_inner_popup}`}>
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>{parse(data.description)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeModel;
