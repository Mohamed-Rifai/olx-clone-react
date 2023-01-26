import React, { useContext, useState } from 'react';

import {Link, useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext, LoadingContext } from '../../store/Context';
import Loader from '../Loader/Loader';

import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const {load, setLoad } = useContext(LoadingContext)

  const handleSubmit = (e)=>{
    setLoad(true)
    e.preventDefault()

   

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result);
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          setLoad(false)
          history.push("/login")
        })
      })
    })
 
   
  }
  return (
    <div>
      {load && <Loader/>}
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
       
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a><Link to='/login'> Login </Link></a>
      </div>
    </div>
  );
}
