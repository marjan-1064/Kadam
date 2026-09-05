import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* Brand Info */}
        <div style={colStyle}>
          <h2 style={{ color: "#E9C46A", fontSize: "24px", fontWeight: "800", letterSpacing: "2px", marginBottom: "12px" }}>
            KADAM
          </h2>
          <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
            Stepping up your everyday style with premium footwear, built for performance and unmatched comfort.
          </p>
          <div style={socialIconContainer}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={socialIconStyle}>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Brand Collections Links */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Collections</h3>
          <ul style={listStyle}>
            <li><Link to="/Nike" style={linkStyle}>Nike Edition</Link></li>
            <li><Link to="/Adidas" style={linkStyle}>Adidas Originals</Link></li>
            <li><Link to="/Gucci" style={linkStyle}>The Gucci Edit</Link></li>
            <li><Link to="/Bata" style={linkStyle}>Bata Everyday</Link></li>
            <li><Link to="/Sports" style={linkStyle}>Performance Gear</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={listStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/About" style={linkStyle}>About Us</Link></li>
            <li><Link to="/cart" style={linkStyle}>My Cart</Link></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Stay Connected</h3>
          <p style={{ color: "#d1d5db", fontSize: "13px", marginBottom: "12px" }}>
            Subscribe to get special offers and new drop updates.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "6px", marginBottom: "15px" }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                flex: "1",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #444",
                backgroundColor: "#1f3833",
                color: "#fff",
                fontSize: "13px",
                outline: "none"
              }}
            />
            <button 
              type="submit" 
              style={{
                backgroundColor: "#E9C46A",
                color: "#111",
                border: "none",
                padding: "8px 14px",
                fontWeight: "bold",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "13px"
              }}
            >
              Join
            </button>
          </form>
          <div style={{ color: "#bbb", fontSize: "13px", lineHeight: "1.8" }}>
            <p><i className="fa-solid fa-envelope" style={{ marginRight: "8px", color: "#E9C46A" }}></i> support@kadamstore.com</p>
            <p><i className="fa-solid fa-phone" style={{ marginRight: "8px", color: "#E9C46A" }}></i> +92 300 1234567</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div style={{
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "15px 5%",
  textAlign: "center",
  fontSize: "13px",
  color: "#a0aec0",
  backgroundColor: "#24433d"
}}>
  <p>© {new Date().getFullYear()} KADAM Store. All rights reserved.</p>
  <p style={{ marginTop: "5px", fontSize: "12px", color: "#E9C46A" }}>
    Designed & Developed by <a href="https://github.com/marjan-1064" target="_blank" rel="noreferrer" style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline" }}>Marjan</a>
  </p>
</div>
    </footer>
  );
};

/* --- Inline Styles --- */

const footerStyle = {
  backgroundColor: "#2D524B",
  color: "#ffffff",
  paddingTop: "40px",
  marginTop: "auto",
  borderTop: "3px solid #E9C46A",
  width: "100%",
  boxSizing: "border-box"
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  padding: "0 5% 30px 5%",
  maxWidth: "1200px",
  margin: "0 auto"
};

const colStyle = {
  display: "flex",
  flexDirection: "column"
};

const headingStyle = {
  color: "#E9C46A",
  fontSize: "16px",
  fontWeight: "700",
  marginBottom: "15px",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const linkStyle = {
  color: "#e2e8f0",
  textDecoration: "none",
  fontSize: "14px",
  transition: "0.2s color"
};

const socialIconContainer = {
  display: "flex",
  gap: "12px",
  marginTop: "5px"
};

const socialIconStyle = {
  color: "#2D524B",
  backgroundColor: "#E9C46A",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "bold"
};

const bottomBarStyle = {
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "15px 5%",
  textAlign: "center",
  fontSize: "13px",
  color: "#a0aec0",
  backgroundColor: "#24433d"
};

export default Footer;