import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 500,

  h1: {
    fontSize: '$2xl',
    fontWeight: 'bold',
    color: '$gray100'
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    maxWidth: 560,
    marginTop: '2rem',
  },

  a: {
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '$lg',
    textDecoration: 'none',
    marginTop: '5rem',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transform: 'translate(35px, 0)'
})

export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 175,
  height: 175,
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  marginBottom: '4rem',
  marginLeft: '-35px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    maxWidth: 175,
    objectFit: 'cover'
  }
})
