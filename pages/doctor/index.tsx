import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import SingleDoctor from "../../components/common/SingleDoctor";
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
        <aside className="h-screen p-12 pt-0">
          <h3 className="text-left mt-12  font-bold text-xl">Categories</h3>
          {/* <Categories data={data} /> */}
          <p>Hart Consultant</p>
          <hr></hr>
          <p>Arthoplasty Surgeon</p>
          <hr></hr>
        </aside>
        <main>
          <div className="grid grid-cols-3 md:gap-20 my-10">
            {data.map((doctor: Data) => (
              <SingleDoctor key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://med-star-bd.herokuapp.com/doctor`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default AllDoctor;
