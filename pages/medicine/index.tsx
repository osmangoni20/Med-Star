import Categories from "../../components/common/Categories";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import Product from "../../components/common/Product";
import style from "../../styles/Sass/pages/medicine/medicine.module.scss";

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
const Medicine = ({ data }: any) => {
  return (
    <div>
      <Meta
        title="Medicine MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.medicine} flex`}>
        <aside className="h-screen">
          {/* <h3 className="text-center my-4 text-2xl font-bold ">
            Doctor Category
          </h3> */}
          <Categories data={data.slice(0, 7)} />
        </aside>

        <main className="mt-10">
          <div className="grid grid-cols-4 gap-4">
            {data.map((product: any) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/medicine_product`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Medicine;
