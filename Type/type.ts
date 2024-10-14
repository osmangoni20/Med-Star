export type TMedicine ={
    _id:string,
    id: number;
    category: string;
    name: string;
    img: string;
    price: number;
      productType: string;
      capacity: string;
      used: string;
      sideEffect: string;
      quantity:number;
      order_price:number
  
  }

  export type TOrder={
    date:string,
    email:string,
    order_product: TMedicine[];
    status: string;
    shippingInfo: any;
    price: number;
    paymentInfo: {
        payment_method: string;
        transactionId: string;
    };
}