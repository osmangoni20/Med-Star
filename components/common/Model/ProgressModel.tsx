import style from "../../../styles/Sass/common/model/customModel.module.scss";

const ProgressModel = () => {
  return (
    <div className={style.popup_container}>
      <div>
        <div>
          <progress className="progress bg-blue-500 w-56"></progress>
        </div>
      </div>
    </div>
  );
};

export default ProgressModel;
