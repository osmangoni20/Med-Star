import variable from "../../../styles/Sass/abstract/_variable.module.scss";
import style from "../../../styles/Sass/common/custom/button.module.scss";

const LargestButton = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | string
    | null
    | undefined;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      style={{ backgroundColor: variable.secondary }}
      className={`${style.largestButton} text-white font-[Poppins] border-dashed px-2 border-2 md:py-2 py-1 md:px-6 rounded md:ml-8 hover:bg-indigo-400
      duration-500`}
    >
      {props.children}
    </button>
  );
};

export default LargestButton;
