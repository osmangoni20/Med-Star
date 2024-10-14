
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from '../../components/Order/Payment/CheckoutForm';
const Payment = () => {




 
//Strip Api
const stripePromise = loadStripe(
    'pk_test_51IeMHCDxOVqYVf88Vca9XqWPlZtT7mHNsNvR5w46YemHApUUgOqLSNitfzyRQYSm3IBwUcMtDCsIWEzT4S6XclbD00FewspEPl'
    );    return (
        <div>
            {
                <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
            }
        </div>
    );
};

export default Payment;