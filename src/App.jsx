

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CategoryHome from './Components/CategoryHome'
import FeaturedHome from './Components/FeaturedHome'
import HomeOff from './Components/HomeOff'
import Homelastsection from './Components/Homelastsection'
import Cartpages from './Components/Cartpages'
import About from './Components/About'
import Footer from './Components/Footer'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import shoe from './shoes.json'
import Men from './Components/Men'
import Women from './Components/Women'
import Kids from './Components/Kids'
import Sports from './Components/Sports'
import Gucci from './Components/Gucci'
import Nike from './Components/Nike'
import Adidas from './Components/Adidas'
import Bata from './Components/Bata'
import Catalog from './Components/Catalog'
import CardView from './Components/CardView'
import { CartProvider } from './Components/Cartcontext'
function App() {
  let men = []
  let women = []
  let kids = []
  let sports=[]
    let data = shoe.products;

    men = data.filter(arr => arr.category === "men")

    women = data.filter(arr => arr.category === "women")


    kids = data.filter(arr => arr.category === "kids")

    sports= data.filter(arr => arr.category === "sports")


    let gucci = []
  let adidas = []
  let bata = []
  let nike=[]
    let data1 = shoe.products;

    gucci = data1.filter(arr => arr.brand === "Gucci")

    adidas = data.filter(arr => arr.brand === "Adidas")


    bata = data.filter(arr => arr.brand === "Bata")

    nike= data.filter(arr => arr.brand === "Nike")

  return (
    <>
    
<a 
  href="https://github.com/marjan-1064/Kadam" 
  target="_blank" 
  rel="noreferrer"
  style={{
    position: "fixed",
    bottom: "15px",
    right: "15px",
    backgroundColor: "rgba(45, 82, 75, 0.85)",
    color: "#E9C46A",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    backdropFilter: "blur(4px)",
    zIndex: 9999,
    border: "1px solid #E9C46A"
  }}
>
  ⚡ Built by Marjan
</a>
      <BrowserRouter basename="/Kadam">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>   <Home />
              <CategoryHome />
              
              <FeaturedHome />
              <HomeOff />
              <Homelastsection /></>

          } />
          <Route exact
            path="/Men"
            element={<Men products={men} />}
          />
          <Route exact
            path="/Women"
            element={<Women products={women} />}
          />
          <Route exact
            path="/Kids"
            element={<Kids products={kids} />}
          />
          <Route exact
            path="/Sports"
            element={<Sports products={sports} />}
          />
          <Route exact
            path="/Gucci"
            element={<Gucci products={gucci} />}
          />
          <Route exact
            path="/Adidas"
            element={<Adidas products={adidas} />}
          />
          <Route exact
            path="/Bata"
            element={<Bata products={bata} />}
          />
          <Route exact
            path="/Nike"
            element={<Nike products={nike} />}
          />
          <Route exact
            path="/Catalog"
            element={<Catalog products={data} />}
          />
          <Route path="/CardView" element={<CardView />} />
           <Route path="/Cartpages" element={<Cartpages />} />
            <Route path="/About" element={<About/>} />
        </Routes>
</CartProvider>
<Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
