import Link from "next/link";
import style from "../../../styles/Sass/Components/Order/CostInformation.module.scss";
import LargestButton from "../../Custom/Button/LargestButton";
const CostInformation = ({ totalPrice }: { totalPrice: number }) => {
  const SubTotal = totalPrice;
  let ShippingCost;
  let Vat;
  if (SubTotal > 2000) {
    Vat = SubTotal * 0.1;
  } else if (SubTotal > 1000) {
    Vat = SubTotal * 0.2;
  } else {
    Vat = 0;
  }
  if (SubTotal > 10000) {
    ShippingCost = 0;
  } else {
    ShippingCost = 40;
  }
  const TotalCost = SubTotal + ShippingCost + Vat;
  // console.log(totalprize,TotalCost,Vat,SubTotal);
  return (
    <div className={`${style.Cost_Info}  sticky-top`}>
      <div className={`${style.checkout_summary}`}>
        <div className={`${style.checkout_heder}`}>
          <h3>Checkout Summary</h3>
          <hr></hr>
        </div>
        <div className={`${style.cost_infoData}`}>
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>{SubTotal} Tk</p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <p>Shipping Cost</p>
            <p>{ShippingCost} Tk</p>
          </div>

          <hr></hr>
          <div className="flex justify-between">
            <p>Vat/Tax</p>
            <p>{Vat} Tk</p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <p>Total Cost</p>
            <p>{TotalCost} Tk</p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <h5>Payable Taka</h5>
            <h5>{TotalCost} Tk</h5>
          </div>
        </div>
        <div className={`${style.order_Button}`}>
          <Link href="/shipping">
            <a>
              <LargestButton>Place Order</LargestButton>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CostInformation;
