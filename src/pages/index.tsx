import { HomeContainer } from "../styles/pages/home";
import { Product } from "../styles/pages/home";
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'

import Image from "next/future/image"
import Head from 'next/head'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { CartButton } from "../components/CartButton";
import { MouseEvent } from "react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    console.log('hi')
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer
        ref={sliderRef}
        className='keen-slider'
      >
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product
              className="keen-slider__slide"
            >
              <Image src={product.imageUrl} alt="" width={400} height={400}/>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton
                  onClick={handleClick}
                  size="large"
                  color="white"
                  backgroundColor="green"
                />
              </footer>
            </Product>
            </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
     id: product.id,
     name: product.name,
     imageUrl: product.images[0],
     price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
     }).format(price.unit_amount / 100)
    }
  })


  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
