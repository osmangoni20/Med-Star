import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../State";
import style from "../../../styles/Sass/common/model/dynamicModel.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import useFirebase from "../../hooks/useFirebase";
import CustomModel from "./CustomModel";
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

interface Person {
  name: string;
}
interface StarWarsProductProps {
  product: Data;
}

interface Params extends ParsedUrlQuery {
  productId: string;
}
const ProductModel = ({
  data,
  setModel,
  showModel,
}: {
  data: Data;
  showModel: any;
  setModel: any;
}) => {
  const [countValue, setContValue] = useState(1);
  const dispatch = useDispatch();
  const route = useRouter();
  const { user }: any = useFirebase();
  const { IncrementOderCart } = bindActionCreators(actionCreators, dispatch);
  const totalCardNumber = useSelector((state: State) => state.cart);
  const [addToCart, setAddToCart] = useState(false);
  const [errorModel, setErrorModel] = useState(false);
  const [modelData, setModelData] = useState({});
  const [totalCartProduct, setTotalCartProduct] = useState<any>();
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
  useEffect(() => {
    fetch("https://med-star-bd.herokuapp.com/my-cart")
      .then((res) => res.json())
      .then((data) => setTotalCartProduct(data.length));
  }, [addToCart]);
  const HandleAddtoCart = () => {
    setAddToCart(!addToCart);
    const product = {
      ...data,
      id: totalCartProduct + 1,
      quantity: countValue,
      email: user.email,
    };
    console.log("product", product);

    const fetchData = async () => {
      // get the data from the api
      const res = await fetch("https://med-star-bd.herokuapp.com/my-cart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      // convert data to json
      const data = await res.json();
      console.log(data);
      if (data.insertedId) {
        setModel(false);
        IncrementOderCart();

        if (typeof window !== "undefined") {
          localStorage.setItem(
            "CountCartProduct",
            `${Number(totalCardNumber + 1)}`
          );
        }
        // route.reload();
      }
    };

    // call the function
    if (user.email) {
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    } else {
      setErrorModel(!errorModel);
      setModelData({
        text1: "Not Found User",
        text2: "Please Login Account or Create New Account",
        wrongType: true,
      });

      setTimeout(() => {
        setModel(false);
      }, 4000);
    }
  };
  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.addProduct_inner_popup}`}>
            {errorModel && (
              <CustomModel
                modelData={modelData}
                showModel={errorModel}
                setModel={setErrorModel}
              ></CustomModel>
            )}
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex justify-center">
              <div className={`md:flex md:justify-between gap-12`}>
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
                        MRP{" "}
                        <span className="line-through">
                          Tk {data.price * countValue}
                        </span>{" "}
                        <span className={style.offer}>8% off</span>
                      </p>
                      <p className={`${style.price}`}>
                        TK{" "}
                        {data.price * countValue -
                          (data.price * countValue * 8) / 100}
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
                        <span onClick={HandleAddtoCart}>
                          <SimpleButton>Add to Cart</SimpleButton>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${style.productDetails}`}>
                  <h3>{data.name}</h3>
                  <p className={`${style.capacity}`}>{data.capacity}</p>
                  <p>{data.used.slice(0, 200)}</p>
                  {/* <h6>Effect:</h6> */}
                  <p>{data.sideEffect}</p>
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

export default ProductModel;
// export default withAuth(OrderCart);
