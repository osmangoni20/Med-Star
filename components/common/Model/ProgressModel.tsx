import { useRouter } from "next/router";
import { ImSpinner7 } from "react-icons/im";
import style from "../../../styles/Sass/common/model/customModel.module.scss";
const ProgressModel = () => {
  const route = useRouter();

  return (
    <div className={style.popup_container}>
      <div>
        <ImSpinner7 />
        {/* <Image src={spinner} height={200} width={200} /> */}
      </div>
    </div>
  );
};

export default ProgressModel;
