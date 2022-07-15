import Categories from "../../components/common/Categories";
import Doctor from "../../components/common/Doctor";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import style from "../../styles/Sass/pages/doctor/doctor.module.scss";

type Data = {
  id: number;
  img: any;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
};
const AllDoctor = ({ data }: { data: any }) => {
  return (
    <div>
      <Meta
        title="Doctor MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.doctor} flex gap-6`}>
        <aside className="h-screen">
          <h3 className="text-center my-4 text-2xl font-bold ">
            Doctor Category
          </h3>
          <Categories data={data} />
        </aside>
        <main>
          <div className="grid grid-cols-3 md:gap-20 my-10">
            {data.map((doctor: Data) => (
              <Doctor key={doctor.id} doctor={doctor} />
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
  const res = await fetch(`http://localhost:3000/api/doctor`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default AllDoctor;
