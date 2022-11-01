import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg  from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from 'next/future/image'
import Link from "next/link"

import { Cart } from "../components/Cart"
import { CartProvider } from "../contexts/CartContext"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header>
          <Link
            href='/'
          >
            <Image src={logoImg} alt="Ignite Shop logo"/>
          </Link>

          <Cart />

        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
