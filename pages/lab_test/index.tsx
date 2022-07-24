import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import style from "../../styles/Sass/pages/labTest/labTest.module.scss";
const LabTest = ({ labTestData }: any) => {
  const [searchName, setSearchName] = useState("");
  const HandleFieldValue = (e: any) => {
    setSearchName(e.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:4000/labTest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(labTestData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
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
          <form>
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
              </div>
            </div>
          </form>
          <table>
            <thead>
              <th className={`${style.labTestNumber}`}>Number</th>
              <th>Test Name</th>
              <th>Price</th>
              <th>Test Type</th>
            </thead>
            <tbody>
              {labTestData.map((item: any) => (
                <tr>
                  <td className={`${style.labTestNumber}`}>{item.id}</td>
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
  // http://localhost:4000/labTest
  const res = await fetch(`http://localhost:3000/api/lab_test`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { labTestData: data } };
}

export default LabTest;
