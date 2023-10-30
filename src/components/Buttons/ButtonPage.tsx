import { NavLink } from 'react-router-dom'
import Button from './Button'
import Arrow from '@/assets/icons/Стрелочка на некоторых кнопках.svg'

type PropsButtonPage = {
  page: string
  className?: string
}

type PropsButtonPageWithImg = PropsButtonPage & {
  img: string
}

type PropButtonPageWithArrow = {
  children: React.ReactNode
  style: string
}

export const ButtonPage = ({ page, className }: PropsButtonPage) => {
  return (
    <Button
      buttonProps={{
        className: `${className} mb-[0.5rem] text-start`,
      }}
    >
      <span className="whitespace-nowrap text-[2rem] text-primary-500 sm:text-[2.5rem] xl:text-[1.5rem]">
        <NavLink to="/catalog">{page}</NavLink>
      </span>
    </Button>
  )
}

export const ButtonPageWithImg = ({
  page,
  img,
  className,
}: PropsButtonPageWithImg) => {
  const Icon = (
    <div className="h-[1.6rem] w-[1.6rem]">
      <img
        className="min-h-[1.6rem] min-w-[1.6rem]"
        src={img}
        alt={`img-${img}`}
      />
    </div>
  )
  return (
    <Button
      buttonProps={{
        className: `${className} flex items-center justify-start gap-5`,
      }}
      iconLeft={Icon}
    >
      <div className="whitespace-nowrap text-[1.25rem] tracking-tight transition duration-500 hover:text-primary-500 sm:text-[1.5rem]">
        {page}
      </div>
    </Button>
  )
}

export const ButtonPageWithArrow = ({
  children,
  style,
}: PropButtonPageWithArrow) => {
  return (
    <Button
      iconRight={<img src={Arrow} alt="arrow" />}
      buttonProps={{
        className: `${style} flex text-white border-b-[1px] border-white  items-center justify-betwine whitespace-nowrap py-2  tracking-tight gap-[1.5rem]`,
      }}
    >
      {children}
    </Button>
  )
}
