import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

export interface QuantityInputProps {
  quantity?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityInput({ quantity=0, onIncrement, onDecrement }: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper type="button" disabled={quantity <= 0} >
        <Minus size={22} weight="fill" onClick={onDecrement}/>
      </IconWrapper>
      <input type="number" readOnly value={quantity} min="1" />
      <IconWrapper type="button">
        <Plus size={22} weight="fill" onClick={onIncrement}/>
      </IconWrapper>
    </QuantityInputContainer>
  )
}