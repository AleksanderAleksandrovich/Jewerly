import Bracelets from '@/assets/Карусель/Браслеты.png'
import AllJewerly from '@/assets/Карусель/Все украшения.png'
import ForHim from '@/assets/Карусель/Для него.png'
import ForWedding from '@/assets/Карусель/Для свадьбы.png'
import Rings from '@/assets/Карусель/Кольца.png'
import Pendants from '@/assets/Карусель/Кулоны и медальоны.png'
import News from '@/assets/Карусель/Новинки.png'
import Earrings from '@/assets/Карусель/Серьги.png'
import { useEffect, useRef, useState } from 'react'
import SliderImg from './SliderImg'
import Button from '../Buttons/Button'
import Arrow from '@/assets/icons/Стрелочка на кнопках в слайдере.svg'
const Slider = () => {
  const [offset, setOffset] = useState<number>(0)
  const [elementWidth, setElementWidth] = useState<number>(0)
  const elementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (elementRef.current) {
      const width: number = elementRef.current.offsetWidth
      setElementWidth(width)
    }
  }, [])
  function handlRight() {
    setOffset((curOffset) => {
      const newOffset = curOffset - elementWidth
      const maxW = -(7 * elementWidth)
      return Math.max(newOffset, maxW)
    })
  }
  function handlLeft() {
    setOffset((curOffset) => {
      const newOffset = curOffset + elementWidth
      return Math.min(newOffset, 0)
    })
  }

  return (
    <div className="relative w-full " ref={elementRef}>
      <div className="w-full overflow-hidden">
        <div
          className="flex w-full transition-all duration-700"
          style={{ transform: `translateX(${offset}px)` }}
        >
          <SliderImg text="Все украшения" img={AllJewerly} />
          <SliderImg text="Браслеты" img={Bracelets} />
          <SliderImg text="Для него" img={ForHim} />
          <SliderImg text="Для свадьбы" img={ForWedding} />
          <SliderImg text="Кольца" img={Rings} />
          <SliderImg text="Кулоны и медальоны" img={Pendants} />
          <SliderImg text="Новинки" img={News} />
          <SliderImg text="Серьги" img={Earrings} />
        </div>
      </div>
      <Button
        buttonProps={{
          onClick: handlLeft,
          className:
            'absolute top-[calc(50%-1.5rem)] left-[15rem] rounded-full border-white border-[1px] w-[3.25rem] h-[3.25rem] flex items-center px-[1.2rem]',
        }}
      >
        <img className="rotate-180" src={Arrow} alt="" />
      </Button>
      <Button
        buttonProps={{
          onClick: handlRight,
          className:
            'absolute top-[calc(50%-1.5rem)] right-[15rem] rounded-full border-white border-[1px] w-[3.25rem] h-[3.25rem] flex items-center justify-center',
        }}
      >
        <img src={Arrow} alt="" />
      </Button>
    </div>
  )
}

export default Slider
