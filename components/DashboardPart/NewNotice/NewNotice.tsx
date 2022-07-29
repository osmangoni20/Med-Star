import { SetStateAction, useEffect, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import style from "../../../styles/Sass/Components/DashboardPart/NewNotice.module.scss";
import { newNotice } from "../fakeData";
import SingleNotice from "../SingleNotice/SingleNotice";
type newNotice = {
  id: number;
  header: string;
  date: string;
}[];
const NewNotice = () => {
  const [notice, setNewNotice] = useState<newNotice>();
  const [showModal, setShowModal] = useState(false);
  const [singleNotice, setSingleNotice] = useState({});
  useEffect(() => {
    setNewNotice(newNotice);
  }, []);
  const HandleClick = (notice: SetStateAction<{}>) => {
    setShowModal(true);
    setSingleNotice(notice);
  };

  return (
    <div className={`${style.newNotice} p-4  rounded-xl`}>
      <div className={`${style.noticeHeader} flex  items-center`}>
        <span className="pt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </span>
        <h3>Notice Board</h3>
      </div>
      <div className={`${style.noticeBody} pt-5`}>
        {showModal && (
          <SingleNotice
            singleNotice={singleNotice}
            showModal={showModal}
            setShowModal={setShowModal}
          ></SingleNotice>
        )}
        <ul>
          {notice?.map((notice, index) =>
            index % 2 === 0 ? (
              // <Link to={`/allNotice/${notice.id}`}>
              <li
                key={index}
                onClick={() => HandleClick(notice)}
                className={`${style.singleNotice}   bg-gray-100`}
              >
                <h6 className={`${style.noticeDate}`}>{notice.date}</h6>
                <h5>{notice.header}</h5>
              </li>
            ) : (
              // {/* </Link> */}
              // <Link to={`/allNotice/${notice.id}`}>
              <li
                onClick={() => HandleClick(notice)}
                className={`${style.singleNotice} bg-white`}
              >
                <h6 className={`${style.noticeDate}`}>{notice.date}</h6>
                <h5>{notice.header}</h5>
              </li>
              // </Link>
            )
          )}
        </ul>
      </div>

      <div
        className={`${style.noticeFooter} flex justify-between items-center`}
      >
        <h5>Top 3 Notice</h5>
        <div className="flex items-center ">
          <h6>View All</h6>
          <span className="text-xl pt-1">
            <BsArrowRightCircleFill></BsArrowRightCircleFill>
            {/* <ion-icon name="arrow-forward-circle-outline"></ion-icon> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewNotice;
