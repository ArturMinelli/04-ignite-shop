import { HomeContainer } from "../styles/pages/home";
import { Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'

import tShirt1 from '../assets/t-shirts/t-shirt-1.png'
import tShirt2 from '../assets/t-shirts/t-shirt-2.png'
import tShirt3 from '../assets/t-shirts/t-shirt-3.png'
import Image from "next/future/image"

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async () => {
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
  }
}
