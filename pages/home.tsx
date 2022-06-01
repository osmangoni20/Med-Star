import Head from "next/head";
import { ReactElement } from "react";
import Meta from "../components/common/Meta";
import Ambulance from "../components/Home/Ambulance";
import BannerAndDoctorAdd from "../components/Home/Banner/BannerAndDoctorAdd";
import Doctor from "../components/Home/Doctor";
import Features from "../components/Home/Features";
import Medicine from "../components/Home/Medicine";
import PatientService from "../components/Home/PatiantService";
import Prescription from "../components/Home/Prescription";
import Layout from "../components/Layout/Layout";
const Home = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <Meta
          title="Home MedStart"
          name="viewport"
          description="initial-scale=1.0, width=device-width"
        />
      </Head>
      <BannerAndDoctorAdd />
      <PatientService />
      <Features />
      <Prescription />
      <Ambulance />
      <Doctor />
      <Medicine />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
