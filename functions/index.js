const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe= require('stripe')('sk_test_51I16vLHNAzoNPqdcKiWn5ZmcORTzAUkKehwYPI8ulPDcvBvIMFy5EX6xfwTGlks09zb52SYxpTuyUTJBgLP7VwSA008yAY0zYg')

const app = express();

app.use(express.json());
app.use(cors({origin:true}));

app.get('/',(req,res)=>{
  res.status(200).send('Hello Amazon!');
})

app.post('/payment/create',async (req,res)=>{
  const total = req.query.total;

  console.log('Payment received>>>',total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd'
  });
  res.status(201).send({
    clientSecret:paymentIntent.client_secret,
  });

  console.log('paymentIntent>>>',paymentIntent.client_secret);
});

exports.api = functions.https.onRequest(app);


exports.test = functions.https.onRequest((request,response)=>{
  response.send('This is the test');
});
