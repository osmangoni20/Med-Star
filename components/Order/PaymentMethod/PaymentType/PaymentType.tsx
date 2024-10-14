import Image from 'next/image';
import React from 'react';
import './PaymentType.css';
const PaymentType = (profs) => {

  const HandlePaymentType = (e) => {
    profs.HandlePaymentType(e.target.value)
  }
  const { image, paymentTypeLink, paymentType, id } = profs?.paymenttypeInfo;
  return (
    <div className=" col-md-6 col-lg-6 col-sm-12 col-12">
      <a href={paymentTypeLink}>
        <div className=" PaymentType d-flex justify-content-between align-items-center">
          <input onClick={HandlePaymentType} type="radio" id={id} name="DelevaryType" value={paymentType} />
          <label htmlFor={id} >
            <Image src={image} alt="" />
          </label>

        </div>
      </a>
    </div>
  );
};

export default PaymentType;