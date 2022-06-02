import Footer from "../components/common/Footer";
import Header from "../components/common/Header/Header";
import Meta from "../components/common/Meta";
import Ambulance from "../components/Home/Ambulance";
import BannerAndDoctorAdd from "../components/Home/Banner/BannerAndDoctorAdd";
import Doctor from "../components/Home/Doctor";
import Features from "../components/Home/Features";
import Medicine from "../components/Home/Medicine";
import PatientService from "../components/Home/PatiantService";
import Prescription from "../components/Home/Prescription";
// import styles from "../styles/Home.module.scss";
const Home = () => {
  return (
    <div>
      <Meta
        title="Home MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />

      <BannerAndDoctorAdd />
      <PatientService />

      <Features />
      <Prescription />
      <Ambulance />

      <Doctor />
      <Medicine />
      <Footer />
    </div>
  );
};

export default Home;
// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <main>{page}</main>
//     </Layout>
//   );
// };
