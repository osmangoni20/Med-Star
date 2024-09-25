import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../State";
import style from "../../../styles/Sass/Components/OrderCart/CartProduct.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
// setDeleteItem, settotalprize,deleteItem,

const CardProduct = ({
  productDetails,
  deleteItem,
  setDeleteItem,
  HandleUpdateQuantity,
  totalPrice,
}: any) => {
  const [total, setTotal] = useState(totalPrice);
  const totalCardNumber = useSelector((state: State) => state.cart);
  const { name, img, price, _id, quantity, capacity } = productDetails;
  const dispatch = useDispatch();

  const { DecrementOderCart } = bindActionCreators(actionCreators, dispatch);
  const [productCount, setProductCount] = useState({
    quantity: quantity,
    productId: 0,
  });

  const HandleDeleteCardProduct = (id: any) => {
    console.log(id);
    if (window.confirm("Are you remove this item ?")) {
      fetch(`https://medstar-backend.onrender.com/my-cart/deleteItem/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setDeleteItem(!deleteItem);
            const CurrentCountValue = Number(
              localStorage.getItem("CountCartProduct")
            );
            // DecrementOderCart();
            if (CurrentCountValue > 1) {
              DecrementOderCart();
              if (typeof window !== "undefined") {
                localStorage.setItem(
                  "CountCartProduct",
                  `${Number(totalCardNumber + 1)}`
                );
              }
            }
            console.log("Remove Item");
          }
        });
    }
  };
  useEffect(() => {
    HandleUpdateQuantity(productCount.quantity, _id);
  }, [HandleUpdateQuantity, _id, productCount.quantity]);

  const HandleIncreaseQuantity = (id: any) => {
    const prevValue = {
      ...productCount,
      quantity: productCount.quantity + 1,
      id: id,
    };
    setProductCount(prevValue);
  };

  const HandleDecreaseQuantity = (quantityNumber: any) => {
    if (productCount.quantity > 1) {
      const prevValue = {
        ...productCount,
        quantity: productCount.quantity - 1,
        id: _id,
      };
      setProductCount(prevValue);
    } else {
      const prevValue = { ...productCount, quantity: 1, id: _id };
      setProductCount(prevValue);
    }
  };

  // const HandleQuantity = (counter, status) => {

  //     console.log(counter,status);
  //     if (status === "+") {
  //         counter += 1
  //         setQuantity(counter);

  //     }
  //     // else if (status === "-") {
  //     //     counter > 1 ? counter = counter - 1 : counter = 1;
  //     //     setquantity(counter)
  //     //     HandleUpdateQuantity(counter, _id);
  //     // }
  // }

  return (
    <div className={`${style.cardProduct}`}>
      <div className=" md:flex items-center justify-between">
        <div className={`${style.card_pdImage}`}>
          <Image src={img} alt={name} height={100} width={160} />
        </div>
        <div className={`${style.card_pd_info}`}>
          <div
            className={`${style.pd_info_firstPart} flex justify-between sm:block md:block`}
          >
            <span className="">
              <h4>{name}</h4>
              <p className="mb-2">{capacity}</p>
            </span>
            <span className="mt-3" onClick={() => HandleDeleteCardProduct(_id)}>
              <SimpleButton>Remove</SimpleButton>
            </span>
          </div>

          <h3 className=" block sm:hidden md:hidden">
            {productCount.quantity * price} Tk{" "}
          </h3>
          <button className={`${style.countButton}`}>
            <p
              className={`${style.increaseAndDecrease}`}
              onClick={() => HandleDecreaseQuantity(_id)}
            >
              -
            </p>
            <p className={`${style.countValue}`}>{productCount.quantity}</p>
            <p
              className={`${style.increaseAndDecrease}`}
              onClick={() => HandleIncreaseQuantity(_id)}
            >
              +
            </p>
          </button>

          <div>
            <h3 className=" hidden sm:block md:block">
              Tk. {productCount.quantity * price}{" "}
            </h3>
          </div>
        </div>
      </div>
      <hr className={`${style.hyper_line}`}></hr>
    </div>
  );
};

export default CardProduct;
