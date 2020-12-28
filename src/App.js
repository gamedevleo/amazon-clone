import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Checkout} from './components/Checkout';
import {Login} from './components/Login';
import {useEffect} from 'react';
import {auth} from './firebase';
import {useStateValue} from './components/StateProvider';
import {Payment} from './components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {Orders} from './components/Orders';

const promise = loadStripe('pk_test_51I16vLHNAzoNPqdc6NdEaoXUgt1wQYcatuvBdZtKP6qFhOhVScG8HAR7DSVdjOnHqsTQ5MyokK7oAXVX225ZkZ5Q00x48Ixprc');

function App() {
  const [state,dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({type:'SET_USER',user:authUser});
      }
      else
        dispatch({type:'SET_USER',user:null});
    })
  },[])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/404'>
            <h1>This is 404</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
