import Link from "next/link";
import { useEffect, useState } from "react";
import { FiType } from "react-icons/fi";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import SimpleButton from "../../components/Custom/Button/SimpleButton";
import style from "../../styles/Sass/pages/labTest/_labTest.module.scss";


const LabTest = ({ labTestData }: any) => {
  const [searchName, setSearchName] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [uniqueCategory, setUniqueData] = useState<any>([]);
  const HandleFieldValue = (e: any) => {
    setSearchName(e.target.value);
  };
  const getUniqueData = (array: any[]) => {
    let uniqueArray = [];

    // Loop through array values
    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i].testType) === -1) {
        uniqueArray.push(array[i].testType);
      }
    }
    return uniqueArray;
  };

  useEffect(() => {
    console.log(getUniqueData(labTestData));
    setUniqueData(getUniqueData(labTestData));
  }, [labTestData]);
  const HandleSearchLabTest = () => {
    fetch(
      `https://medstar-backend.onrender.com/labTest/?searchValue=${searchName}`
    )
      .then((res) => res.json())
      .then((data) => setSearchList(data))
      .then((error) => console.log(error));
  };

  console.log(searchList);
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
                <h5>Search Test </h5>

                <div className={`${style.input_filed}`}>
                  <FiType className={`${style.input_icon}`} />

                  <select
                    placeholder={"Doctor Name "}
                    name={"name"}
                    onBlur={(e) => HandleFieldValue(e)}
                  >
                    {uniqueCategory.map((test: any, index: any) => (
                      <option key={index} value={test}>
                        {test}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
          <span onClick={HandleSearchLabTest} className="px-2">
            <SimpleButton>Search</SimpleButton>
          </span>
          <hr className="my-5" />
          <table className="mt-3">
            <thead>
              <tr>
                <th className={`${style.labTestNumber}`}>Number</th>
                <th>Test Name</th>
                <th>Price</th>
                <th>Test Type</th>
              </tr>
            </thead>
            <tbody>
              {(searchList.length ? searchList : labTestData).map(
                (item: any, index: number) => (
                  <tr key={index}>
                    <td className={`${style.labTestNumber}`}>
                      {Number(index + 1)}
                    </td>
                    <td className={`${style.testName}`}>
                      <Link href={`/lab_test/${item._id}`}>
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
                          <span className="line-through">
                            {" "}
                             {item.price}
                          </span>{" "}
                        </p>
                      )}
                    </td>
                    <td className="text-xl">{item.testType}</td>
                  </tr>
                )
              )}
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

  const res = await fetch(`https://medstar-backend.onrender.com/labTest`);
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { labTestData: data } };
}

export default LabTest;
