import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Sass/common/_product.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
import useFirebase from "../hooks/useFirebase";
import ProductModel from "./Model/ProductModel";
interface Data {
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;

  productType: string;
  capacity: string;
  used: string;
  sideEffect: string;
}
const Product = ({ product }: { product: Data }) => {
  const [showModel, setModel] = useState<boolean>(false);
  const { user }: any = useFirebase();
  return (
    <div>
      {showModel && (
        <ProductModel
          setModel={setModel}
          showModel={showModel}
          data={product}
          user={user}
        />
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
            <h2 className="text-center">{product.name.slice(0, 25)}</h2>
            <h6>{product.productType}</h6>
            <h6>{product.capacity}</h6>
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
