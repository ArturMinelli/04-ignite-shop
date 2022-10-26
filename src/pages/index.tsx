import { HomeContainer } from "../styles/pages/home";
import { Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'

import Image from "next/future/image"

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer
      ref={sliderRef}
      className='keen-slider'
    >
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} alt="" width={400} height={400}/>

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
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
     price: price.unit_amount
    }
  })


  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
