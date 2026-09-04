import React from 'react'
import {Link} from "react-router-dom"
const handleclick=async ()=>{
  
let response=await fetch('https://fakestoreapi.com/products/')
const data=await response.json()   
console.log(data) 
}
const HomeOff = () => {
  return (
    <div className="Home30">
        <div className="Home3-flex-div">
             <div className='Home30-div'>
        <p>SPECIAL OFFER</p>
      <h2>UPTO 30% OFF</h2>
      <p>On Selected Items</p>
     <Link to="/Catalog"><button class="ShopNow2">SHOP NOW <i className="fa-solid fa-arrow-right"></i></button></Link>
      </div>
      <div class="overalay-off">
        <h1> 30% </h1>
      </div>
        </div>
     
      
    </div>
  )
}

export default HomeOff
