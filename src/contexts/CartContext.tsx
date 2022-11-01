import { createContext, ReactNode, useState } from "react"
import { Product } from "../pages";
import { produce } from 'immer'

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartProducts: Product[];
  addCartProduct: (product: Product) => void;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState([])

  function addCartProduct(product: Product) {
    const newCartProducts = produce(cartProducts, (draft) => {
      draft.push(product)
    })

    setCartProducts(newCartProducts)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}