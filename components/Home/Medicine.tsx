import style from "../../styles/Sass/main.module.sass";
import Categories from "../common/Categories";
import Product from "../common/Product";
import Button from "../Custom/Button/Button";

import{doctorList} from '../../Database/doctorList';
const Medicine = () => {
  return (
    <div>
      <h2>Medicine Corner</h2>
      <div className={style.categoriesAndProduct}>
        <Categories />
        <div>
            <div className="grid grid-cols-4 grid-2">
                {
                    doctorList.map(product=>
                    <Product key={product.id} product={product} />
                    )
                }
            </div>
          
          <Button>More Product</Button>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
