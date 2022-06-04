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
      style={{ backgroundColor: variable.secondary }}
      className=" text-white font-[Poppins] rounded-5 px-2 md:py-2 py-1 md:px-28 rounded hover:bg-indigo-400
      duration-500"
    >
      {props.children}
    </button>
  );
};

export default LargestButton;
