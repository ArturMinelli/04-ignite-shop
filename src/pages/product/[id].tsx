import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import Image from 'next/future/image'
import tShirt1 from '../../assets/t-shirts/t-shirt-1.png'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import handler from '../api/checkout'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'
import { useCart } from '../../hooks/useCart'
import { moneyFormatter } from '../../utils/moneyFormatter'

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { addCartProduct } = useCart()
  console.log(product)

  if(!product) {
    return <></>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={400} height={400} alt="Product image"/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{moneyFormatter.format(product.price / 100)}</span>

          <p>{product.description}</p>

          <button onClick={() => addCartProduct({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            defaultPriceId: product.defaultPriceId
          })}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}


export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price  = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
