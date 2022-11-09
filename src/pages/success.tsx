import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/future/image'
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products}: SuccessProps) {
  console.log(products)

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex"/>
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer>
              <Image src={product.imageUrl} alt={product.name} width={175} height={175}/>
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        {products.length === 1 ? (
          <p>
            Uhuul <strong>{customerName}</strong>, sua <strong>{products[0].name}</strong> já está a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de {products.length} produtos já está a caminho da sua casa.
          </p>
        )}

        <Link
          href='/'
        >
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product

    return {
      name: product.name,
      imageUrl: product.images[0]
    }
  })
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      products,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    },
  };
}
