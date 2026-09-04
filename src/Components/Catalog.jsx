import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import heroimage3 from '../assets/hero-image3.jpg';
import CartContext from './Cartcontext';

const Catalog = ({ products = [] }) => {
  const [selectedtype, setselectedtype] = useState([]);
  const [selectedbrand, setselectedbrand] = useState([]);
  const [category, setcategory] = useState([]);
  const [menu, setmenu] = useState(false);

  const navigate = useNavigate();
  const { handlecardclick, handlecart } = useContext(CartContext);

  const handleCheckbox = (e) => {
    const type = e.target.value;
    if (e.target.checked) {
      setselectedtype([...selectedtype, type]);
    } else {
      setselectedtype(selectedtype.filter((item) => item !== type));
    }
  };

  const handlecategory = (e) => {
    const categorytype = e.target.value;
    if (e.target.checked) {
      setcategory([...category, categorytype]);
    } else {
      setcategory(category.filter((item) => item !== categorytype));
    }
  };

  const handlebrand = (e) => {
    const brandtype = e.target.value;
    if (e.target.checked) {
      setselectedbrand([...selectedbrand, brandtype]);
    } else {
      setselectedbrand(selectedbrand.filter((item) => item !== brandtype));
    }
  };

  const filteredproducts = products.filter((e) => {
    const typematch = selectedtype.length === 0 || selectedtype.includes(e.type);
    const brandmatch = selectedbrand.length === 0 || (e.brand && selectedbrand.includes(e.brand.toLowerCase()));
    const categorymatch = category.length === 0 || category.includes(e.category);

    return categorymatch && brandmatch && typematch;
  });

  const handlemenu = () => {
    setmenu(!menu);
  };

  return (
    <div>
      <div className="collectionpart">
        <div className="collectionheading">
          <h1 style={{ color: "#2d524b" }}>Catalog</h1>
        </div>

        <div style={{ marginBottom: "40px", marginLeft: "10px" }}>
          {/* <button className="hamburger" style={{ backgroundColor: "#fff" }} onClick={handlemenu}>
            <i className="fa-solid fa-bars" style={{ color: "#2d524b", marginBottom: "10px", backgroundColor: "#fff"}}></i>
          Filters</button> */}
          <button 
  className="hamburger" 
  onClick={handlemenu}
  style={{ 
    backgroundColor: "#2d524b", 
    border: "1px solid #fff", 
    color: "#fff", 
    padding: "8px 16px", 
    borderRadius: "6px", 
    display: "inline-flex", 
    alignItems: "center", 
    gap: "8px", 
    cursor: "pointer", 
    fontWeight: "600",
    fontSize: "14px"
  }}
>
  <i className="fa-solid fa-filter" style={{ backgroundColor: "#2d524b",color:"#fff" }}></i>
  Filters
</button>
        </div>

        <div className="collectiondiv">
          <div className={`checkbox-bar ${menu ? "open" : ""}`}>
            <div className="checkboxes">
              <div className="checkdiv">
                <h2 style={{ color: "#2d524b" }}>Category</h2>
                <label>
                  <input type="checkbox" value="men" onChange={handlecategory} />
                  Men
                </label>
                <label>
                  <input type="checkbox" value="women" onChange={handlecategory} />
                  Women
                </label>
                <label>
                  <input type="checkbox" value="kids" onChange={handlecategory} />
                  Kids
                </label>

                <h2 style={{ color: "#2d524b" }}>Brands</h2>
                <label>
                  <input type="checkbox" value="adidas" onChange={handlebrand} />
                  Adidas
                </label>
                <label>
                  <input type="checkbox" value="nike" onChange={handlebrand} />
                  Nike
                </label>
                <label>
                  <input type="checkbox" value="bata" onChange={handlebrand} />
                  Bata
                </label>
                <label>
                  <input type="checkbox" value="gucci" onChange={handlebrand} />
                  Gucci
                </label>

                <h2 style={{ color: "#2d524b" }}>Shoe Types</h2>
                <label>
                  <input type="checkbox" value="sneakers" onChange={handleCheckbox} />
                  Sneakers
                </label>
                <label>
                  <input type="checkbox" value="running" onChange={handleCheckbox} />
                  Running Shoes
                </label>
                <label>
                  <input type="checkbox" value="casual" onChange={handleCheckbox} />
                  Casual Shoes
                </label>
                <label>
                  <input type="checkbox" value="loafers" onChange={handleCheckbox} />
                  Loafers
                </label>
                <label>
                  <input type="checkbox" value="formal" onChange={handleCheckbox} />
                  Formal Shoes
                </label>
                <label>
                  <input type="checkbox" value="boots" onChange={handleCheckbox} />
                  Boots
                </label>
                <label>
                  <input type="checkbox" value="basketball" onChange={handleCheckbox} />
                  Basketball
                </label>
                <label>
                  <input type="checkbox" value="walking" onChange={handleCheckbox} />
                  Walking Shoes
                </label>
                <label>
                  <input type="checkbox" value="outdoor" onChange={handleCheckbox} />
                  Outdoor Shoes
                </label>
                <label>
                  <input type="checkbox" value="slip-on" onChange={handleCheckbox} />
                  Slip On
                </label>
                <label>
                  <input type="checkbox" value="canvas" onChange={handleCheckbox} />
                  Canvas Shoes
                </label>
              </div>
            </div>
          </div>

          <div className="collection">
            {filteredproducts.map((arr) => (
              <div
                key={arr.id}
                className="collectioncard"
                onClick={() => {
                  handlecardclick(arr);
                  navigate("/CardView");
                }}
              >
        
                <img
                  src={arr.image && arr.image[0] ? arr.image[0] : heroimage3}
                  alt="shoes"
                  onError={(e) => {
                    e.target.src = heroimage3;
                  }}
                />

                <h2>{arr.name}</h2>
                <h3>Rs {arr.price}</h3>
                <p>
                  {Array.from({ length: Math.floor(arr.rating || 0) }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ color: "#E9C46A" }}></i>
                  ))}
                  {arr.rating % 1 !== 0 && (
                    <i className="fa-solid fa-star-half-stroke" style={{ color: "#E9C46A" }}></i>
                  )}
                  ({arr.reviews})
                </p>

                {/* stopPropagation se card ka navigate handler trigger nahi hoga */}
                <button
                  className="AddCart"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlecart(arr);
                  }}
                >
                  Add to <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
