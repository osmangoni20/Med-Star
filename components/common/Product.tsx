import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Sass/common/_product.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
import SingleModel from "./Model/SingleModel";
interface Iprops {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  description: {
    productType: string;
    capacity: string;
    used: string;
    sideEffect: string;
  };
}
const Product = ({ product }: { product: Iprops }) => {
  const [showModel, setModel] = useState<boolean>(false);

  return (
    <div>
      {showModel && (
        <SingleModel setModel={setModel} showModel={showModel} data={product} />
      )}
      <div className={`${style.productCart} card  w-84  shadow`}>
        <figure>
          <Image
            src={product.img}
            width={200}
            height={150}
            alt={product.name}
          />
        </figure>
        <div className={`${style.productCartBody} card-body `}>
          <div className={`${style.cartBodyText}`}>
            <h2 className="text-center">{product.name}</h2>
            <h6>{product.description.productType}</h6>
            <h6>{product.description.capacity}</h6>
            <p className={`${style.price}`}> Tk {product.price} .00</p>
          </div>

          <div className="card-actions justify-center">
            <span onClick={() => setModel(!showModel)}>
              <SimpleButton>Add to Cart</SimpleButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
