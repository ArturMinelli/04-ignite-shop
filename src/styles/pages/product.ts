import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 875,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 500,
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    fontSize: '$md',
    marginTop: '2.5rem',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    width: '100%',
    border: 'none',
    borderRadius: 8,
    backgroundColor: '$green500',
    color: '$white',
    padding: '1rem 2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '$md',
    transition: 'all 0.2s',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})
