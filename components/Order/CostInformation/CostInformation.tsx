import Link from "next/link";
import style from "../../../styles/Sass/Components/Order/CostInformation.module.scss";
import LargestButton from "../../Custom/Button/LargestButton";
import { useAppSelector } from "../../../redux/hooks";

const CostInformation = ({
  totalPrice,
  showButton,
}: {
  totalPrice: number;
  showButton: boolean;
}) => {
 const {subTotal, total, shippingCost,tax,totalSelectedItem}=useAppSelector(state=>state.cartR)
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
            <p>{Number(subTotal).toFixed(2)} Tk</p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <p>Shipping Cost</p>
            <p>{shippingCost} Tk</p>
          </div>

          <hr></hr>
          <div className="flex justify-between">
            <p>Vat/Tax</p>
            <p>{Number(tax).toFixed(2)} Tk</p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <p>Total Cost</p>
            <p>{Number(total).toFixed(2)} Tk</p>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <h5>Payable Taka</h5>
            <h5>{Number(total).toFixed(2)} Tk</h5>
          </div>
        </div>
        {showButton && (
          <div className={`${style.order_Button}`}>
            <Link href="/shipping">
              <a>
                <LargestButton>Place Order</LargestButton>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostInformation;
