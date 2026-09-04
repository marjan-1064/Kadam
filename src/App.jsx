
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CategoryHome from './Components/CategoryHome'
import FeaturedHome from './Components/FeaturedHome'
import HomeOff from './Components/HomeOff'
import Homelastsection from './Components/Homelastsection'
import Cartpages from './Components/Cartpages'
import About from './Components/About'
import { useEffect } from 'react'
// import Shoes from './Components/Shoes'
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
      <BrowserRouter>
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
      </BrowserRouter>

    </>
  )
}

export default App
