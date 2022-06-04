import React, { useEffect, useState } from 'react';
import style from '../../../styles/Sass/Components/OrderCart/CartProduct.module.scss';
import SimpleButton from '../../Custom/Button/SimpleButton';
// setDeleteItem, settotalprize,deleteItem,
const CardProduct = ({ productDetails,deleteItem,setDeleteItem,  HandleUpdateQuantity,  totalPrice }) => {
    const [total, setTotal] = useState(totalPrice);
    const { name, img, price,id, _id, quantity,description } = productDetails;
    const [productCount, setProductCount] = useState({quantity:quantity,productId:0})

    const HandleDeleteCardProduct = (id) => {

        console.log(id);
        // if (window.confirm("Are you remove this item ?")) {

        //     fetch("https://nameless-wildwood-35129.herokuapp.com/deleteCardProducts/" + id)
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data) {
        //                 setDeleteItem(!deleteItem);
        //                 const CurrentCountValue = localStorage.getItem("CountCartProduct")
        //                 if (CurrentCountValue >= 1) {
        //                     localStorage.setItem("CountCartProduct", Number(CurrentCountValue) - 1);
        //                     dispatch(DeleteOrder());
        //                 }
        //                 console.log("Remove Item")
        //             }
        //         })
        // }

    }
    useEffect(()=>{
      HandleUpdateQuantity(productCount.quantity, id);
    },[productCount])

    const HandleIncreaseQuantity = (id) => {
      const prevValue={...productCount,quantity:productCount.quantity+1,
      id:id}
      setProductCount(
       prevValue
      );
             };

             
      const HandleDecreaseQuantity = (quantityNumber) => {
        if (productCount.quantity > 1) {
          const prevValue={...productCount,quantity:productCount.quantity-1,
            id:id}
        setProductCount(prevValue);
        } else {
          const prevValue={...productCount,quantity:1,
            id:id}
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
           <div className=' md:flex items-center justify-between'>
           <div className={`${style.card_pdImage}`}>
                <img src={img} alt="" />
            </div>
            <div className={`${style.card_pd_info}`}>
                <div className={`${style.pd_info_firstPart} flex justify-between sm:block md:block`}>
                
                <span className=''>
                <h4>{name}</h4>
                <p className='mb-2'>{description.capacity}</p>
                </span>
                <span className='mt-3' onClick={() => HandleDeleteCardProduct(id)}>
                <SimpleButton >Remove</SimpleButton>
                </span>
                </div>

                <h3 className=' block sm:hidden md:hidden'>{(productCount.quantity) * price} Tk </h3>
                <button className={`${style.countButton}`}>
                        <p
                          className={`${style.increaseAndDecrease}`}
                          onClick={()=> HandleDecreaseQuantity(id)}
                        >
                          -
                        </p>
                        <p className={`${style.countValue}`}>{productCount.quantity}</p>
                        <p
                          className={`${style.increaseAndDecrease}`}
                          onClick={()=>HandleIncreaseQuantity(id)}
                        >
                          +
                        </p>
                      </button>
                   
                <div>
                <h3 className=' hidden sm:block md:block'>Tk. {(productCount.quantity) * price} </h3>
                </div>
            </div>
           </div>
            <hr className={`${style.hyper_line}`}></hr>
        </div>
    );
};

export default CardProduct;