import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Sass/common/_product.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
import useFirebase from "../hooks/useFirebase";
import ProductModel from "./Model/ProductModel";
interface Data {
  id: number;
  _id:string;
  category: string;
  name: string;
  img: string;
  price: number;
  brand:string;
  description:string;
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
            width={250}
            height={200}
            alt={product.name}
          />
        </figure>
        <div className={`${style.productCartBody} card-body `}>
          <div className={`${style.cartBodyText}`}>
            <p className="text-center">{product.name.slice(0, 25)}</p>
            <p>{product.productType}</p>
            <p>{product.brand}</p>
            <h6>{product.capacity}</h6>
            <p className={`text-medium font-semibold`}> Tk {product.price}</p>
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
