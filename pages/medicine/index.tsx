import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Categories from "../../components/common/Categories";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import Product from "../../components/common/Product";
import style from "../../styles/Sass/pages/medicine/_medicine.module.scss";


const capitalizeFirstLetter = (
  [first, ...rest]: string,
  locale = navigator.language
) =>
  first === undefined ? "" : first.toLocaleUpperCase(locale) + rest.join("");
const Medicine = () => {
  const route = useRouter();
  const { search, category } = route.query;

  const [medicineProduct, setMedicineProduct] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const res = await fetch(
        `https://medstar-backend.onrender.com/medicine?searchName=${capitalizeFirstLetter(
          `${search}`
        )}&searchCategory=${`${category}`}`
      );
      // convert data to json
      const data = await res.json();
      if (data.length > 0) {
        setMedicineProduct(data);
      }
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [search, category]);
  console.log(medicineProduct);

  const categories = [
    { name: "Personal Care", key: "personal" },
    { name: "Baby & Mom", key: "bab" },
    { name: "Female Hygiene", key: "female_hygiene" },
    { name: "Nutrition and Drinks", key: "Nutrition_and_drinks" },
  ];
  return (
    <div>
      <Meta
        title="Medicine MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.medicine} md:flex`}>
        <aside className="h-screen">
          {/* <h3 className="text-center my-4 text-2xl font-bold ">
            Doctor Category
          </h3> */}
          <Categories data={categories} />
        </aside>

        <main className="mt-10">
          <div className="md:grid md:grid-cols-4 gap-4">
            {medicineProduct.map((product: any) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

// export async function getServerSideProps(ctx: { params: { search: any } }) {
//   // Fetch data from external API
//   // const { search } = ;

//   console.log(ctx);
//   const res = await fetch(`https://medstar-backend.onrender.com/medicine`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default Medicine;
