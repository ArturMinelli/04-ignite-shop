import { styled, theme } from "../../styles";

export const HandbagButtonContainer = styled('button', {
  padding: '0.5rem',
  border: 'none',
  borderRadius: 6,

  variants: {
      color: {
      white: {color: '$white'},
      lightgray: {color: '$gray100'},
      gray: {color: '$gray300'},
    },
    backgroundColor: {
      green: {backgroundColor: '$green500'},
      gray: {backgroundColor: '$gray800'}
    },
    size: {
      small: {svg: {width: 24, height: 24}},
      large: {svg: {width: 32, height: 32}}
    }
  }
})