

// export default Home;
import React from "react";
import heroShoe from "../assets/hero-image3.jpg";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <section className="hero">

      {/* Animated Balls */}
      <div className="floating-balls">
        <span className="ball ball1"></span>
        <span className="ball ball2"></span>
        <span className="ball ball3"></span>
        <span className="ball ball4"></span>
        <span className="ball ball5"></span>
        <span className="ball ball6"></span>
        <span className="ball ball7"></span>
        <span className="ball ball8"></span>
      </div>

      {/* Left Content */}
      <div className="hero-content">
        <p className="hero-small-title">NEW COLLECTION</p>

        <h1>
          Step Into
          <br />
          Your Style
        </h1>

        <p className="hero-description">
          Discover premium shoes designed for
          comfort, confidence and everyday style.
        </p>

        <button className="shop-btn">
          <Link to="/Catalog">  Shop Now</Link>
        
          
        </button>
      </div>

      {/* Right Shoe */}
      <div className="hero-shoe">
        <img
          src={heroShoe}
          alt="Featured shoe"
        />
      </div>

    </section>
  );
};

export default Home;