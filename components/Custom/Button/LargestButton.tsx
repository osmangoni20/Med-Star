import variable from "../../../styles/Sass/abstract/_variable.module.scss";
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
      style={{ backgroundColor: variable.secondary, height: "40px" }}
      className=" text-white font-[Poppins]  rounded-5 px-2 md:py-2 py-1 md:px-28 rounded 
      duration-500"
    >
      {props.children}
    </button>
  );
};

export default LargestButton;
