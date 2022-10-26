import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import Image from 'next/future/image'
import tShirt1 from '../../assets/t-shirts/t-shirt-1.png'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import handler from '../../api/checkout'

interface Productprops {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: Productprops) {
  function handleBuyProduct() {
    console.log(product.defaultPriceId)
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={tShirt1} width={400} height={400} alt="Product image"/>
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
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
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
