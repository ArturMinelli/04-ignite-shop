import { createContext, ReactNode, useState } from "react"
import { Product } from "../pages";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: Product[];
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState([])

  return (
    <CartContext.Provider
      value={{
        cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}