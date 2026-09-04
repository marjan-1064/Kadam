import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroimage3 from '../assets/hero-image3.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="collectionpart" style={{ padding: "30px 5%", color: "#333", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Page Title */}
      <div className="collectionheading" style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>About Our Store</h1>
        <p style={{ color: "#666", fontSize: "15px", marginTop: "8px" }}>
          Stepping up your style with premium quality and unmatched comfort.
        </p>
      </div>

      {/* Main Banner / Story Section */}
      <div 
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
          backgroundColor: "#f9f9f9",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #eee"
        }}
      >
        {/* Fixed Compact Image Container */}
        <div style={{ flex: "0 0 280px", width: "280px", height: "220px" }}>
          <img 
            src={heroimage3} 
            alt="Shoe Collection" 
            style={{ 
              width: "100%", 
              height: "100%", 
              borderRadius: "10px", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              objectFit: "cover"
            }} 
          />
        </div>

        {/* Text Section */}
        <div style={{ flex: "1 1 300px", maxWidth: "600px" }}>
          <h2 style={{ fontSize: "22px", color: "#2d524b", marginBottom: "12px" }}>
            Crafted for Comfort, Designed for Performance
          </h2>
          <p style={{ lineHeight: "1.6", color: "#555", fontSize: "14px", marginBottom: "10px" }}>
            Founded with a passion for exceptional footwear, our store brings together top-tier 
            brands and athletic designs. Whether you're searching for performance running shoes, 
            sleek sneakers, or timeless formal classics, we curate products that deliver on both 
            style and durability.
          </p>
          <p style={{ lineHeight: "1.6", color: "#555", fontSize: "14px" }}>
            We believe every step matters. That’s why we partner directly with leading brands 
            to offer authentic footwear that fits your active lifestyle.
          </p>
        </div>
      </div>

      {/* Highlights / Features Grid */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "50px"
        }}
      >
        <div style={cardStyle}>
          <i className="fa-solid fa-truck-fast" style={iconStyle}></i>
          <h3 style={{ margin: "10px 0 6px", color: "#2d524b", fontSize: "16px" }}>Fast Delivery</h3>
          <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.4" }}>
            Get your favorite pairs delivered to your doorstep quickly.
          </p>
        </div>

        <div style={cardStyle}>
          <i className="fa-solid fa-shield-halved" style={iconStyle}></i>
          <h3 style={{ margin: "10px 0 6px", color: "#2d524b", fontSize: "16px" }}>100% Authentic</h3>
          <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.4" }}>
            Guaranteed original footwear sourced directly from suppliers.
          </p>
        </div>

        <div style={cardStyle}>
          <i className="fa-solid fa-rotate-left" style={iconStyle}></i>
          <h3 style={{ margin: "10px 0 6px", color: "#2d524b", fontSize: "16px" }}>Easy Returns</h3>
          <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.4" }}>
            Hassle-free exchange policies for complete peace of mind.
          </p>
        </div>

        <div style={cardStyle}>
          <i className="fa-solid fa-headset" style={iconStyle}></i>
          <h3 style={{ margin: "10px 0 6px", color: "#2d524b", fontSize: "16px" }}>24/7 Support</h3>
          <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.4" }}>
            Our support team is always here to assist with your orders.
          </p>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div 
        style={{
          backgroundColor: "#2d524b",
          color: "#fff",
          borderRadius: "10px",
          padding: "30px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>Ready to find your perfect pair?</h2>
        <p style={{ color: "#e0e0e0", fontSize: "14px", marginBottom: "18px" }}>
          Explore our sports, brand, and everyday collections today.
        </p>
        <button 
          onClick={() => navigate("/Sports")}
          style={{
            backgroundColor: "#E9C46A",
            color: "#111",
            border: "none",
            padding: "10px 22px",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Explore Collection <i className="fa-solid fa-arrow-right" style={{ marginLeft: "6px" }}></i>
        </button>
      </div>
    </div>
  );
};

/* Reusable Inline Styles */
const cardStyle = {
  backgroundColor: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "20px 15px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
};

const iconStyle = {
  fontSize: "28px",
  color: "#2d524b"
};

export default About;