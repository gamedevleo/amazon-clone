import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Checkout} from './components/Checkout';
import {Login} from './components/Login';
import {useEffect} from 'react';
import {auth} from './firebase';
import {useStateValue} from './components/StateProvider';

function App() {
  const [state,dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        console.log(authUser.email);
        dispatch({type:'SET_USER',user:authUser.email})
        console.log(state.user);
      }
      else{
        dispatch({type:'SET_USER',user:null})
      }
    })
  },[])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
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
