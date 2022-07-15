import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { Dispatch, SetStateAction, useState } from "react";
import style from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import LargestButton from "../../Custom/Button/LargestButton";
interface Data {
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

interface Person {
  name: string;
}
interface StarWarsProductProps {
  product: Data;
}

interface Params extends ParsedUrlQuery {
  productId: string;
}
const SingleModel = ({
  data,
  setModel,
  showModel,
}: {
  data: Data;
  showModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(data);

  const [countValue, setContValue] = useState(1);

  const HandleIncrease = () => {
    setContValue((count) => count + 1);
  };
  const HandleDecrease = () => {
    if (countValue > 1) {
      setContValue((count) => count - 1);
    } else {
      setContValue(1);
    }
  };
  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.inner_popup}`}>
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex justify-center">
              <div className={`flex justify-between `}>
                <div>
                  <Image
                    src={data.img}
                    width={200}
                    height={200}
                    alt={data.name}
                  />
                  <div className={`${style.buttonCard} flex `}>
                    <div>
                      <p className="text-sm text-gray-400">
                        MRP <span className="line-through">৳2750</span>{" "}
                        <span className={style.offer}>8% off</span>
                      </p>
                      <p className={`${style.price}`}>
                        TK {data.price * countValue}
                      </p>

                      <button className={`${style.countButton}`}>
                        <p
                          className={`${style.increaseAndDecrease}`}
                          onClick={HandleDecrease}
                        >
                          -
                        </p>
                        <p className={`${style.countValue}`}>{countValue}</p>
                        <p
                          className={`${style.increaseAndDecrease}`}
                          onClick={HandleIncrease}
                        >
                          +
                        </p>
                      </button>

                      <div className="mt-5 ">
                        <span onClick={() => setModel(false)}>
                          <LargestButton>Add to Cart</LargestButton>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${style.productDetails}`}>
                  <h3>{data.name}</h3>
                  <p className={`${style.capacity}`}>
                    {data.description.capacity}
                  </p>
                  <p>{data.description.used}</p>
                  {/* <h6>Effect:</h6> */}
                  <p>{data.description.sideEffect}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  StarWarsProductProps,
  Params
> = async (context) => {
  const { productId } = context.params!;
  console.log(productId);
  const res = await fetch(
    `http://localhost:3000/api/medicine_product/${productId}`
  );
  const product = (await res.json()) as Data;
  return {
    props: {
      product,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/medicine_product");
  const productData = await res.json();

  const ids = productData.map((pd: any) => {
    return pd.id;
  });
  const paths = ids.map((id: number) => ({
    params: { productId: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default SingleModel;
