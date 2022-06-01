import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import style from "../../styles/Sass/main.module.sass";
const Categories = () => {
  return (
    <div className={style.categories}>
      <ul className="list-none">
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
        <li className="flex items-center justify-between">
          <p>Mobile</p>
          <AiOutlineMail></AiOutlineMail>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
