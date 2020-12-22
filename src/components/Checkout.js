import React from 'react';
import '../css/Checkout.css';
import {Subtotal} from './Subtotal';
import {CheckoutProduct} from './CheckoutProduct';
import {useStateValue} from './StateProvider';

export const Checkout = () => {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_'
          alt=''></img>

        <div className='checkout_cart'>
          <h3>Hello,{user ? user:'Guest'}</h3>
          <h2 className="checkout_title">
             Your shopping Basket
          </h2>
          {basket?.map(item =>
            <CheckoutProduct key={item.title}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating}
            />
          )}

        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}
