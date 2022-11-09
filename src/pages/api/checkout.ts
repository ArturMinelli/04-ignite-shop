import { NextApiRequest, NextApiResponse } from "next"
import { Product } from ".."
import { stripe } from "../../lib/stripe"

interface CheckoutHandlerRequest {
  cartProducts: Product[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cartProducts }: CheckoutHandlerRequest = req.body

  if(req.method !== 'POST') {
    return res.status(405).json({ error: "method not allowed" })
  }

  if(cartProducts.length === 0) {
    return res.status(400).json({
      message: "You have no products in your cart!"})
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: cartProducts.map((cartProduct) => {
      return {
        price: cartProduct.defaultPriceId,
        quantity: cartProduct.amount
      }
    }),
    success_url: successUrl,
    cancel_url: cancelUrl
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}