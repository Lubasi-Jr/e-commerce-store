"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CartItem = {
  product: Product;
  quantity: number;
};

// Define the Context Type in order to Create The Context Properly
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalPrice: number;
};

// Create the Context with the specified type
// This means that CartContext.Provider must have a value of CartContextType
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  // In other components, you would import the CartContext, and useContext so as to obtain the values parsed by the provider
  // We create an abstraction by creating this custom hook. So no need for redundant code
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Context Wrapper, necessary for initialising all the variables of the Context Type
// Has functions to modify the Context type as well
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Initial use effect to get the current cart when the DOM loads
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // useEffect for whenever the cart changes, it can change using the various functions of add, delete and clear
    localStorage.setItem("cart", JSON.stringify(cart));
    // update the cart in the storage to its new version. This could also be a DB or Redis update but we use localStorage for simplicity

    // When cart changes, price is likely to change too
    const total = cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.product.id === product.id);
      if (exists) {
        return prevCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    // Wrap the application with the Provider
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
