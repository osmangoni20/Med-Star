import Link from "next/link";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import style from "../../styles/Sass/common/categories.module.scss";
const Categories = ({ data }: { data: any }) => {
  return (
    <div className={style.categories}>
      <ul className={`${style.categoryList} list-none`}>
        {data.map(
          (
            index: number,
            singleData: {
              category:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }
          ) => (
            <Link key={index} href={`/${singleData.category}`} passHref>
              <li className="flex items-center">
                <BsBoundingBoxCircles></BsBoundingBoxCircles>
                <p className="pl-3 p-1">{singleData.category}</p>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
};

export default Categories;
