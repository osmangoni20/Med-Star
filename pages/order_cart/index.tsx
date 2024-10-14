import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import ProgressModel from "../../components/common/Model/ProgressModel";
import useFirebase from "../../components/hooks/useFirebase";
import CostInformation from "../../components/Order/CostInformation/CostInformation";
import CardProduct from "../../components/OrderCarts/CardProduct/CardProduct";
import style from "../../styles/Sass/Components/OrderCart/_order_cart.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
const OrderCart = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const [progress, setProgress] = useState(false);
  const route = useRouter();
  const { user }: any = useFirebase();

  const {products,total,subTotal,totalSelectedItem}=useAppSelector(state=>state.cartR)
  //Handle Total Prize
  const HandleUpdateQuantity = (quantity: number, id: string) => {
    console.log(quantity);
    //
 
  };

 

  return (
    <div>
      <Meta
        title="My Cart MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.OrderCart}`}>
        {progress && <ProgressModel />}
        {products.length > 0 ? (
          <div className=" md:flex md:justify-between gap-6">
            <div
              className={`${style.costInformation} md:hidden sm:hidden block `}
            >
              <CostInformation
                showButton={true}
                totalPrice={total}
              ></CostInformation>
            </div>

            <main className={`${style.OrderCartProducts} `}>
              {/*  Order Cart  */}
              <div id="OrderCartProducts" style={{ display: "block" }}>
                <div className={`${style.card_header}`}>
                  <h3>Order: {totalSelectedItem} Items</h3>
                  <h3>
                    Total: <span id="prize">{Number(subTotal).toFixed(2)}</span> TK
                  </h3>
                </div>
                <div className={`${style.card_Product}`}>
                  <div className="row">
                    {products?.map((pd, index) => (
                      <CardProduct
                        key={index}
                        totalPrice={total}
                        HandleUpdateQuantity={HandleUpdateQuantity}
                        deleteItem={deleteItem}
                        setDeleteItem={setDeleteItem}
                        productDetails={pd}
                      ></CardProduct>
                    ))}
                  </div>
                </div>
              </div>
            </main>
            <aside className="h-screen">
              <div
                className={`${style.costInformation} md:block sm:block hidden `}
              >
                <CostInformation
                  showButton={true}
                  totalPrice={total}
                ></CostInformation>
              </div>
            </aside>
          </div>
        ) : (
          <div>
            <h2 className="text-center">{!progress && "Order Cart Empty"} </h2>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://medstar-backend.onrender.com/api/cart_product_list/`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
// export default OrderCart;
export default OrderCart;
