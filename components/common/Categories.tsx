import { useRouter } from "next/router";
import { ImRadioChecked } from "react-icons/im";
import style from "../../styles/Sass/common/categories.module.scss";
const Categories = ({ data }: { data: any }) => {
  const route = useRouter();
  const HandleSearch = (category: any) => {
    route.replace(`/medicine?category=${category.key}`);
    console.log(category);
  };
  return (
    <div className={style.categories}>
      <ul className={`${style.categoryList} list-none`}>
        {data.map((singleData: any, index: any) => (
          <li
            key={index}
            onClick={() => HandleSearch(singleData)}
            className="flex items-center"
          >
            <ImRadioChecked></ImRadioChecked>
            <p className="pl-3 p-1">{singleData.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
