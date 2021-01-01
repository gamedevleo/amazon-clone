import React,{useState,useEffect} from 'react';
import '../css/Payment.css';
import {useStateValue} from './StateProvider';
import {CheckoutProduct} from './CheckoutProduct';
import {Link,useHistory} from 'react-router-dom';
import {CardElement, useStripe,useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from '../Axios';
import {db} from '../firebase';
export const Payment = () => {
  const [{basket,user},dispatch] = useStateValue();

  const [error,setError] = useState(null);
  const [disabled,setDisabled] = useState(true);
  const [succeeded,setSucceeded] = useState(false);
  const [processing,setProcessing] = useState('');
  const [clientSecret,setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements= useElements();
  const history = useHistory();

  useEffect(()=>{
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async ()=>{
      const response = await axios({
        method:'post',
        url:`/payment/create?total=${getBasketTotal(basket)*100}`,
      });
      setClientSecret(response.data.clientSecret);
    }
    console.log(basket);
    getClientSecret();
  },[basket]);

  console.log('The clientSecret>>>',clientSecret);
  const handleSubmit = async (e)=>{
    if(clientSecret !== true){
      e.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement)
        }
      }).then(({paymentIntent})=>{
        if(user){
          db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
              basket:basket,
              amount:paymentIntent.amount,
              created:paymentIntent.created
            }).then(()=>{
              console.log('Success');
            })
           setSucceeded(true);
           setError(null);
           setProcessing(false);

           dispatch({
             type:'EMPTY_BASKET',
           })

           history.replace('/orders');
        }
        else{
          alert('Please login your account first!');
          history.push('/login');
        }
      }).catch(({error})=>{
        setError(error);
      });
    }
    else{
      alert('Sorry,something wrong. Please check your account and shopping cart. The Order Total must more than $0. Thanks.');
      history.push('/');
    }
  }
  const handleChange = e=>{
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='payment_section'>
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>Sydney</p>
            <p>Australia</p>
          </div>
        </div>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment_items'>
            {basket.map(item=>(
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}></CheckoutProduct>
            ))}
          </div>
        </div>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            <form onSubmit={handleSubmit}>
              <h3>Card Details</h3>
              <CardElement onChange={handleChange} />
              <div className='payment_priceContainer'>
                <CurrencyFormat
                  renderText={value=>(
                    <>
                      <h3>Order Total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </div>
              <button disabled={disabled || processing ||succeeded}>
                {processing? 'processing':'Buy Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
