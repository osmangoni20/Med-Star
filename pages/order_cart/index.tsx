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
const OrderCart = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const [progress, setProgress] = useState(false);
  const route = useRouter();
  const { user }: any = useFirebase();
  let TotalPrize = cardProducts.reduce(
    (accumulator: any, currentValue: any) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  console.log(TotalPrize);
  console.log(cardProducts);

  //Handle Total Prize
  const HandleUpdateQuantity = (quantity: number, id: string) => {
    console.log(quantity);
    //
    fetch("https://medstar-backend.onrender.com/my-cart/updateQuantity/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quantity, id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setUpdateQuantity(!updateQuantity);
        }
      });
  };

  useEffect(() => {
    if (cardProducts.length) {
      setProgress(false);
    } else if (cardProducts.length === 0) {
      setProgress(true);
      setTimeout(function () {
        setProgress(false);
      }, 3500);
    }

    const fetchData = async () => {
      // get the data from the api
      const res = await fetch(
        `https://medstar-backend.onrender.com/my-cart/${user.email}`
      );
      // convert data to json
      const data = await res.json();
      setCardProducts(data);
      console.log(data.length, "order-cart");
      if (typeof window !== "undefined") {
        localStorage.setItem("CountCartProduct", `${data.length}`);
      }
    };

    // call the function
    user.email &&
      fetchData()
        // make sure to catch any error
        .catch(console.error);
  }, [deleteItem, updateQuantity, user]);

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
        {cardProducts.length > 0 ? (
          <div className=" md:flex md:justify-between gap-6">
            <div
              className={`${style.costInformation} md:hidden sm:hidden block `}
            >
              <CostInformation
                showButton={true}
                totalPrice={TotalPrize}
              ></CostInformation>
            </div>

            <main className={`${style.OrderCartProducts} `}>
              {/*  Order Cart  */}
              <div id="OrderCartProducts" style={{ display: "block" }}>
                <div className={`${style.card_header}`}>
                  <h3>Order: {cardProducts.length} Items</h3>
                  <h3>
                    Total: <span id="prize">{TotalPrize}</span> TK
                  </h3>
                </div>
                <div className={`${style.card_Product}`}>
                  <div className="row">
                    {cardProducts?.map((pd, index) => (
                      <CardProduct
                        key={index}
                        totalPrice={TotalPrize}
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
                  totalPrice={TotalPrize}
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
