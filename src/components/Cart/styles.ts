import { DialogContent } from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const CartContent = styled(DialogContent, {
  gap: '2rem',

  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  width: '28rem',
  padding: '2rem',
  paddingTop: '2.5rem',
  backgroundColor: '$gray800',
  display: 'flex',
  flexDirection: 'column',

  '& > button': {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '$gray300',
  },

  h2: {
    fontSize: '$lg',
    color: '$gray100',
  }
})

export const CartProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const CartProduct = styled('div', {
  display: 'flex',
  gap: '0.75rem',

  '.imageContainer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
      width: 80,
      height: 80,
      borderRadius: 6,

      img: {
        objectFit: 'cover'
      }
  },

  '.infoContainer': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    span: {
      color: '$gray300',
      fontSize: '$md',
    },

    strong: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '$md',
      fontWeight: 'bold',
    },

    button: {
      width: 'fit-content',
      color: '$green500',
      fontSize: '$md',
      fontWeight: 'bold',
      background: 'transparent',
      border: 'none',
      marginTop: 'auto',
      transition: 'all 0.2s',

      '&:hover': {
        cursor: 'pointer',
        color: '$green300',
      }
    }
  }
})

export const CartFooter = styled('footer', {
  marginTop: 'auto',
  gap: '0.75rem',
  fontSize: '$md',

  '.quantity': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray300',
  },

  '.total': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray100',
    fontWeight: 'bold',

    span: {
      fontSize: '$xl',
    }
  },

  button: {
    marginTop: '3.5rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    background: '$green500',
    border: 'none',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    borderRadius: 8,
    padding: '1.25rem 2rem',
    transition: 'all 0.25s',

    '&:hover': {
      cursor: 'pointer',
      background: '$green300'
    }
  }
})
