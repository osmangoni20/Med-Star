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
      <div
        style={{ marginTop: "172px" }}
        className={`${style.singleDoctor} p-5 my-5`}
      >
        <div className="flex justify-center gap-4">
          <div className={`flex justify-between gap-12 items-center`}>
            <div>
              <Image src={data.img} width={500} height={360} alt={data.name} />
              <div className={`${style.buttonCard} flex `}>
                <div>
                  <h3 className="text-sm font-semibold">{data.name}</h3>
                  <div className="mt-5 flex items-center gap-5">
                    <Link href={`/doctorAppointment/chamber/${data._id}`} passHref>
                      <button>
                        <SimpleButton>Chamber Appointment</SimpleButton>
                      </button>
                    </Link>
                    <Link href={`/doctorAppointment/online/${data._id}`} passHref>
                      <button>
                        <SimpleButton>Online Appointment</SimpleButton>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style.productDetails} space-y-6`}>
              <h3 className="text-3xl pb-3 font-bold">{data.name}</h3>
              <p className="text-md">{data.designation}</p>
              <p className="text-md">{data.education}</p>
              <p className="text-md ">{data.jobTitle}</p>
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
    `https://medstar-backend.onrender.com/doctor/${ctx.params.doctorId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default SingleDoctor;
