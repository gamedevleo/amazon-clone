import React,{useState,useEffect} from 'react';
import {useStateValue} from './StateProvider';
import {db} from '../firebase';
import {Order} from './Order';
import '../css/Orders.css';

export const Orders = () => {
  const [{basket,user},dispatch] = useStateValue();
  const [orders,setOrders] = useState();

  useEffect(()=>{
    if(user){
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot=>(
          setOrders(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
          })))
        ))
        console.log('>>>',user);
    }
    else{
      setOrders([]);
      console.log('no user');
    }
  },[user])
  return (
    <div className ='orders'>
      <h1>Your Orders</h1>
      <div className='orders_order'>
        {orders?.map(order=>(
          <Order order={order}/>
        ))}
      </div>
    </div>
  )
}
