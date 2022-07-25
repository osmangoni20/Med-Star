import variable from "../../../styles/Sass/abstract/_variable.module.scss";
import style from "../../../styles/Sass/common/custom/button.module.scss";
const Button = (props: {
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
      className={`${style.button}  border-dashed rounded  hover:bg-indigo-400
      duration-500`}
    >
      {props.children}
    </button>
  );
};

export default Button;
