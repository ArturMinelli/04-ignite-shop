import { createContext, ReactNode, useState } from "react"
import { Product } from "../pages";
import { produce } from 'immer'

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartProducts: Product[];
  addCartProduct: (product: Product) => void;
  updateCartProduct: (productId: string, type: 'increment' | 'decrement') => void;
  removeCartProduct: (productId: string) => void;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  function addCartProduct(product: Product) {
    const newCartProducts = produce(cartProducts, (draft) => {
      const productAlreadyInCart = cartProducts.findIndex((cartProduct) => cartProduct.name === product.name)

      if(productAlreadyInCart === -1) {
        product.amount = 1
        draft.push(product)
      } else {
        draft[productAlreadyInCart].amount += 1
      }
    })

    setCartProducts(newCartProducts)
  }

  function updateCartProduct(productId: string, type: 'increment' | 'decrement') {
    const newCartProducts = produce(cartProducts, (draft) => {
      const product = draft.find((product) => product.id === productId)

      if(type === 'increment') {
        product.amount += 1
      } else {
        product.amount -= 1
      }
    })

    setCartProducts(newCartProducts)
  }

  function removeCartProduct(productId: string) {
    const newCartProducts = produce(cartProducts, (draft) => {
      const cartProductIndex = draft.findIndex((product) => product.id === productId)
      draft.splice(cartProductIndex, 1)
    })

    setCartProducts(newCartProducts)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addCartProduct,
        updateCartProduct,
        removeCartProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}