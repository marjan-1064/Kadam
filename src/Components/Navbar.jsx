import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useContext } from 'react'
import CartContext from './Cartcontext'
function Navbar() {
    const [menu, setmenu] = useState(false);
    const handlemenu = () => {
        console.log("toggling")
        setmenu(!menu);
    }
   const { cartitem } = useContext(CartContext);
   
    return (
        <>
            <div className="Navbar">
                <div className="navbb">
                    <button className="hamburger" onClick={handlemenu}><i className="fa-solid fa-bars"></i></button>
                    <span className="Logo"><span>Ka</span>dam</span>
                    <div className={`nav-link-bar ${menu ? "open" : ""}`}>
                        <div className="Nav-links" >
                            <Link to="/" onClick={() => setmenu(false)}>Home</Link>
                            <Link to="/About" onClick={() => setmenu(false)}>About</Link>
                            <Link to="/Catalog" onClick={() => setmenu(false)}>Catalog</Link>
                            <Link to="/Cartpages" onClick={() => setmenu(false)}><i className="fa-solid fa-cart-shopping"></i><sup style={{ "color": "#F4A261 ", "borderRadius": "50%", "height": "20px", "width": "20px", display: "inline-block", "textAlign": "center", "fontWeight": "bold" }}>{cartitem}</sup></Link>
                        </div>
                    </div>
                </div>
                
            </div>


        </>
    )
}
export default Navbar;