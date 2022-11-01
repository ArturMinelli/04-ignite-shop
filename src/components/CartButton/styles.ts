import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  padding: '0.5rem',
  border: 'none',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  '&:hover': {
    cursor: 'pointer',
  },

  span: {
    position: 'absolute',
    top: '-25%',
    right: '-25%',

    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.25rem',
    background: '$green500',
    borderRadius: '50%'
  },

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