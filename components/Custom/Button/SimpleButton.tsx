import variable from "../../../styles/Sass/abstract/_variable.module.scss";
import style from "../../../styles/Sass/common/custom/button.module.scss";

const SimpleButton = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      style={{
        border: `2px solid ${variable.lightColor}`,
        backgroundColor: variable.primaryColor,
      }}
      className={`${style.simpleButton}  text-white font-[Poppins]  px-2 border-2 md:py-2 py-1 md:px-6 rounded-xl  hover:bg-indigo-400
      duration-500`}
    >
      {props.children}
    </button>
  );
};

export default SimpleButton;
