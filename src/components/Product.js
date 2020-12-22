import React from 'react';
import '../css/Product.css';
import {useStateValue} from './StateProvider';

export const Product = ({id,title='book',price=19.99,rating=3,image}) => {
  const [{basket},dispatch] = useStateValue();


  const addToBasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  };

  return (
    <div key={id} className='product'>
      <div className='product_info'>
        <h5 className='product_name'>{title}</h5>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_,i)=>
            (<p key={id+i}>⭐</p>)
          )}
        </div>
      </div>
      <img src={image} alt=''/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
