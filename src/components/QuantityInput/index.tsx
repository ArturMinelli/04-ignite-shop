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
      <IconWrapper type="button" disabled={quantity <= 1} onClick={onDecrement}>
        <Minus size={22} weight="fill"/>
      </IconWrapper>
      <input type="number" readOnly value={quantity} min="1"/>
      <IconWrapper type="button" onClick={onIncrement}>
        <Plus size={22} weight="fill"/>
      </IconWrapper>
    </QuantityInputContainer>
  )
}