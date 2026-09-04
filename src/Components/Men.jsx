import React, { useState } from 'react'
import heroimage3 from '../assets/hero-image3.jpg'
 import CartContext from './Cartcontext'
import CardView from './CardView'
import {useContext} from 'react'
import { useNavigate } from "react-router-dom";
const Men = (props) => {
     const navigate = useNavigate();
      const {handlecardclick}=useContext(CartContext);
      const {handlecart}=useContext(CartContext);
        const [menu, setmenu] = useState(false);
                const handlemenu = () => {
                    console.log("toggling")
                    setmenu(!menu);
                }
     const [selected,setselected]=useState([])
    const handleCheckbox=(e)=>{
    const type=e.target.value;
    if(e.target.checked){
        setselected([...selected,type]);
    }
    else{
         setselected(
        selected.filter((item)=>item!==type)
    );
    }
   
    }
 
   
   
    return (
        <div className="collectionpart">
            <div className="collectionheading"><h1 style={{color:"#2d524b"}}>Men's <span style={{color:"#d29b2d"}}>Collection</span></h1></div>
            <div style={{marginBottom:"40px",marginLeft:"10px"}}>
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
</button></div>
            <div className="collectiondiv">
                <div className={`checkbox-bar ${menu ? "open" : ""}`}>
                <div className="checkboxes">
                    <div className="checkdiv">
                        <label>
                            <input type="checkbox" value="sneakers"  onChange={handleCheckbox}/>
                            Sneakers
                        </label>

                        <label>
                            <input type="checkbox" value="running"  onChange={handleCheckbox}/>
                            Running Shoes
                        </label>

                        <label>
                            <input type="checkbox" value="casual"  onChange={handleCheckbox}/>
                            Casual Shoes
                        </label>

                        <label>
                            <input type="checkbox" value="loafers"  onChange={handleCheckbox} />
                            Loafers
                        </label>

                        <label>
                            <input type="checkbox" value="formal"  onChange={handleCheckbox}/>
                            Formal Shoes
                        </label>

                        <label>
                            <input type="checkbox" value="boots"  onChange={handleCheckbox}/>
                            Boots
                        </label>

                        <label>
                            <input type="checkbox" value="basketball"  onChange={handleCheckbox}/>
                            Basketball
                        </label>

                        <label>
                            <input type="checkbox" value="walking"  onChange={handleCheckbox}/>
                            Walking Shoes
                        </label>

                        <label>
                            <input type="checkbox" value="outdoor"  onChange={handleCheckbox}/>
                            Outdoor Shoes
                        </label>

                        <label>
                            <input type="checkbox" value="slip-on"  onChange={handleCheckbox}/>
                            Slip On
                        </label>

                        <label>
                            <input type="checkbox" value="canvas"  onChange={handleCheckbox}/>
                            Canvas Shoes
                        </label>
                    </div>
</div>
                </div>
                <div className="collection">

                    {
                        props.products.filter((item)=>{
                        if (selected.length==0){
                            return true;
                        }
                        return selected.includes(item.type);
}).
                        map((arr) => (
                            <div key={arr.id} className="collectioncard" onClick={()=>{handlecardclick(arr);navigate("/CardView");}}>

                                <img src={arr.image[0]}
                                    alt="shoes"
                                    onError={(e) => {
                                        e.target.src = heroimage3
                                    }} />

                                <h2>{arr.name}</h2>
                                <h3>Rs {arr.price}</h3>
                                <p>{Array.from({ length: Math.floor(arr.rating) }).map((_, i) => {
                                    return (
                                        <i
                                            key={i}
                                            className="fa-solid fa-star" style={{ "color": "#E9C46A" }}
                                        ></i>)
                                })}
                                    {
                                        arr.rating % 1 !== 0 && (
                                            <i
                                                className="fa-solid fa-star-half-stroke"
                                                style={{ color: "#E9C46A" }}
                                            ></i>
                                        )
                                    }({arr.reviews})</p>
                                <button className="AddCart">Add to <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>


                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Men
