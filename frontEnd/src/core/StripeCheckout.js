import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isAutheticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/cartHelper'


const StripeCheckout = ({
    products,
    setReload = f => f,
    reload = undefined
}) =>{

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: "",
    });

    const token = isAutheticated() && isAutheticated().token
    const userId = isAutheticated() && isAutheticated().user._id

    const getFinalPrice = () =>{
        return products.reduce((currentVale, nextValue)=>{
            return currentVale + nextValue.count * nextValue;

        }, 0);
    };


    return(
        <div>
          <h3 className="text-white">Stripe Checkout loaded {getFinalPrice()}</h3>  
        </div>
    )
}

export default StripeCheckout