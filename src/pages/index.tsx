import { styled, theme } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500'
})

export default function Home() {
  return (
    <Button>
      Enviar
    </Button>
  )
}
