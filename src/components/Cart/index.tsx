import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import { CartContent, CartFooter, CartItem, CartItemsContainer } from './styles'
import { X } from 'phosphor-react'
import Image from 'next/future/image'

import tShirt from '../../assets/t-shirts/t-shirt-1.png'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton
          size="small"
          color="gray"
          backgroundColor="gray"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <Dialog.Close>
            <X size={20} weight="bold"/>
          </Dialog.Close>
          <h2>Sacola de compras</h2>

          <CartItemsContainer>
            <CartItem>
              <div className="imageContainer">
                <Image src={tShirt} alt='' width={80} height={80}/>
              </div>
              <div className="infoContainer">
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 69,90</strong>
                <button>Remover</button>
              </div>
            </CartItem>
            <CartItem>
              <div className="imageContainer">
                <Image src={tShirt} alt='' width={80} height={80}/>
              </div>
              <div className="infoContainer">
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 69,90</strong>
                <button>Remover</button>
              </div>
            </CartItem>
            <CartItem>
              <div className="imageContainer">
                <Image src={tShirt} alt='' width={80} height={80}/>
              </div>
              <div className="infoContainer">
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 69,90</strong>
                <button>Remover</button>
              </div>
            </CartItem>
          </CartItemsContainer>

          <CartFooter>
            <div className="quantity">
              Quantidade
              <span>3</span>
            </div>
            <div className="total">
              Valor total
              <span>R$ 69,90</span>
            </div>
            <button>Finalizar compra</button>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
