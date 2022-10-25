import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg  from '../assets/logo.svg'
import { Container, Header, LogoContainer } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <img src={logoImg.src} alt="logo" />
          <div>
            <strong>Ignite</strong>
            <span>shop</span>
          </div>
        </LogoContainer>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
