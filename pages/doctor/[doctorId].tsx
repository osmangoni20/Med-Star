import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/common/model/dynamicModel.module.scss";

const SingleDoctor = ({ data }: { data: any }) => {
  const HandleAppointment = () => {};
  return (
    <div>
      <Header />
      <div className={`${style.singleDoctor} p-5 my-5`}>
        <div className="flex justify-center">
          <div className={`flex justify-between gap-12`}>
            <div>
              <Image src={data.img} width={200} height={200} alt={data.name} />
              <div className={`${style.buttonCard} flex `}>
                <div>
                  <h3>{data.name}</h3>
                  <div className="mt-5 flex items-center gap-5">
                    <Link href={`/doctorAppointment/${data._id}`} passHref>
                      <a>
                        <SimpleButton>Chamber</SimpleButton>
                      </a>
                    </Link>
                    <button disabled>
                      <SimpleButton>Video Call</SimpleButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style.productDetails}`}>
              <h3 className="text-xl pb-3 text-bold">{data.name}</h3>
              <p className="text-sm py-4">{data.designation}</p>
              <p className="text-sm py-4">{data.education}</p>
              <p className="text-sm py-4">{data.jobTitle}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(ctx: { params: { doctorId: any } }) {
  // Fetch data from external API

  const res = await fetch(
    `http://localhost:4000/doctor/${ctx.params.doctorId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default SingleDoctor;
