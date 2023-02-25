import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);

  const agregarAlCarrito = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      if (item.cantidad) {
        updatedCart[index].cantidad += item.cantidad;
      } else {
        updatedCart[index].cantidad++;
      }
      setCart(updatedCart);
    } else {
      if (item.cantidad) {
        setCart([...cart, { ...item }]);
      } else {
        setCart([...cart, { ...item, cantidad: 1 }]);
      }
    }
  };

  const removerItem = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[index].cantidad > 1) {
        updatedCart[index].cantidad--;
      } else {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptycart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        removerItem,
        isInCart,
        emptycart,
        totalCart,
        totalCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
