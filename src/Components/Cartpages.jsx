import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./Cartcontext";

const CartPage = () => {
  const { cartProducts, removeFromCart, cartitem } = useContext(CartContext);
  const navigate = useNavigate();

  // Total price calculate karne ke liye
  const totalPrice = cartProducts.reduce((acc, item) => acc + Number(item.price || 0), 0);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2>Your Shopping Cart ({cartitem} Items)</h2>

      {cartProducts.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h3>Your cart is empty!</h3>
          <button 
            onClick={() => navigate("/Catalog")}
            style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#2d524b", color: "#fff", border: "none" }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
          {/* Cart Items List */}
          <div style={{ flex: "2", minWidth: "300px" }}>
            {cartProducts.map((item) => (
              <div 
                key={item.id} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "10px"
                }}
              >
                <img 
                  src={item.image && item.image[0] ? item.image[0] : ""} 
                  alt={item.name} 
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
                />
                
                <div style={{ flex: "1", marginLeft: "15px" }}>
                  <h4 style={{ margin: "0 0 5px 0" }}>{item.name}</h4>
                  <p style={{ margin: "0", color: "#666" }}>Brand: {item.brand}</p>
                  <p style={{ margin: "5px 0 0 0", fontWeight: "bold" }}>Rs {item.price}</p>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remove <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary Box */}
          <div style={{ flex: "1", minWidth: "250px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px", height: "fit-content" }}>
            <h3>Order Summary</h3>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
              <span>Total Items:</span>
              <span>{cartProducts.length}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0", fontWeight: "bold" }}>
              <span>Total Amount:</span>
              <span>Rs {totalPrice}</span>
            </div>
            <button 
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#2d524b",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;