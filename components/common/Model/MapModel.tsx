import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import style from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import Map from "/assets/image/map.png";
const MapModel = ({
  setModel,
  showModel,
}: {
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.map_inner_popup}`}>
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex mt-5 justify-center">
              <Image src={Map} height={500} width={500} alt={""} />
            </div>
            <hr />
            {/* <div>{parse(data.description)}</div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapModel;
