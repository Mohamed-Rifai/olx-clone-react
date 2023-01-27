import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/Context'
import { postContext } from './store/PostContext';

import './App.css';

/**
 * ?  =====Import Components=====
 */

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  // const {postDetails} = useContext(postContext)
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
  })
 
  return (
    <div>
     
      <Router>
        <Route exact path='/'>
      <Home />
        </Route>
        <Route path='/signup'>
      <Signup />
        </Route>
        <Route path='/login'>
      <Login/>
        </Route>
        <Route path='/create'>
      <Create/>
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
      </Router>
     
    </div>
  );
}

export default App;
