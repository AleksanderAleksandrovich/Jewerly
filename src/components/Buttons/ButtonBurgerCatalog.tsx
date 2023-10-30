import { useState } from 'react'
import Button from './Button'

type Props = {
  page: string
  imgLeft: string
  imgRight: string
  onClick: () => void
}

const ButtonBurgerCatalog = ({ page, imgLeft, onClick, imgRight }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const Icon = (
    <div className="h-[1.6rem] w-[1.6rem]">
      <img
        className="min-h-[1.6rem] min-w-[1.6rem]"
        src={imgLeft}
        alt={`img-${imgLeft}`}
      />
    </div>
  )
  const IconRight = (
    <div className=" w-4">
      <img
        className={`${
          isOpen && 'rotate-180 transform'
        } min-w-4 transition duration-500`}
        src={imgRight}
        alt={`imgR-${imgRight}`}
      />
    </div>
  )
  return (
    <Button
      buttonProps={{
        onClick: () => {
          onClick()
          setIsOpen(!isOpen)
        },
        className: 'flex items-center justify-start gap-5 ',
      }}
      iconLeft={Icon}
      iconRight={IconRight}
    >
      <span className="mr-20 whitespace-nowrap text-[1.25rem] tracking-tight  sm:mr-28 sm:text-[1.5rem]">
        {page}
      </span>
    </Button>
  )
}

export default ButtonBurgerCatalog
