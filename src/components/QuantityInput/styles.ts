import { styled } from "../../styles"

export interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled('div', {
  maxWidth: '8rem',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.25rem',
  borderRadius: 6,
  padding: '0.5rem',

  "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button": {
      '-webkit-appearance': 'none',
      margin: 0
  },

  input: {
    width: '100%',
    textAlign: 'center',
    background: 'transparent',
    border: 'none',
    color: '$gray100',

    '&:focus': {
      outline: 'none',
    }
  }
})

export const IconWrapper = styled('button', {
  width: '0.875rem',
  border: 'none',
  background: 'transparent',
  color: '$green100',
  transition: '0.4s',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'auto'
  }
})
