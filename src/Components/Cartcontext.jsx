import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Cart Items Count
  const [cartitem, setcartitem] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  // 2. Clicked Product (CardView ke liye)
  const [product, setproduct] = useState(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    return savedProduct ? JSON.parse(savedProduct) : null;
  });

  // 3. Cart Products Array (LocalStorage Sync)
  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Card click function
  const handlecardclick = (item) => {
    setproduct(item);
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  };

  // Add to Cart handler
  const handlecart = (item) => {
    const updatedCart = [...cartProducts, item];
    setCartProducts(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));

    const newCount = updatedCart.length;
    setcartitem(newCount);
    localStorage.setItem("cartCount", JSON.stringify(newCount));
  };

  // Remove from Cart handler
  const removeFromCart = (id) => {
    const updatedCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));

    const newCount = updatedCart.length;
    setcartitem(newCount);
    localStorage.setItem("cartCount", JSON.stringify(newCount));
  };

  return (
    <CartContext.Provider
      value={{
        cartitem,
        product,
        cartProducts,
        handlecardclick,
        handlecart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;