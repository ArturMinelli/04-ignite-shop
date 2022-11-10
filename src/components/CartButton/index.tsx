import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { CartButtonContainer } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'white' | 'lightgray' | 'gray';
  backgroundColor: 'green' | 'gray';
  size: 'small' | 'large';
  cartProductsAmount?: number;
}

export const CartButton = forwardRef<any, CartButtonProps>(({ cartProductsAmount = 0, ...rest }, ref) => {
  return (
    <CartButtonContainer
      {...rest}
      ref={ref}
    >
      <Handbag weight="bold"/>
      {cartProductsAmount > 0 && (
        <span>{cartProductsAmount}</span>
      )}
    </CartButtonContainer>
  )
})


// export function CartButton({ cartProductsAmount = 0, ...rest }: CartButtonProps) {
//   return (
//     <CartButtonContainer
//       {...rest}
//     >
//       <Handbag weight="bold"/>
//       {cartProductsAmount > 0 && (
//         <span>{cartProductsAmount}</span>
//       )}
//     </CartButtonContainer>
//   )
// }