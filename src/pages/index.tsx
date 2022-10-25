import { HomeContainer } from "../styles/pages/home";
import { Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'

import tShirt1 from '../assets/t-shirts/t-shirt-1.png'
import tShirt2 from '../assets/t-shirts/t-shirt-2.png'
import tShirt3 from '../assets/t-shirts/t-shirt-3.png'
import Image from "next/future/image"

import 'keen-slider/keen-slider.min.css'

export default function Home() {
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
      <Product className="keen-slider__slide">
        <Image src={tShirt1} alt="" width={520} height={480}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt2} alt="" width={520} height={520}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt3} alt="" width={520} height={520}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt3} alt="" width={520} height={520}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt3} alt="" width={520} height={520}/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
