import { CSSProperties, useState } from "react";
import { DotLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Spinner = ({ loading, setLoading }: any) => {
  //   let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0571a5");

  return (
    <div style={{ width: "100%" }} className="flex justify-center items-center">
      <div className="sweet-loading">
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

        <DotLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
        />
      </div>
    </div>
  );
};

export default Spinner;
