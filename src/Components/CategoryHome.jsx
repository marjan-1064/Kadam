import React from 'react'
import Image2 from '../assets/Image1.avif'
import Image3 from '../assets/Img2.jpg'
import Image4 from '../assets/yellow.jpg'
import Image5 from '../assets/jamun.jpg'
import {Link} from "react-router-dom"
const CategoryHome = () => {
  return (
    <div className="category-home">
      <h6>SHOP BY CATEGORY</h6>
      <h2>Find Your Perfect Pair</h2>
      <div className="pairs1">
        <div className="card1"> <img src="https://i.pinimg.com/736x/f5/13/4a/f5134aadca947dadd183bbd98c1200a6.jpg"></img><h2>Men</h2><Link to ="/Men">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
         <div className="card2"> <img src="https://i.pinimg.com/1200x/5d/69/2d/5d692df8361dc4835f87adae530bbdef.jpg"></img><h2>Women</h2><Link to="/Women">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
          <div className="card3"> <img src="https://i.pinimg.com/1200x/74/4b/3c/744b3c239947eaacd054d283007299db.jpg"></img><h2>Kids</h2><Link to="/Kids">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
           <div className="card4"> <img src="https://i.pinimg.com/1200x/0e/a8/ae/0ea8aebd20b05fc136a78fe4c7122581.jpg"></img><h2>Sports</h2><Link to="/Sports">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
       
      </div>
    </div>
  )
}

export default CategoryHome
