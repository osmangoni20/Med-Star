import Image from "next/image";
import style from "../../styles/Sass/common/_product.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
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
  console.log(product.img);
  return (
    <div>
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
            <SimpleButton>Add to Cart</SimpleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
