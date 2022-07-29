import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header/Header";
import Meta from "../../components/common/Meta";
import useAuth from "../../components/hooks/useAuth";
import CostInformation from "../../components/Order/CostInformation/CostInformation";
import CardProduct from "../../components/OrderCarts/CardProduct/CardProduct";
import style from "../../styles/Sass/Components/OrderCart/_order_cart.module.scss";
const OrderCart = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const route = useRouter();
  const { user } = useAuth();
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
    fetch("https://med-star-bd.herokuapp.com/my-cart/updateQuantity/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quantity, id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setUpdateQuantity(true);
        }
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const res = await fetch(
        "https://med-star-bd.herokuapp.com/my-cart/" + user.email
      );
      // convert data to json
      const data = await res.json();
      setCardProducts(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [deleteItem, updateQuantity, user.email]);

  return (
    <div>
      <Meta
        title="My Cart MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
      <Header />
      <div className={`${style.OrderCart}`}>
        {cardProducts.length > 0 && (
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
        )}
      </div>

      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/cart_product_list/`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
// export default OrderCart;
export default OrderCart;
