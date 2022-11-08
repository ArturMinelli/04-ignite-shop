import { Product } from "../../pages";
import { CartProductContainer } from "./styles";
import Image from 'next/future/image'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { QuantityInput } from "../QuantityInput";
import { useCart } from "../../hooks/useCart";

interface CartProductProps {
  product: Product
}

export function CartProduct({ product }: CartProductProps) {
  const { removeCartProduct, updateCartProduct } = useCart()

  return (
    <CartProductContainer
    key={product.id}
  >
    <div className="imageContainer">
      <Image src={product.imageUrl} alt='t-shirt image' width={80} height={80}/>
    </div>
    <div className="infoContainer">
      <span>{product.name}</span>
      <strong>
        {moneyFormatter.format(product.price/ 100)}
        <QuantityInput
          quantity={product.amount}
          onIncrement={() => updateCartProduct(product.id, 'increment')}
          onDecrement={() => updateCartProduct(product.id, 'decrement')}
        />
      </strong>
      <button
        onClick={() => removeCartProduct(product.id)}
      >
        Remover
      </button>
    </div>
  </CartProductContainer>
  )
}