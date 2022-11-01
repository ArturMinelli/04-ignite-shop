import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg  from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from 'next/future/image'
import Link from "next/link"
import { HandbagButton } from "../components/HandbagButton"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link
          href='/'
        >
          <Image src={logoImg} alt="Ignite Shop logo"/>
        </Link>

        <HandbagButton
          size="small"
          color="gray"
          backgroundColor="gray"
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
