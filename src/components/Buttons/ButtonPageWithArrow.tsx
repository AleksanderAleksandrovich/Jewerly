import Button from './Button'
import Arrow from '@/assets/icons/Стрелочка на некоторых кнопках.svg'

type Prop = {
  children: React.ReactNode
  style: string
}
export const ButtonPageWithArrow = ({ children, style }: Prop) => {
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
