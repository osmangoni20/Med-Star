import variable from "../../../styles/Sass/abstract/_variable.module.scss";
const Button = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <button
      style={{ backgroundColor: variable.secondary }}
      className=" text-white font-[Poppins] border-dashed px-2 border-2 md:py-2 py-1 md:px-6 rounded md:ml-8 hover:bg-indigo-400
      duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
