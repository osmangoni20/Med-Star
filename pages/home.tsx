import Head from "next/head";
import { ReactElement } from "react";
import Meta from "../Components/common/Meta";
import Ambulance from "../Components/Home/Ambulance";
import BannerAndDoctorAdd from "../Components/Home/Banner/BannerAndDoctorAdd";
import Doctor from "../Components/Home/Doctor";
import Features from "../Components/Home/Features";
import Medicine from "../Components/Home/Medicine";
import PatientService from "../Components/Home/PatiantService";
import Prescription from "../Components/Home/Prescription";
import Layout from "../Components/Layout/Layout";
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
