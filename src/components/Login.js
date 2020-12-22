import React,{useState,useEffect} from 'react';
import '../css/Login.css';
import {Link,useHistory} from 'react-router-dom';
import {auth} from '../firebase';

export const Login = () => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
      history.push('/');
    })
    .catch(error=>{
      alert(error.message);
    })
  }

  const register = e=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then(auth=>{
      if(auth) history.push('/');
    })
    .catch(error=>alert(error.message));
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png' alt=''/>
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type='email' value={email} onChange={e=>setEmail(e.target.value)}></input>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>{
            setPassword(e.target.value)
          }}></input>

          <button onClick={signIn} type='submit' className='login_signInButton'>Sign In</button>
        </form>

        <p>
            By signing-in you agree to the AMAZON CLONE Conditions of Use&Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}
