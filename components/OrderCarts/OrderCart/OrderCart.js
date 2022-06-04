import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductOfChutney from '../../Home/MangoChutneyProduct/ProductOfChutney/ProductOfChutney';
import ProductOfMango from '../../Home/MangoProduct/ProductOfMango/ProductOfMango';
import CostInformation from '../../Shared/CostInformation/CostInformation';
import CardProduct from '../CardProduct/CardProduct';
import './OrderCart.css';
const OrderCart = () => {

    const [cardProducts, setCardProducts] = useState([]);
    const [deleteItem, setDeleteItem] = useState(false);
    const [updateQuantity, setUpdateQuantity] = useState(false);
    let TotalPrize = cardProducts.reduce((accumalator, currentValue) => accumalator + (currentValue.prize * currentValue.quantity), 0)


    //Handle Total Prize
    const HandleUpdateQuantity = (quantity, id) => {

        fetch("https://nameless-wildwood-35129.herokuapp.com/updateQuantity/" + id, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUpdateQuantity(true)
                }
                setUpdateQuantity(false)
            })
    }

    useEffect(() => {
        fetch('https://nameless-wildwood-35129.herokuapp.com/cartProducts')
            .then(res => res.json())
            .then(data => {
                setCardProducts(data)
            })
    }, [deleteItem || updateQuantity])



    // Handle Go To The Shipping Page from Order Cart
    const HandleShippingPage = () => {
        document.getElementById("OrderCartProducts").style.display = "none";

        document.getElementById("ShippingComponent").style.display = "block";
    }
    return (
        <div className="OrderCart">
            <Navbar></Navbar>
            {cardProducts.length > 0 ?
                <div className='container '>
                    <div className="row ">
                        <div className='col-md-8 col-lg-8 col-sm-7 col-12 order-sm-1 order-2'>
                            {/*  Order Cart  */}
                            <div id="OrderCartProducts" style={{ display: "block" }}>
                                <div className="card-header">
                                    <h3>Order: {cardProducts.length} Items</h3>
                                    <h3>Total: <span id="prize">
                                        {TotalPrize}
                                    </span> TK</h3>
                                </div>
                                <div className="card-Product">
                                    <div className='row'>
                                        {
                                            cardProducts?.map(pd => <CardProduct HandleUpdateQuantity={HandleUpdateQuantity} deleteItem={deleteItem} setDeleteItem={setDeleteItem} info={pd}></CardProduct>)
                                        }
                                        <div className="Cart-Button">
                                            <p>
                                                Orders as many as you want together. Shipping costs only 40 Taka.
                                            </p>
                                            <Link to="/shipping"><button className='btn btn-primary'>Go To Shipping Page</button></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Shipping Input Component */}
                            {/* <div id="ShippingComponent" style={{ display: "none" }}>
                            <Shipping></Shipping>
                        </div> */}
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12 order-sm-2 order-1">
                            <CostInformation totalprize={TotalPrize}></CostInformation>
                        </div>

                    </div>
                </div> :
                <div className="text-center py-5 bg-light">
                    <h1>Your Order Card Is Empty</h1>
                    <h6>Please Order Now</h6>
                    <ProductOfMango header="Recommanded Products"></ProductOfMango>
                    <ProductOfChutney header=""></ProductOfChutney>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default OrderCart;