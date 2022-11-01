import { Handbag } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { CartButtonContainer } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'white' | 'lightgray' | 'gray';
  backgroundColor: 'green' | 'gray';
  size: 'small' | 'large';
}

export function CartButton(props: CartButtonProps) {
  return (
    <CartButtonContainer
      {...props}
    >
      <Handbag weight="bold"/>
    </CartButtonContainer>
  )
}