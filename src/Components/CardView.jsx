import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./Cartcontext";
import shoe from '../shoes.json';
import heroimage3 from '../assets/hero-image3.jpg';

const CardView = () => {
    const [mainimage, setmainimage] = useState(0);
    const [quantity, setquantity] = useState(1);
    
    const navigate = useNavigate();
    const { product, handlecardclick, handlecart } = useContext(CartContext);

    // Agar product nahi mila toh Blank screen ke bajaye Loader/Message dikhayega
    if (!product) {
        return (
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h2>No product selected or page was refreshed!</h2>
                <button 
                    onClick={() => navigate("/Catalog")}
                    style={{ padding: "10px 20px", marginTop: "15px", cursor: "pointer" }}
                >
                    Go Back to Catalog
                </button>
            </div>
        );
    }

    let data = shoe.products || [];
    let similarproducts = data.filter(arr => arr.category === product.category && arr.id !== product.id);

    const decrementhandler = () => {
        setquantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const incrementhandler = () => {
        setquantity(prev => prev + 1);
    };

    
    return (
        <div className="cardview">
            <div className="cardcontents">
                <div className="mainimage"> 
                    <img 
                        src={product.image && product.image[mainimage] ? product.image[mainimage] : heroimage3} 
                        alt={product.name} 
                        onError={(e) => { e.target.src = heroimage3; }}
                    />
                </div>
                
                <div className="cardheadings">
                    <p style={{ fontSize: "30px", fontWeight: "400", color: "rgb(45, 82, 75)" }}>{product.name}</p>
                    <p>
                        {Array.from({ length: Math.floor(product.rating || 0) }).map((_, i) => (
                            <i key={i} className="fa-solid fa-star" style={{ color: "#E9C46A" }}></i>
                        ))}
                        {product.rating % 1 !== 0 && (
                            <i className="fa-solid fa-star-half-stroke" style={{ color: "#E9C46A" }}></i>
                        )}
                        ({product.reviews})
                    </p>
                    <p style={{ color: "#8d8b8b" }}>
                        Brand : <span style={{ color: "#117e54" }}>{product.brand}</span>
                    </p>
                    <p className="price">Rs {product.price}</p>
                </div>
            </div>

            <div className="imageflex">
                <div className="imagegallery">
                    {product.image && product.image.map((img, index) => (
                        <img 
                            src={img} 
                            key={index} 
                            alt="thumb" 
                            onClick={() => setmainimage(index)} 
                        />
                    ))}
                </div>
                <div className="cardviewbuttons">
                    <div className="quantity">
                        <p>Quantity </p>
                        <button id="decrement" onClick={decrementhandler}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <p>{quantity}</p>
                        <button id="increment" onClick={incrementhandler}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    
                    <div className="cartbuybtns">
                        <button id="Addtocart" onClick={() => handlecart(product, quantity)}>
                            Add to cart
                        </button>
                        <button id="BuyNow">Buy Now</button>
                    </div>
                </div>
            </div>
 <div className="cardviewwarranty" style={{ marginTop: "20px" }}>
  <h4 style={{ color: "#8d8b8b", marginBottom: "12px" }}>Service & Trust</h4>
  
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    {/* 3. Cash on Delivery (COD) */}
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <i className="fa-solid fa-hand-holding-dollar" style={{ color: "#2d524b", fontSize: "18px" }}></i>
      <p style={{ margin: 0, fontSize: "14px", color: "#444" }}>Cash on Delivery Available</p>
    </div>

    {/* 4. Secure Checkout */}
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <i className="fa-solid fa-lock" style={{ color: "#2d524b", fontSize: "18px" }}></i>
      <p style={{ margin: 0, fontSize: "14px", color: "#444" }}>Safe & Secure Checkout</p>
    </div>

  </div>
</div>
            <div className="cardviewdescription" style={{ marginTop: "20px", backdropFilter: "blur(10px)", padding: "20px", backgroundColor: "hsl(173, 64%, 92%)", borderRadius: "20px", border: "1px solid hsl(173, 31%, 74%)" }}>
                <p style={{ fontWeight: "700", fontSize: "19px", marginBottom: "15px", color: "rgb(45, 82, 75)" }}>Product Details</p>
                <p style={{ fontWeight: "700", fontSize: "19px", marginBottom: "15px", color: "rgb(45, 82, 75)" }}>Description:</p>
                <p id="description">{product.description}</p>
                
                <p style={{ fontWeight: "700", fontSize: "19px", marginBottom: "15px", color: "rgb(45, 82, 75)" }}>Features</p>
                {product.features && product.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "10px", marginLeft: "20px" }}>{feature}</li>
                ))}
                
                <p style={{ fontWeight: "700", fontSize: "19px", marginBottom: "15px", color: "rgb(45, 82, 75)" }}>Material</p>
                <p style={{ marginBottom: "15px" }}>{product.material}</p>
            </div>

            <div className="nextcards">
                <h1 style={{ fontWeight: "700", fontSize: "30px", color: "rgb(45, 82, 75)", marginLeft: "30px" }}>Similar products</h1>
                <div className="similarproducts">
                    {similarproducts.slice(0, 6).map((arr) => (
                        <div 
                            key={arr.id} 
                            className="collectioncard2" 
                            onClick={() => {
                                handlecardclick(arr);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img 
                                src={arr.image[0]} 
                                alt="shoes" 
                                onError={(e) => { e.target.src = heroimage3; }}
                            />
                            <h2>{arr.name}</h2>
                            <h3>Rs {arr.price}</h3>
                            <button 
                                className="AddCart2" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlecart(arr);
                                }}
                            >
                                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardView;

