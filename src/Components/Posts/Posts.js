import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/PostContext';
import './Post.css';

function Posts() {
  const {firebase} = useContext(FirebaseContext)
  const [prodcuts, setProducts] = useState([])
  const {setPostDetails} = useContext(postContext)
  const history = useHistory() 

  useEffect(()=>{
     firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((prodcut)=>{
        return{
          ...prodcut.data(),
          id:prodcut.id
        }
      })
      setProducts(allPost)
     })
  },[])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
      {prodcuts.map(prodcut=>{
  
      return  <div
        className="card"
           onClick={()=>{
             setPostDetails(prodcut)
             history.push('view')
           }} >

            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={prodcut.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {prodcut.price}</p>
              <span className="kilometer">{prodcut.category}</span>
              <p className="name"> {prodcut.name}</p>
            </div>
            <div className="date">
              <span>{prodcut.createdAt}</span>
            </div>
          </div>
      })
        }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
