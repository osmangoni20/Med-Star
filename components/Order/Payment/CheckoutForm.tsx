

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import toast from "react-hot-toast";
import { orderPostApi } from './orderApi';
import useAuth from '../../hooks/useAuth';
import { paymentInfoUpdate } from '../../../redux/feature/OrderSlice';
import { clearCart } from '../../../redux/feature/CartSlice';
import ProgressModel from '../../common/Model/ProgressModel';
import { useRouter } from 'next/router';
import { TMedicine } from '../../../Type/type';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const {shippingInfo,email,order_product,price,status}=useAppSelector(state=>state.orderR)
    const dispatch=useAppDispatch()
    const route=useRouter()
    const [isLoading, setLoading]=useState(false)
    const[isModel,setModel]=useState(false);
    const [cardError, setError]= useState<string | undefined>()
    const [clientSecret, setClientSecret] =useState('')
    const {total}=useAppSelector(state=>state.cartR)
    const [transactionID, setTransactionID]=useState('')
    
    const url="https://medstar-backend.onrender.com/new_order"


  const orderPostApi= async(submitData: { shippingInfo: object; email: string; date: string; price: number; status: string; order_product: TMedicine[]; paymentInfo: { payment_method: any; transactionId: any; }; })=>{
    return await fetch(url,{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify(submitData)
      })
  }
  
     useEffect(() => {
console.log(shippingInfo)
      if(total<0){
        setError(" The amount must be greater than or equal to the minimum charge amount")
      }else{
        fetch("https://fationshoe-server.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({price:price||500}),
        }).then(res=>res.json())
        .then(data=>{
          console.log(data.clientSecret)
          setClientSecret(data.clientSecret);
        })
       
      }
   
     }, [price, shippingInfo, total])
    const isClose=()=>{
        setModel(false)
    }
    const isConfirmFromModel= async()=>{
        setModel(false)
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          return;
        }
    
      const card=elements.getElement(CardElement)
      if(card===null){return}
    
      const {error, paymentMethod}=await stripe.createPaymentMethod({
          type:'card',
          card
      })
      console.log(error,paymentMethod)
      if(!error&&clientSecret&&paymentMethod){
        setError('')
        console.log(paymentMethod)
          // orderPostApi body from CheckoutSummary
      }else{
        setError(error?.message||'')
          console.log(error)
    
      }
      console.log(clientSecret)
     stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: 'User',
          },
        },
      })
      .then(function(result:any) {
        console.log(result)
        // Handle result.error or result.paymentIntent
        const {paymentIntent, error}=result
          if(paymentIntent?.status==='succeeded'){
            setLoading(false)
            const paymentInfo={
              payment_method:paymentIntent.payment_method_types[0],
              transactionId:paymentIntent.id
            }
         dispatch(paymentInfoUpdate(paymentInfo))
          setTransactionID(paymentIntent.id)
        const newOrder={shippingInfo,email,date:new Date().toLocaleString(),price,status,order_product,paymentInfo}

        orderPostApi(newOrder).then(res=>res.json())
        .then(async(data: any)=>{
            
            toast.success("You Order Success")
            dispatch(clearCart())
            route.push('/')
        }).catch(error=>console.log(error))

      }
      else{
        console.log(error)
        setError(`Try Again`)
      }
      });
    }
const handleSubmit= async(e:any)=>{
    e.preventDefault()
    setLoading(true)
    isConfirmFromModel()
    // payment code working after conformation model submit

}
    return (
       <div className="h-screen w-[50%] flex justify-center items-center m-auto">
         <div className='w-full text-center space-y-4'>
           
            <h2 className='text-7xl text-center py-4 font-sans font-semibold'>Payment</h2>
            <p className='text-xl font-medium py-4'>Submit Your Cart</p>
            <form  onSubmit={handleSubmit} className='my-12 payment-form'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
       
        <div className= {`${transactionID && "hidden"} flex justify-center mt-6`}>
       {
        !isLoading&& <button type="submit" disabled={!stripe||!clientSecret} className={` ${(!stripe||!clientSecret)?"disabled": "text-white p-2 cursor-pointer py-2 rounded-md bg-[#4C9DC3]"}`}>
        Confirm Order
</button>
       }
        </div>
       <div>
       <p className='text-red-600 text-medium pb-5 text-center'>{cardError}</p>
       {
        isLoading&&<ProgressModel/>
       }
       {transactionID&&<div className='text-blue-600 text-center text-medium pb-5-'>
        <p className='text-2xl font-semibold '>Congratulations !!</p>
        <p>Your Payment Transaction ID-{transactionID}</p>
        </div>}
       </div>
      </form>
        </div>
       </div>
       
    );
};

export default CheckoutForm;