import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, {FirebaseContext, Loading} from './store/Context'
import firebase from './firebase/config'

ReactDOM.render(
 
  <FirebaseContext.Provider value={{firebase}}>
    <Loading >
      <Context>
    <App />
    </Context>
    </Loading>
  </FirebaseContext.Provider>
  
, document.getElementById('root'));
