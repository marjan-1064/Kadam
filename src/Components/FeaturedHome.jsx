import React from 'react'
import Image2 from '../assets/Image1.avif'
import Image3 from '../assets/Img2.jpg'
import Image4 from '../assets/yellow.jpg'
import Image5 from '../assets/jamun.jpg'
import {Link} from "react-router-dom"
const FeaturedHome = () => {
  return (
    <div class="FeaturedHome">
        <div className="head">
        <h6>FEATURED PRODUCTS</h6>
      <h2>Our Best Sellers</h2>
        </div>
      <div className="pairs">
        <div className="card1"> <img src="https://i.pinimg.com/1200x/ec/a0/04/eca004976e4bbe3826e4c8077d6852af.jpg"></img><h2>Nike</h2><Link to ="/Nike">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
         <div className="card2"> <img src="https://i.pinimg.com/1200x/c4/f3/ce/c4f3ce970291f83f7c1bc6956b73207a.jpg"></img><h2>Gucci</h2><Link to="/Gucci">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
          <div className="card3"> <img src="https://i.pinimg.com/1200x/c4/1e/e3/c41ee309ec987fc7ce7dcf9db9ef589d.jpg"></img><h2>Adidas</h2><Link to="/Adidas">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
           <div className="card4"> <img src="https://i.pinimg.com/1200x/02/6b/b9/026bb9886fe3a5949a609b17c23ac7cd.jpg"></img><h2>Bata</h2><Link to="/Bata">Explore Collection <i className="fa-solid fa-arrow-right"></i></Link></div>
       
      </div>
    </div>
  )
}

export default FeaturedHome
