import Bracelets from '@/assets/Карусель/Браслеты.png'
import AllJewerly from '@/assets/Карусель/Все украшения.png'
import ForHim from '@/assets/Карусель/Для него.png'
import ForWedding from '@/assets/Карусель/Для свадьбы.png'
import Rings from '@/assets/Карусель/Кольца.png'
import Pendants from '@/assets/Карусель/Кулоны и медальоны.png'
import News from '@/assets/Карусель/Новинки.png'
import Earrings from '@/assets/Карусель/Серьги.png'
import { useEffect, useState } from 'react'
import SliderImg from './SliderImg'
import Button from '../Buttons/Button'
import Arrow from '@/assets/icons/Стрелочка на кнопках в слайдере.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const imgs = [
  { img: AllJewerly, text: 'Все украшения', url: '/catalog' },
  { img: News, text: 'Новинки', url: '/catalog/news' },
  { img: Pendants, text: 'Кулоны и медальоны', url: '/catalog/pendants' },
  { img: Rings, text: 'Кольца', url: '/catalog/rings' },
  { img: Earrings, text: 'Серьги', url: '/catalog/earrings' },
  { img: Bracelets, text: 'Браслеты', url: '/catalog/bracelets' },
  { img: ForWedding, text: 'Для свадьбы', url: '/catalog/forWedding' },
  { img: ForHim, text: 'Для него', url: '/catalog/forHim' },
]
const Slider = () => {
  const nav = useNavigate()
  const location = useLocation()

  const [indexImg, setIndexImg] = useState<number>(() => {
    return imgs.findIndex((el) => el.url === location.pathname)
  })

  const handleRight = () => {
    setIndexImg((index) => (index === imgs.length - 1 ? 0 : index + 1))
  }

  const handleLeft = () => {
    setIndexImg((index) => (index === 0 ? imgs.length - 1 : index - 1))
  }

  useEffect(() => {
    const el = imgs[indexImg]

    nav(el.url)
  }, [indexImg])

  useEffect(() => {
    const foundIndex = imgs.findIndex((el) => el.url === location.pathname)
    if (foundIndex !== -1) {
      setIndexImg(foundIndex)
    }
  }, [location])

  return (
    <div className="mt-[1.5rem] w-full">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full transition-all duration-700"
          style={{ translate: `${-100 * indexImg}%` }}
        >
          {imgs.map((el) => (
            <SliderImg {...el} key={el.text} />
          ))}
        </div>
        <Button
          buttonProps={{
            onClick: handleLeft,
            className:
              'hover:bg-primary-500 transition duration-500 absolute top-[calc(50%-1rem)] sm:top-[calc(50%-1.625rem)] left-[4rem] sm:left-[5rem] xl:left-[3rem] 2xl:left-[11rem] rounded-full border-white border-[1px] w-[2.5rem] h-[2.5rem] sm:w-[3.25rem] sm:h-[3.25rem] flex items-center px-[0.8rem] sm:px-[1.2rem]',
          }}
        >
          <img className="rotate-180" src={Arrow} alt="" />
        </Button>
        <Button
          buttonProps={{
            onClick: handleRight,
            className:
              'hover:bg-primary-500 transition duration-500 absolute top-[calc(50%-1rem)] sm:top-[calc(50%-1.625rem)] right-[4rem] sm:right-[5rem] xl:right-[3rem] 2xl:right-[11rem] rounded-full border-white border-[1px] w-[2.5rem] h-[2.5rem] sm:w-[3.25rem] sm:h-[3.25rem] flex items-center justify-center',
          }}
        >
          <img src={Arrow} alt="" />
        </Button>
      </div>

      <div className="flex flex-wrap justify-center pt-4">
        {imgs.map((el, index) => (
          <Button
            key={el.text}
            buttonProps={{
              onClick: () => {
                setIndexImg(index)
              },
              className: `${
                indexImg === index && 'font-geoMed'
              } pt-3 text-[1.25rem] sm:text-[1.5rem] px-[1rem] sm:px-[1.5rem]`,
            }}
          >
            {el.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Slider
