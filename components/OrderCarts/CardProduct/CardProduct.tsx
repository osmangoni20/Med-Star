import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../State";
import style from "../../../styles/Sass/Components/OrderCart/CartProduct.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteProduct, updateProduct } from "../../../redux/feature/CartSlice";
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
  const dispatch = useAppDispatch();



  const HandleDeleteCardProduct = (id: any) => {
    console.log(id);
    dispatch(deleteProduct(id))
   
  };


  const HandleIncreaseQuantity = (id: any) => {
    dispatch(updateProduct({id,type:"increment"}))
  };

  const HandleDecreaseQuantity = (id: any) => {
    console.log(quantity,id)

    if(Number(quantity)>1){
      dispatch(updateProduct({id,type:"decrement"}))
    }
  };


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
            {Number(quantity * price).toFixed(2)} Tk{" "}
          </h3>
          <button className={`${style.countButton}`}>
            <p
              className={`${style.increaseAndDecrease}`}
              onClick={() => HandleDecreaseQuantity(_id)}
            >
              -
            </p>
            <p className={`${style.countValue}`}>{quantity}</p>
            <p
              className={`${style.increaseAndDecrease}`}
              onClick={() => HandleIncreaseQuantity(_id)}
            >
              +
            </p>
          </button>

          <div>
            <h3 className=" hidden sm:block md:block">
              Tk. {quantity?quantity * price:price }{" "}
            </h3>
          </div>
        </div>
      </div>
      <hr className={`${style.hyper_line}`}></hr>
    </div>
  );
};

export default CardProduct;
