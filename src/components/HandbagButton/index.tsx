import { Handbag } from "phosphor-react";
import { HandbagButtonContainer } from "./styles";

interface HandbagButtonProps {
  color: 'white' | 'lightgray' | 'gray';
  backgroundColor: 'green' | 'gray';
  size: 'small' | 'large';
}

export function HandbagButton(props: HandbagButtonProps) {
  return (
    <HandbagButtonContainer
      {...props}
    >
      <Handbag weight="bold"/>
    </HandbagButtonContainer>
  )
}