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
      onClick={() => console.log('hi there')}>
      <Handbag weight="bold"/>
    </HandbagButtonContainer>
  )
}