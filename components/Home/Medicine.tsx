import { useEffect, useState } from "react";
import style from "../../styles/Sass/Components/Home/Medicine.module.scss";
import Product from "../common/Product";
import Button from "../Custom/Button/Button";

interface Data {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  description: {
    productType: string;
    capacity: string;
    used: string;
    sideEffect: string;
  };
}
const Medicine = () => {
  const [medicineProduct, setMedicineProduct] = useState<Data[]>([]);
  useEffect(() => {
    fetch("/api/medicine_product")
      .then((res) => res.json())
      .then((data) => setMedicineProduct(data));
  }, []);
  console.log(medicineProduct);
  return (
    <div className={`${style.medicine}`}>
      <h2 className="text-center">Medicine Corner</h2>

      <div className="mt-10">
        <div className="grid grid-cols-5 gap-4">
          {medicineProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Button>More Product</Button>
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
