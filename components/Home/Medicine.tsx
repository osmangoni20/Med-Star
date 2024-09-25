import { useEffect, useState } from "react";
import style from "../../styles/Sass/Components/Home/Medicine.module.scss";
import Product from "../common/Product";
import LargestButton from "../Custom/Button/LargestButton";
interface Data {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  brand:string;
  description:string;
  productType: string;
  capacity: string;
  used: string;
  sideEffect: string;
}
const Medicine = () => {
  const [medicineProduct, setMedicineProduct] = useState<Data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const res = await fetch("https://medstar-backend.onrender.com/medicine");
      // convert data to json
      const data = await res.json();
      setMedicineProduct(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className={`${style.medicine}`}>
      <div className={`${style.title} flex justify-center`}>
        <h2 className="text-center">Medicine Corner</h2>
      </div>

      <div className="mt-10">
        <div className="md:grid md:grid-cols-5 gap-4">
          {medicineProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <LargestButton>More Product</LargestButton>
        </div>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (ctx: any) => {
//   console.log(ctx);
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/` + ctx.params.id
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// };

export default Medicine;
