import Image, { StaticImageData } from "next/image";

interface Iprops {
  id: number;
  img: StaticImageData;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
}
const Product = ({ product }: any) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={product.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
