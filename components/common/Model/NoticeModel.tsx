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
            <div className="flex mt-5 justify-between items-center">
              <h2>{data.noticeTitle}</h2>
              <h5>{data.date}</h5>
            </div>
            <hr />
            {/* <div>{parse(data.description)}</div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeModel;
