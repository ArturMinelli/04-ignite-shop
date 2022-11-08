import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import { CartContent, CartFooter, CartProductsContainer } from './styles'
import { X } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { CartProduct } from './CartProduct'

export function Cart() {
  const { cartProducts, removeCartProduct } = useCart()

  const carProducstAmount = cartProducts.length
  const totalPrice = cartProducts.reduce((accum, product) => {
    return accum + (product.price * product.amount)
  }, 0)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton
          size="small"
          color="gray"
          backgroundColor="gray"
          cartProductsAmount={carProducstAmount}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <Dialog.Close>
            <X size={20} weight="bold"/>
          </Dialog.Close>
          <h2>Sacola de compras</h2>

          <CartProductsContainer>
            {cartProducts.map((product) => {
              return (
                <CartProduct
                  key={product.id}
                  product={product}
                />
              )
            })}
          </CartProductsContainer>

          <CartFooter>
            <div className="quantity">
              Quantidade
              <span>{carProducstAmount}</span>
            </div>
            <div className="total">
              Valor total
              <span>{moneyFormatter.format(totalPrice / 100)}</span>
            </div>
            <button>Finalizar compra</button>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
