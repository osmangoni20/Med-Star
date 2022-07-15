import React from "react";
import AllNotice from '../../../NoticeFakeData';
const SingleNotice = ({setShowModal,showModal,singleNotice}) => { 
    console.log(singleNotice)
    const notice=AllNotice.find(element => element.id ===parseInt(singleNotice.id));
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-15 float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-15 h-8 w-8 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div>
                <h3 className="text-3xl text-center font-semibold">
                    {notice.title}
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {notice.content}
                  </p>
                </div> 
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default SingleNotice;

















// import React from 'react';
// import { useParams } from 'react-router-dom';
// import AllNotice from '../../../NoticeFakeData';
// const SingleNotice = () => {
    
//     const { id } = useParams();
//     const notice=AllNotice.find(element => element.id ===parseInt(id));
//     console.log(notice)
//     return (
//         <div>
//             <h2 className='text-center text-bold text-2xl'>{notice.title}</h2>
//             <p className='mt-2 text-justify text-xl'>
//                 {notice.content}
//             </p>
//         </div>
//     );
// };

// 