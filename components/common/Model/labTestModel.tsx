import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import style from "../../../styles/Sass/common/model/labTestModel.module.scss";
interface Data {
  id: number;
  testName: string;
  link: string;
  price: number;
}

const SingleModel = ({
  setModel,
  showModel,
}: {
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  const [labTestData, setLabTestData] = useState<Data[]>([]);
  useEffect(() => {
    fetch("https://medstar-backend.onrender.com/api/lab_test")
      .then((res) => res.json())
      .then((data) => setLabTestData(data))
      .then((error) => console.log(error));
  }, []);
  console.log(labTestData);

  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.inner_popup}`}>
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <div className={`${style.lab_test}`}>
              {/* <div
                className={`${style.lab_test_header} flex justify-between items-center`}
              ></div> */}
              <table>
                <thead>
                  <th>Test Name</th>
                  <th>Price</th>
                  <th>Test Type</th>
                  {/* <th>Test Confirm</th> */}
                </thead>
                <tbody>
                  {labTestData.map((item: any, index) => (
                    <tr key={item._key} onClick={() => setModel(false)}>
                      <td className={`${style.testName}`}>
                        <Link href={`/lab_test/${item._id}`}>
                          <a>{item.testName}</a>
                        </Link>
                      </td>

                      <td className="text-xl">TK. {item.price}</td>
                      <td className="text-xl">{item.testType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleModel;
