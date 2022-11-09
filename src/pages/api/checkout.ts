import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../lib/stripe"

interface CheckoutHandlerRequest {
  product
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cartProducts } = req.body

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
      return cartProduct.def
    }),
    success_url: successUrl,
    cancel_url: cancelUrl
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}