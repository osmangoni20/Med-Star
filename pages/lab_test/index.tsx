import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/pages/labTest/labTest.module.scss";
const LabTest = ({ labTestData }: any) => {
  const [searchName, setSearchName] = useState("");
  const HandleFieldValue = (e: any) => {
    setSearchName(e.target.value);
  };
  const HandleSearchLabTest = () => {
    fetch(
      `https://med-star-bd.herokuapp.com/labTest/?searchValue=${searchName}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((error) => console.log(error));
  };

  return (
    <div>
      <Meta
        title="Lab Test MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.lab_test}`}>
        <div className="flex justify-between items-center">
          <h2>Lab Test</h2>
        </div>
        <div className={`${style.lab_test_info}`}>
          <form onSubmit={HandleSearchLabTest}>
            <div className={`${style.form_input_field}`}>
              <div>
                <h5>Search</h5>

                <div className={`${style.input_filed}`}>
                  <AiOutlineMail className={`${style.input_icon}`} />

                  <input
                    type={"search"}
                    placeholder={"Test Name"}
                    name={"test_name"}
                    onBlur={(e) => HandleFieldValue(e)}
                  />
                </div>

                <button type={"submit"}>
                  <SimpleButton>Search</SimpleButton>
                </button>
              </div>
            </div>
          </form>
          <hr />
          <table className="mt-3">
            <thead>
              <th className={`${style.labTestNumber}`}>Number</th>
              <th>Test Name</th>
              <th>Price</th>
              <th>Test Type</th>
            </thead>
            <tbody>
              {labTestData.map((item: any, index: number) => (
                <tr key={index}>
                  <td className={`${style.labTestNumber}`}>
                    {Number(index + 1)}
                  </td>
                  <td className={`${style.testName}`}>
                    <Link href={`/lab_test/${item.id}`}>
                      <a>{item.testName}</a>
                    </Link>
                  </td>

                  <td className="text-xl">
                    {item.offer === 0 ? (
                      <span>TK. {item.price}</span>
                    ) : (
                      <p>
                        {" "}
                        Tk. {item.price * (item.offer / 100)}{" "}
                        <span className="line-through"> TK. {item.price}</span>{" "}
                      </p>
                    )}
                  </td>
                  <td className="text-xl">{item.testType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch(`https://med-star-bd.herokuapp.com/labTest`);
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { labTestData: data } };
}

export default LabTest;
