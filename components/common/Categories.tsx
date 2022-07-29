import Link from "next/link";
import { ImRadioChecked } from "react-icons/im";
import style from "../../styles/Sass/common/categories.module.scss";
const Categories = ({ data }: { data: any }) => {
  return (
    <div className={style.categories}>
      <ul className={`${style.categoryList} list-none`}>
        {data.map((singleData: any, index: any) => (
          <Link key={index} href={`/${singleData.category}`} passHref>
            <li className="flex items-center">
              <ImRadioChecked></ImRadioChecked>
              <p className="pl-3 p-1">{singleData.category}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
