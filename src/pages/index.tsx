import { HomeContainer } from "../styles/pages/home";
import { Product } from "../styles/pages/home";

import tShirt1 from '../assets/t-shirts/t-shirt-1.png'
import tShirt2 from '../assets/t-shirts/t-shirt-2.png'
import tShirt3 from '../assets/t-shirts/t-shirt-3.png'
import Image from "next/future/image";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tShirt1} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tShirt2} alt="" width={520} height={520}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
